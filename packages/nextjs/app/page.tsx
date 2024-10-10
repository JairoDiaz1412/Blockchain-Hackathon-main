"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <div className="flex items-center flex-col flex-grow pt-10 bg-white text-blue-800 relative">
      <div className="px-5 relative z-10">
        <h1 className="text-center">
          <span className="block text-2xl mb-2">Bienvenido a</span>
          <span className="block text-4xl font-bold">SuministroApp</span>
        </h1>
        <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
          <p className="my-2 font-medium">Dirección conectada:</p>
          <Address address={connectedAddress} />
        </div>

        <p className="text-center text-lg">
          La transparencia en la cadena de suministro es esencial para garantizar la confianza del consumidor. Permite a
          los clientes rastrear el origen de los productos, lo que puede influir en sus decisiones de compra. Con la
          creciente demanda de sostenibilidad y ética en la producción, las empresas deben proporcionar información
          clara y verificable sobre sus productos.
        </p>

        <Image src="/2.jpg" width={500} height={500} alt="Picture of the author" />

        <p className="text-center text-lg mt-4">
          La tecnología blockchain es una herramienta poderosa para lograr esta transparencia. A través de contratos
          inteligentes, se puede registrar y verificar la información sobre cada etapa del proceso de producción y
          distribución. Esto incluye el origen de los materiales, el proceso de fabricación y la entrega final al
          consumidor. Con datos inmutables, se reduce el riesgo de fraudes y se asegura que la información sea accesible
          y verificable por todas las partes interesadas.
        </p>

        <p className="text-center text-lg mt-4">
          Este proyecto tiene como objetivo implementar un sistema basado en blockchain que permita a los consumidores
          acceder a información detallada sobre sus productos, promoviendo la responsabilidad y la transparencia en la
          industria. Al hacerlo, esperamos fomentar prácticas comerciales más éticas y sostenibles.
        </p>
      </div>

      <div className="flex-grow bg-blue-100 w-full mt-16 px-8 py-12 relative z-10">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-white px-10 py-10 text-center items-center max-w-xs rounded-3xl shadow-lg">
            <BugAntIcon className="h-8 w-8 fill-blue-800" />
            <p>
              Experimenta con tu contrato inteligente usando la{" "}
              <Link href="/debug" passHref className="link text-blue-600">
                pestaña de Depuración de Contratos
              </Link>{" "}
              .
            </p>
          </div>
          <div className="flex flex-col bg-white px-10 py-10 text-center items-center max-w-xs rounded-3xl shadow-lg">
            <MagnifyingGlassIcon className="h-8 w-8 fill-blue-800" />
            <p>
              Explora tus transacciones locales con la{" "}
              <Link href="/blockexplorer" passHref className="link text-blue-600">
                pestaña del Explorador de Bloques
              </Link>{" "}
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
