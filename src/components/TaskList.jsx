import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  // console.log(tasks);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleNavigate = (id) => {
    navigate("/editar");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[66vh] overflow-y-scroll overflow-x-hidden">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-[#FFFFFFAA] w-full h-[145.25px] rounded-xl text-center font-bold uppercase flex flex-col justify-around transition-all cursor-pointer hover:bg-[#FFFFFFCC] "
        >
          <h3>{task.title}</h3>
          <h3>{task.description}</h3>
          <div className="flex group">
            <Link
              to={`/editTask/${task.id}`}
              className="border border-[#FFFF0033] bg-[#DDDD0088] w-[50%] rounded-md hover:scale-105 duration-200"
            >
              Edit Task
            </Link>
            <button
              className="border border-[#FF000033] bg-[#DD000088] w-[50%] rounded-md hover:scale-105 duration-200"
              onClick={() => {
                handleDelete(task.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
