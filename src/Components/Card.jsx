import React from 'react';

function Card() {

  const data= [
    {name:"Mahiya Ve",description:"The name of the card that will be displayed"},
    {name:"Junoon",description:"The  of the card that will be displayed"}
    ];

   const handleClickDownload=()=>{alert("chal raha hai");}

  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
     {data.map((item,index)=>(
        <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
        <h3 className="font-semibold text-xl">{item.name}</h3>
        <p className="text-xs mt-2">{item.description}</p>
        <button onMouseOver={handleClickDownload}className="px-2 py-1 bg-blue-400 text-ts font-semibold text-zinc-100 rounded mt-3">Download Now</button>
     </div>
     ))

     }
    </div>
    
  )
}

export default Card;