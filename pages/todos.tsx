import { TODOS } from '@/Recoil/atoms'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { uuid } from 'uuidv4';

const TodosPage = () => {
  const [todos, setTodos] = useRecoilState(TODOS)
  const [todoTitle, setTodoTitle] = useState('')

  //^ SUBMIT HANDLER 
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const mainTodo = { id: uuid(), title: todoTitle, isCompleted: false }
    const copy = [...todos]
    copy.push(mainTodo)
    setTodos(copy)
    setTodoTitle('')
    console.log(todos)
  }

  return (
    <div>
      <h1 className='bg-gradient-to-r from-purple-800 via-orange-600 to-pink-600 py-3 text-center font-extrabold text-6xl'>Todos Page</h1>
      <form onSubmit={submitHandler} className='flex items-center justify-center py-10'>
        <input value={todoTitle} onChange={event => setTodoTitle(event.target.value)} type="text" placeholder='Add Todos ...' className='px-2 py-2 w-[20rem] text-2xl text-black font-bold rounded-l-md outline-none' />
        <button type='submit' className='bg-emerald-700 py-[8px] text-xl font-bold px-6 rounded-r-lg'>ADD</button>
      </form>
      <div className='border-t-8 border-zinc-800 w-screen'>
        {!todos.length ? (
          <h1 className='text-center mt-6 font-extrabold text-3xl text-red-900 bg-red-200/80 w-1/2 mx-auto py-5 rounded-xl'>NO TASKS</h1>
        ) : (
          todos.map((item: any) => (
            <h1 className='text-center bg-blue-800/30 w-1/3 rounded-xl border my-2 text-3xl font-extrabold  mx-auto py-3'>{item.title}</h1>
          ))
        )}
        <div className='flex items-center justify-center mt-10'>
          <button onClick={event => setTodos([])} className='bg-red-700 py-[8px] text-xl font-bold px-6 rounded-lg mx-auto '>Delete All Todos</button>
        </div>
      </div>
    </div>
  )
}

export default TodosPage