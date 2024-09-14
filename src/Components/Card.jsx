import React from 'react';

function Card(){

    let data = [
        {image: 'https://images.unsplash.com/photo-1658842042844-eeb5ad17b7d3?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Mindset.", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius ab necessitatibus consequuntur adipisci suscipit.", instock: false},
        {image: 'https://images.unsplash.com/photo-1663868652516-dabef3845d29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Tom Hanks.", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius ab necessitatibus consequuntur adipisci suscipit.", insstock: false},
        {image: 'https://images.unsplash.com/photo-1624979393459-37e156d6ebce?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Wanted.", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius ab necessitatibus consequuntur adipisci suscipit.", instock: true},
    ];

    return(
        <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            {data.map((elem,index)=>(
                <div key={index} className='w-64 bg-zinc-100 rounded-lg overflow-hidden'>
            <div className='w-full h-44 bg-zinc-300'>
                <img className='w-full h-full object-cover' src={elem.image} alt="" />
            </div>
            <div className='px-4 py-4'>
                <h2 className='mt-4 text-lg font-semibold'>{elem.name}</h2>
                <p className='mt-2 text-xs'>{elem.description}</p>
                <button className={`px-4 py-1 text-white mt-4 ${elem.instock ? "bg-blue-600" : "bg-red-600"} rounded text-xs`}>
                    {elem.instock ? "In Stock" : "Out Of Stock"}
                </button>
            </div>
            </div>
            ))}
        </div>
    );
}
export default Card;