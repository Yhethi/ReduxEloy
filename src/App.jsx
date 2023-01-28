import "./App.css";

import TaskForm from "./components/TaskForm";
import Fondo3D from "./components/Fondo3D";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import EditTaskForm from "./components/EditTaskForm";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/editTask/:id" element={<EditTaskForm />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
