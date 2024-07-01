import { TODOS } from '@/Recoil/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const TodosPage = () => {
  const [todos, setTodos] = useRecoilState(TODOS)


  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }




  return (
    <div>
      <h1 className='bg-gradient-to-r from-purple-800 via-orange-600 to-pink-600 py-3 text-center font-extrabold text-6xl'>Todos Page</h1>
      <form onSubmit={submitHandler} className='flex items-center justify-center py-10'>
        <input type="text" placeholder='Add Todos ...' className='px-2 py-2 w-[20rem] text-2xl text-black font-bold rounded-l-md' />
        <button type='submit' className='bg-emerald-700 py-[8px] text-xl font-bold px-6 rounded-r-lg'>ADD</button>
      </form>
      <div className='border-t-8 border-zinc-800 w-screen'>
        <ul></ul>
      </div>
    </div>
  )
}

export default TodosPage