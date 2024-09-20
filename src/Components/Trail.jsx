import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Trail = () => {
  return (
    <div className='w-full h-screen bg-zinc-700 flex items-center justify-center'>
        <div className='relative h-56 w-96 bg-red-200 rounded-md flex overflow-hidden'>
            <img className='shrink-0 w-full h-full object-cover' src="https://media.istockphoto.com/id/515816334/photo/christ-church-shimla.webp?a=1&b=1&s=612x612&w=0&k=20&c=npIR4bpq94pRFepmuTCfNY0W6YiiP6orurln839crP8=" alt="" />
            <img className='shrink-0 w-full h-full object-cover' src="https://images.unsplash.com/photo-1718712760956-3e527953827b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span className='w-14 h-14 absolute rounded-full flex items-center justify-center left-1/2 bottom-[1%] -translate-x-[50%] -translate-y-[50%] bg-[#dadada8b]'>
            <FaLongArrowAltRight size={"1.5em"} />
            </span>
        </div>
    </div>
  )
}

export default Trail