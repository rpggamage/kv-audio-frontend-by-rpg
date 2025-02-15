import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

function App() {
    return (
        <div>
            <div className='w-[800px] h-[800px] bg-yellow-200 relative'>  
            <div className='w-[500px] h-[500px] bg-blue-200 relative'>



                <div className='w-[50px] h-[50px] bg-red-500 sticky top-5 left-5'>  </div>            
                <div className='w-[50px] h-[50px] bg-green-500 absolute right-10 bottom-10'>  </div>
                <div className='w-[50px] h-[50px] bg-yellow-500 fixed right-3 bottom-3'>  </div>



            </div>

            </div>
        </div>
    );
}

export default App;