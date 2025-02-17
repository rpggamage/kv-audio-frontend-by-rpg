import React from 'react';
import { Header } from '../../components/header';
import Contact from './contact';
import Items from './items';
import Gallery from './gallery';
import Home from './home';
import { Route, Routes } from 'react-router-dom';
import ErrorNotFound from './errorNotFound';

export function HomePage() {
    return (
        <>
            <Header />
            <div className='w-full h-[calc(100vh-100px)] bg-slate-700'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<ErrorNotFound />} /> {/* 404 Fallback */}
                </Routes>
            </div>
        </>
    );
}

export default HomePage;
