import React from "react";
import Esferas3D from "./Esferas3D";
setTimeout(() => {
  let esfera1 = document.getElementById("esfera1");
  let esfera2 = document.getElementById("esfera2");
  let esfera3 = document.getElementById("esfera3");
  colors();
  esfera1.style.transitionDuration = "4s";
  esfera2.style.transitionDuration = "4s";
  esfera3.style.transitionDuration = "4s";
  esfera1.style.background = "#0000FF";
  esfera2.style.background = "rgb(157,41,234)";
  esfera3.style.background = "#00FF00";
  function colors(params) {
    setTimeout(() => {
      esfera1.style.background = "#0000FF";
      esfera2.style.background = "rgb(157,41,234)";
      esfera3.style.background = "#00FF00";
      setTimeout(() => {
        esfera1.style.background = "#00FF00";
        esfera2.style.background = "#0000FF";
        esfera3.style.background = "rgb(157,41,234)";
        setTimeout(() => {
          esfera1.style.background = "rgb(157,41,234)";
          esfera2.style.background = "#00FF00";
          esfera3.style.background = "#0000FF";
          setTimeout(() => {
            colors();
          }, 1000);
        }, 4000);
      }, 4000);
    }, 4000);
  }
}, 500);
const Fondo3D = () => {
  return (
    <div>
      <Esferas3D />
    </div>
  );
};

export default Fondo3D;
