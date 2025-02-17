import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorNotFound() {

    return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <p className="text-2xl font-semibold mt-2">Page Not Found</p>
                <p className="text-gray-400 mt-2">Oops! The page you are looking for doesn't exist.</p>
            </div>

            <div className="mt-6">
                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition">
                    Go Back Home
                </Link>
            </div>

            <div className="mt-10 text-center">
                <p className="text-gray-400">Need assistance? Contact KV Audio:</p>
                <p className="mt-2 text-lg font-semibold text-blue-400">📞 +94 77 123 4567</p>
                <p className="text-lg font-semibold text-blue-400">📧 info@kvaudio.com</p>
            </div>
        </div>
    );
}