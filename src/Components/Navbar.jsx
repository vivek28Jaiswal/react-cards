import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full flex justify-between items-center py-6 px-20 text-black text-xl'>
        <h2>LisMelo</h2>
        <div className='flex justify-between items-center rounded-md py-2 px-5 text-sm font-semibold text-black bg-[#22C55E] gap-2'>
            <h4>Most loved</h4>
            <h5>{data.filter(item => item.added).length}</h5>
        </div>
    </div>
    );
}

export default Navbar