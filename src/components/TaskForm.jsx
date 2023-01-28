import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.name]: e.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate("/");
  };

  return (
    <div className="relative flex flex-col w-full h-[43vh] box-content text-2xl -top-1 text-white font-bold pt-52">
      <h1 className="flex w-full justify-center">TaskForm</h1>
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
          onKeyUpCapture={(e) => {
            handleChange(e.target);
          }}
          required
        />
        <textarea
          className="text-black placeholder:text-gray-500 p-2 w-full outline-none rounded-lg bg-[#FFFFFF88]"
          name="description"
          placeholder="description"
          onKeyUpCapture={(e) => {
            handleChange(e.target);
          }}
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
  );
};

export default TaskForm;
