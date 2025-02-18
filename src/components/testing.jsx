import React, { useState } from "react";
export default function Testing(){
    //let count = 0;
    const [count,setCount]=useState(0);
    const [itemName,setItemName]=useState("");

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center p-4">
            <h1 className="text-9xl">{count} {itemName}s</h1>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg " onClick={() => {setCount(count+1);}}>
                Count
                </button>

            <div className="w-full p-4 flex justify-evenly items-center">

                <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg " onClick={() => {setItemName("Coconut");}}>Coconut</button>

                <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg " onClick={() => {setItemName("Banana");}}>Banana</button>

                <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg " onClick={() => {setItemName("Apple");}}>Apple</button>

                <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg " onClick={() => {setItemName("Other");}}>Other</button>

            </div>
            
        </div>
    )



}