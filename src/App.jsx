import React, { useState } from 'react';
import Card from './Components/Card';
import Practice from './Components/Practice';
import Trail from './Components/Trail';
import Button from './Components/Button';

function App(){
    let dets = [
        {name: 'yami Light', profession: 'actross', salary: '$1200', img: "https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: 'Riwick json', profession: 'coder', salary: '$1400', img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: 'Jhonathan parl', profession: 'gamer', salary: '$1000', img: "https://images.unsplash.com/photo-1517012021249-a130aa959065?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    ]
    const [data, Setdata] =  useState(dets)
    return(
        <div className='w-full h-screen bg-zinc-400 flex items-center justify-center gap-4'>
            {dets.map((item, index)=>(
                <Card key={index} Values={item}/>

                // there are two way to send data or pass data in card component
                // <Card key={index} name={item.name} profession={item.profession} img={item.img}/>
            ))}
        </div>
    );
}

export default App;