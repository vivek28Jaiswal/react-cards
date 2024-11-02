import React from 'react'
import { FaHandDots } from 'react-icons/fa6';

const Card = ({Values,handlingEvent,index}) => {
  const {name, img, profession, salary, friends} = Values;
  return (
    <div className='w-64 bg-zinc-200 rounded-md'>
        <div className='w-full h-48'>
            <img className='w-full h-full object-cover object-center rounded-t-md' src={img} alt="" />
        </div>
        <div className='w-full p-2'>
        <h4 className='text-sm font-semibold capitalize'>{name}</h4>
        <h5 className='text-xs capitalize mt-2'>{profession}</h5>
        <h4 className='text-sm opacity-[.8]'>{salary}</h4>
        <div>
        <button onClick={()=>handlingEvent(index)} className={`px-5 py-1 ${friends === true ? "bg-blue-500" : "bg-red-500"} text-white text-xs mt-2 rounded-md font-semibold`}>{friends === true ? "Friends" : "Add Friends"}</button>
        </div>
        </div>
    </div>
  )
}

export default Card