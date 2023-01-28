import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id : "1",
        title : "Task 1",
        description : "Task 1 description",
        completed : false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed : false
    },
    {
        id: "3",
        title: "Task 3",
        description: "Task 3 description",
        completed : false
    },
    {
        id: "4",
        title: "Task 4",
        description: "Task 4 description",
        completed : false
    },
    {
        id: "5",
        title: "Task 5",
        description: "Task 5 description",
        completed : false
    },
   
]

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state,action) => {
        state.push(action.payload);
    },
    editTask: (state, action) =>{
        console.log(action);
        const {id, title, description} = action.payload;
        const foundTask = state.find(task => task.id === id);
        if(foundTask){
            foundTask.title = title;
            foundTask.description = description;
        }
        
    },
    deleteTask: (state,action)=>{
        // console.log(action.payload);
        const taskFound = state.find(task => task.id === action.payload);

        if(taskFound){
           state.splice(state.indexOf(taskFound),1);
        }
    }
  },
});


export const { addTask, deleteTask, editTask} = taskSlice.actions

export default taskSlice.reducer;
