import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const Trail = () => {
  const [val, setVal]= useState(false);
  return (
    <div className='w-full h-screen bg-neutral-400 flex items-center justify-center'>
        <div className='relative h-56 w-96 rounded-md flex overflow-hidden'>
            <img className={`duration-700 ease-in-out	 shrink-0 ${val === false ? "-translate-x-[0]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1726487646639-ec039193792f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={`duration-300 ease-in-out	 shrink-0 ${val === false ? "-translate-x-[0]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://images.unsplash.com/photo-1726758254279-6a39c11bdcd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <span onClick={()=> setVal(()=> !val)} className={`duration-700 ease-in-out w-12 h-12 absolute rounded-full flex items-center justify-center left-1/2 bottom-[1%] -translate-x-[50%] -translate-y-[50%] bg-[#333] ${val === false ? "rotate-0" : "-rotate-180"}`}>
            <FaLongArrowAltRight size={"1.4em"} color='white' opacity={".9"} />
            </span>
        </div>
    </div>
  )
}

export default Trail