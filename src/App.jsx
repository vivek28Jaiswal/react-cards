import React from 'react';
import Card from './Components/Card';
import Practice from './Components/Practice';
import Trail from './Components/Trail';
import Button from './Components/Button';

function App(){
    let data = [
        {name: 'yami', profession: 'actross', salary: 120000, img: "https://plus.unsplash.com/premium_photo-1669951867704-a78fd21fbbd2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: 'Riwick', profession: 'coder', salary: 75000, img: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {name: 'Jhonathan', profession: 'gamer', salary: 65000, img: "https://images.unsplash.com/photo-1517012021249-a130aa959065?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    ]
    return(
        <div className='w-full h-screen bg-zinc-400 flex items-center justify-center gap-4'>
            {data.map((item, index)=>(
                <Card name={item.name} profession={item.profession} img={item.img}/>
            ))}
        </div>
    );
}

export default App;