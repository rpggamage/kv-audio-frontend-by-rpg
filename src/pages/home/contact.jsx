import React from 'react';
import { Link } from 'react-router-dom';


export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">Contact KV Audio</h1>
            <p className="text-gray-400 text-center mb-8">Reach out to us for inquiries, rentals, or support.</p>

            <div className="mt-10 text-center">
                <p className="text-gray-400">Or contact us via</p>
                <p className="mt-2 text-lg font-semibold text-blue-400">📞 +94 77 123 4567</p>
                <p className="text-lg font-semibold text-blue-400">📧 info@kvaudio.com</p>
            </div>

            <div className="mt-6 flex space-x-6">
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🔵 Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">📷 Instagram</a>
                <a href="#" className="text-blue-400 hover:text-blue-500 text-2xl">🐦 Twitter</a>
            </div>
        </div>
    );
}
