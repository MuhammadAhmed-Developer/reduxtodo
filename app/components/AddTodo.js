"use client"
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../redux/features/todo/todoSlice'
export default function AddTodo() {
    const [title, setTitle] = useState()

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(title))
        setTitle('')
    }

  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="Add Todo" className='p-3 border-[1px] border-gray-600 rounded-lg outline-none' onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <button className='bg-blue-700 text-white px-5 py-1 rounded-2xl'>Add</button>
        </form>
    </div>
  )
}
