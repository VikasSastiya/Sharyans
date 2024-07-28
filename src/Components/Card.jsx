import React from 'react';

function Card() {

    const data = [
        {image:'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Amazon Basics",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesciunt laboriosam delectus!",instock:true},
        {image:'https://images.unsplash.com/photo-1609353898029-d5408b6a93ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',name:"Daily Objects",description:"Lorem ipsum dolor sit amet consesciunt laboriosam delectus!"},
        {image:'https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:"Apple",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nesiosam delectus!"}
    ]
    return (
        <div className='w-full h-screen flex items-center justify-center bg-zinc-200 gap-10'>
         {data.map((elem,index)=> (
           <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
           <div className='w-full h-32 bg-zinc-300'>
              <img className='w-full h-full object-cover' src={elem.image} alt="" />
           </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{elem.name}</h2>
                    <p className='text-xs mt-3'>{elem.description}</p>
                  <button className={`px-4 py-1 ${elem.instock ? "bg-blue-600":"bg-red-600"} text-xs rounded text-zinc-100 mt-3`}>
                    {elem.instock ? "In Stock":"Out Of Stock"}
                  </button>
                </div>
             </div>
         ))}
       </div>
    );
}

export default Card;