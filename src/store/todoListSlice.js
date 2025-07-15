import { createSlice } from "@reduxjs/toolkit";


const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addToDoItem: (state, action) => {
            state.unshift(action.payload);
        },
        deleteItem: (state, action) => {
            return state.filter((item)=> item.id != action.payload)
        },
        updateItem: (state, action) => {
             state.map((item)=> {
                if(item.id===action.payload.id){
                    item.value = action.payload.value
                }
                return item;
            });
        }
    }
});

export const { addToDoItem, deleteItem , updateItem} = todoListSlice.actions;
export default todoListSlice.reducer;