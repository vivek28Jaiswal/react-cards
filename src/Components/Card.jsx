import React, { useState } from 'react';

function Card(){
    const [val, setVal] = useState(0);
    const newVal = () => setVal((prev)=> prev+1);
    const prevVal = () => setVal((prev)=> prev-1);
    return(
        <div className='w-full h-screen items-center flex justify-center flex-col'>
        <h2 className='text-xl font-semibold'>{val}</h2>
        <button onClick={newVal} className='px-4 py-1 mt-4 text-xs font-semibold bg-green-500 rounded-full'>
            start
        </button>
        <button onClick={prevVal} className='px-4 py-1 mt-4 text-xs font-semibold bg-green-500 rounded-full'>
            Prev
        </button>
        </div>
    );
}

export default Card;