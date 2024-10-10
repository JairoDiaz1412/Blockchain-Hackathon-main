// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Util para depuración. Eliminar al desplegar en una red en vivo.
import "hardhat/console.sol";

contract OriginInformationContract {
    address public immutable PropietarioDelContrato; 
    uint256 public TotalDeProductos; 
    mapping(uint256 => Producto) public Productos; 

    struct Producto {
        uint256 ID;
        string NombreDelProducto;
        string NombreDelFabricante;
        string PaisDeOrigen;
        string InformacionAdicional;
        string FechaDeCaducidad;
        address PropietarioDelProducto;
    }

    event ProductoRegistrado(
        uint256 ID,
        string NombreDelProducto,
        string NombreDelFabricante,
        string PaisDeOrigen,
        string InformacionAdicional,
        string FechaDeCaducidad,
        address PropietarioDelProducto
    );

    // Constructor
    constructor(address _propietarioDelContrato) {
        PropietarioDelContrato = _propietarioDelContrato;
    }

    modifier soloPropietario() {
        require(msg.sender == PropietarioDelContrato, "No es el propietario del contrato");
        _;
    }

    /**
     * 
     *
     * @param _nombreDelProducto (string memory)
     * @param _nombreDelFabricante (string memory)
     * @param _paisDeOrigen (string memory)
     * @param _informacionAdicional (string memory)
     * @param _fechaDeCaducidad (string memory)
     */
    function registrarProducto(
        string memory _nombreDelProducto,
        string memory _nombreDelFabricante,
        string memory _paisDeOrigen,
        string memory _informacionAdicional,
        string memory _fechaDeCaducidad
    ) public {
        TotalDeProductos++;
        Productos[TotalDeProductos] = Producto(
            TotalDeProductos,
            _nombreDelProducto,
            _nombreDelFabricante,
            _paisDeOrigen,
            _informacionAdicional,
            _fechaDeCaducidad,
            msg.sender
        );
        emit ProductoRegistrado(
            TotalDeProductos,
            _nombreDelProducto,
            _nombreDelFabricante,
            _paisDeOrigen,
            _informacionAdicional,
            _fechaDeCaducidad,
            msg.sender
        );
    }

    function retirarFondos() public soloPropietario {
        (bool success, ) = PropietarioDelContrato.call{ value: address(this).balance }("");
        require(success, "Fallo al enviar Ether");
    }

    receive() external payable {}
}
