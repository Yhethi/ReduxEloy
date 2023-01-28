import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import Esferas3D from "./Esferas3D";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.name]: e.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);
  // Fondo

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

  return (
    <div>
      <Esferas3D />
      <div className="flex justify-center">
        <div className="relative flex flex-col w-[300px] h-[43vh] box-content text-2xl -top-1 pl-4 text-white font-bold pt-52">
          <h1 className="flex w-full justify-center">Edit TaskForm</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="p-4 flex flex-col gap-4"
          >
            <input
              className="text-black placeholder:text-gray-500 p-2 w-full outline-none rounded-lg bg-[#FFFFFF88]"
              type="text"
              name="title"
              placeholder="title"
              onChange={(e) => {
                handleChange(e.target);
              }}
              value={task.title}
              required
            />
            <textarea
              className="text-black placeholder:text-gray-500 p-2 w-full outline-none rounded-lg bg-[#FFFFFF88]"
              name="description"
              placeholder="description"
              onChange={(e) => {
                handleChange(e.target);
              }}
              value={task.description}
              required
            ></textarea>
            <button
              className="border border-[#00FF0033] bg-[#00FF0088] rounded-md hover:scale-105 duration-200"
              type="submit"
            >
              Save Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
