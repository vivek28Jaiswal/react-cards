import React from 'react'

function Card({data, handleClick, index}) {
  const {img, name, artish, added} = data
  return (
    <div className='w-64 pb-8 bg-white rounded-md p-4 flex gap-4 relative mt-10'>
      <div className='w-20 h-20 bg-gray-300 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={img} alt="" />
      </div>
      <div className=''>
        <h4 className='font-semibold text-lg leading-none'>{name}</h4>
        <h5 className='text-sm'>{artish}</h5>
      </div>
      <button onClick={()=>handleClick(index)} className= {`absolute py-2 px-4 ${added === false ? 'bg-red-500' : "bg-green-500" } text-sm rounded-full bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%] whitespace-nowrap`}>{added === false ? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default Card