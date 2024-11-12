import React, { useState } from 'react';
import Card from './Components/Card';
import Practice from './Components/Practice';
import Trail from './Components/Trail';
import Button from './Components/Button';
import Navbar from './Components/Navbar';

function App(){

    const data = [
        { img:"https://plus.unsplash.com/premium_photo-1708589336871-a0a2bf57c696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvdGlmeSUyMG11c2ljJTIwOTBzJTIwYm9sbHl3b29kfGVufDB8fDB8fHww", name: "Dark Side", artish: "BegPain", added: false},
        { img:"https://plus.unsplash.com/premium_photo-1708194041635-8e503d8c09fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8", name: "Lovers", artish: "Taylor S.", added: false},
        { img:"https://c.saavncdn.com/304/First-Class-Hits-of-Varun-Dhawan-Hindi-2023-20230721135400-500x500.jpg", name: "fallen on you", artish: "Gwen Swocks", added: true},
    ];

    const [songData, SetsongData]= useState(data); 
    const handleClick = (index) =>{
        SetsongData((prev) =>{
            return prev.map((item, itemIndex)=>{
                if(index === itemIndex) return{ ...item , added: !item.added};
                return item;
            })
        }
    )
    }

    return(
        <div className='w-full h-screen bg-zinc-200'>
            <Navbar data={songData} />
            <div className='px-20 flex gap-5 flex-wrap'>
                {songData.map((obj, index)=>{
                    return <Card data={obj} handleClick={handleClick} index={index} key={index}/>;
                })}
            </div>

        </div>
    );
}

export default App;