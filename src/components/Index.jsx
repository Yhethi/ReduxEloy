import React from "react";
import Fondo3D from "../components/Fondo3D";
import { FaBeer } from "react-icons/fa";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Index = () => {
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
        lg;
      }, 4000);
    }
  }, 500);

  return (
    <div>
      <Fondo3D />
      <div className="absolute z-1 left-0 w-full h-screen flex flex-col items-center pt-4 lg:p-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 bg-[#FFFFFF22] w-[90vw] h-[60vh] lg:h-[90vh] rounded-xl lg:p-8">
          <div className="w-full col-span-1">
            <div className="flex flex-col text-center">
              <h1 className="font-bold text-white text-center font-Gugi h-40 -mb-44 lg:mt-32 grid place-content-center text-3xl gap-4">
                Redux Eloy
                <div className="w-full  flex justify-center box-content">
                  <FaBeer className="relative block  animate-[girar_3s_ease-in-out_infinite] text-6xl" />
                </div>
              </h1>
            </div>
            <TaskForm />
          </div>
          <div className="relative flex top-0 right-0 lg:w-[70vw] h-full lg:p-8">
            <div className="cards bg-[#FFFFFF22] w-full h-full rounded-xl p-8">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
