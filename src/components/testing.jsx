import React, { useState } from "react";
export default function Testing(){
    //let count = 0;
    const [count,setCount]=useState(0);
    return(
        <div className="w-full h-screen">
            <h1>{count}</h1>
            <button onClick={() => {
                
                setCount(count+1);
                }
                }>Increment</button>


            
        </div>
    )



}