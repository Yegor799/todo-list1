import { configureStore } from "@reduxjs/toolkit";
import todo from "./todos/todos-reducer";


const store = configureStore({
    reducer: {
        todos: todo,
        
        // inProgress: inProgressReducer,
        // done: doneReducer,
        // filter: filterReducer,
    }



});


export default store;