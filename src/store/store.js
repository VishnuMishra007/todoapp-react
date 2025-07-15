import { configureStore } from "@reduxjs/toolkit";
import todoListSlice from "./todoListSlice";




const store = configureStore({
    reducer: {
        todoList: todoListSlice
    }
});

export default store;
