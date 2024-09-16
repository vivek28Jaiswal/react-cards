import React from "react"; 

function Card(){
    let data = [
        { Image:"https://i1.sndcdn.com/artworks-hAiTfsOSiHL4nIM1-LHNs3Q-t500x500.jpg", song: "Wanna be yours", discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ducimus."},
        { Image:"https://i.scdn.co/image/ab67616d0000b273b40f953d9ebdc956544e28a5", song: "Lover", discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ducimus."},
        { Image:"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Ed_Sheeran_Perfect_Single_cover.jpg/220px-Ed_Sheeran_Perfect_Single_cover.jpg", song: "Perfect", discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ducimus."},
    ];

    let downloadHandling = ()=> {alert("downloading...");}
    return(
        <div className="w-full h-screen bg-zinc-800 flex flex-col items-center justify-center gap-4">
            {data.map((elem, index) =>(
                <div key={index} className="px-2 py-2 w-96 h-32 bg-zinc-300 rounded-md flex gap-4"> 
                 <div className="ImgContainer h-full w-28 bg-green-200 rounded-md">
                    <img className="rounded-md" src={elem.Image} alt="" />
                 </div>
                <div className="SongName w-56 h-6 px-2 text-xm font-semibold">
                    <h4>{elem.song}</h4>
                    <p className="text-xs mt-1 text-xs">{elem.discription}</p>
                    <button onClick={downloadHandling} className="px-2 py-1 bg-green-600 rounded-sm text-xs text-zinc-100 font-semibold mt-2">Download Now</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Card;