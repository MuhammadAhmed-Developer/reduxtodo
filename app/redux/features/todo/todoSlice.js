import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState  = {
   todos:[{
    id: nanoid(),
    title: "first Todo",
   }] 
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        addTodo:(state, action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer