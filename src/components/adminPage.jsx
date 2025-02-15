
import React from 'react';

import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex'>

        < div className='w-[400px] h-full bg-green-200'>
            <button className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <BsGraphDown />
                Dashboard
            </button>
            <button className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <FaRegBookmark />Booking
            </button>
            <button className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <MdOutlineSpeaker />
                Items
            </button>
            <button className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <FaRegUser />
                Users
            </button>
        </div>
        
        <div className='w-full bg-red-900'>
    
        </div>
        
    </div>
    );
}