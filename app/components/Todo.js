"use client"
import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { removeTodo } from '../redux/features/todo/todoSlice'
export default function Todo() {

   const todos = useSelector(state=>state.todos)
   const dispatch = useDispatch()
  return (
    <>
      
      {todos.map((title, i)=>{
        return (
          <div key={i} className='flex items-center mt-5'>
            <button onClick={()=>dispatch(removeTodo(title.id))} className='mx-2 bg-orange-500 rounded-full h-8 w-8'> X</button>
            <p className='text-blue-950 text-xl font-mono'>{title.title}</p>
          </div>
        )
      })}
    </>
  )
}
