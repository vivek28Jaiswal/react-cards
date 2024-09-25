import React from 'react'

const Card = ({name, profession, img}) => {
  return (
    <div className='w-64 bg-zinc-200 rounded-md'>
        <div className='w-full h-48'>
            <img className='w-full h-full object-cover object-center rounded-t-md' src={img} alt="" />
        </div>
        <div className='w-full p-2'>
        <h4 className='text-sm font-semibold capitalize'>{name}</h4>
        <h5 className='text-xs capitalize'>{profession}</h5>
        <div>
        <button className='px-4 py-1 bg-blue-500 text-white text-xs mt-2 rounded-md'>Connect</button>
        </div>
        </div>
    </div>
  )
}

export default Card