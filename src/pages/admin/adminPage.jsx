
import React from 'react';

import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { Link, Route, Routes } from 'react-router-dom';

export default function AdminPage() {
    return (
        <div className='w-full h-screen flex'>

        < div className='w-[400px] h-full bg-green-200'>
            <Link to="/admin/Dashboard" className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <BsGraphDown />
                Dashboard
            </Link>
            <Link to="/admin/booking" className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <FaRegBookmark />Booking
            </Link>
            <Link to="/admin/items" className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <MdOutlineSpeaker />
                Items
            </Link>
            <Link to="/admin/user" className='w-full h-[40px] test-[25px] font-bold flex justify-center items-center'> 
            <FaRegUser />
                Users
            </Link>
        </div>
        
        <div className=' bg-blue-900 w-[calc(100vw-450px)]'>
                <Routes>
                    
                    <Route path="/user" element={<h1>Users</h1>} />
                    <Route path="/booking" element={<h1>Booking</h1>} />
                    <Route path="/items" element={<h1>Items</h1>} />
                    <Route path="/Dashboard" element={<h1>Dashboard</h1>} />


                </Routes>
            </div>
        
    </div>
    );
}