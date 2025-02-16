import React from 'react';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
            <a href="//www.googluioe.com/">
                <div className="bg-contain bg-no-repeat w-40 h-14" style={{ backgroundImage: "url(//www.googluie.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png)" }}></div>
            </a>
            <div className="mt-6 text-center">
                <p className="text-3xl font-bold">404.</p>
                <p className="text-lg text-gray-600">That’s an error.</p>
                <p className="text-sm mt-2">The requested URL <code className="bg-gray-200 p-1 rounded">/....</code> was not found on this server.</p>
                <p className="text-sm text-gray-500 mt-2">That’s all we know.</p>
            </div>
        </div>
    );
}

export default NotFound;