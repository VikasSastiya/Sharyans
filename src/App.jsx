import React, { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [banned,setBanned]= useState(false);
  // ans[0]=value
  // ans[1]=function
    return (
  //   <>
  //     <Card/>
  //     <h1>hey</h1>
  //  </>
  <div className='p-4'>
 <h1>{banned.toString()}</h1>
 <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>change karo</button>
 </div>
)
}

export default App; 