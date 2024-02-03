import { configureStore } from "@reduxjs/toolkit";
import  TodoDetails  from "../features/TodoSlice";




export const store = configureStore({
    reducer:{
        Todo:TodoDetails
    },
})