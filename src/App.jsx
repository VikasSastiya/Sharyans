import React, { useState } from "react";
import Card from "./Components/Card";
function App() {
  const [val,setVal]= useState(12);
  // ans[0]=value
  // ans[1]=function
    return (
  //   <>
  //     <Card/>
  //     <h1>hey</h1>
  //  </>
  <div className='p-4'>
 <h1>{val}</h1>
 <button onClick={()=>setVal(prev=>prev+1)} className='px-3 py-1 bg-blue-400 rounded-full'>change karo</button>
     </div>
)
}

export default App; 