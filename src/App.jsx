import React from "react";
import Card from "./Components/Card";
function App() {
const data = ["Harsh","Harsh Sharma","Prachi","Avanya"];

  return (
    <div>
    {data.map((elem,index)=>(
      <div key={index} className="px-3 py-4 bg-zinc-100 rounded-md w-fit">
        {elem}
      </div>
    ))}
   </div>
);
}

export default App;