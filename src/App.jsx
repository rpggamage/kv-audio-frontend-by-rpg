import React from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

import AdminPage from './pages/admin/adminPage';
import NotFound from './pages/notFound/notFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';


function App() {
    return (
        <BrowserRouter>
            <Routes path="/*" >
            
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/*" element={<NotFound />} /> */}

            </Routes>
        </BrowserRouter>
    );
}

export default App;