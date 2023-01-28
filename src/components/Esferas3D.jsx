import React from "react";
import Fondo3D from "./Fondo3D";

const Esferas3D = () => {
  return (
    <div className="bg-[#000000] h-[100vh] fixed w-full left-0 grid grid-cols-5 grid-rows-5 gap-10 justify-center overflow-hidden">
      <div
        className="esfera rounded-full p-96 col-span-1 row-start-2 blur-[250px] duration-200"
        id="esfera1"
      >
        AAA
      </div>
      <div
        className="esfera rounded-full p-96 col-start-2 row-start-1 blur-[250px] duration-200"
        id="esfera2"
      >
        BBB
      </div>
      <div
        className="esfera  rounded-full p-96 col-start-4 row-start-2 blur-[250px] duration-200"
        id="esfera3"
      >
        CCC
      </div>
      <div className="absolute w-full h-full bg-[#0000009d]"></div>
    </div>
  );
};

export default Esferas3D;
