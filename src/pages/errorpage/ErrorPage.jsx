import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100 px-4">

        <div className="text-center max-w-md">        
            <h1 className="text-8xl font-extrabold text-indigo-600 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h2>
            <p className="text-gray-500 mb-6">Sorry, the page you're looking for doesn't exist or has been moved.</p>

            <div className="flex gap-3 justify-center">
                <Link href="/" className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Go Home</Link>
            </div>
        </div>
    </div>
  );
};

export default ErrorPage;