"use client"
import React, { useEffect, useState } from 'react'
import { RecoilRoot, atom, useRecoilState } from 'recoil'
import { COUNT } from '@/Recoil/atoms'

// ====================================================================================================================================


const Home = () => {
  const [count, setCount] = useRecoilState<number>(COUNT)
  const [onclient, setOnClient] = useState(false)
  useEffect(() => { setOnClient(true) }, [])

  return (
    <RecoilRoot>
      <div className='flex flex-col items-center justify-center w-screen h-screen text-3xl font-extrabold'>
        <h1>{count}</h1>
        <span className='space-x-6 mt-10'>
          <button className='border-2 px-4 leading-7' onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
          <button className='border-2 px-4 leading-7' onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </span>
      </div>
    </RecoilRoot>
  )
}

export default Home