import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 *
 *
 *
 * @param hre HardhatRuntimeEnvironment objeto.
 */
const deployOriginInformationContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("OriginInformationContract", {
    from: deployer,

    args: ["0xde50DEc17dF03BC7abaC89FE1945b9AE1f4941Fe"],
    log: true,
    autoMine: true,
  });

  const originInformationContract: Contract = await hre.ethers.getContract("OriginInformationContract", deployer);
  console.log(
    "👋 Contrato de Información de Origen desplegado con éxito. Total de productos:",
    await originInformationContract.TotalDeProductos(),
  );
};

export default deployOriginInformationContract;

deployOriginInformationContract.tags = ["OriginInformationContract"];
