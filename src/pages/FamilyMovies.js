import React from 'react';
import { Link } from 'react-router-dom';

const FamilyMoviesPage = () => {
  
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Family Movies</h1>
        
        <Link 
          to="/" 
          className="mt-4 px-6 py-3 text-1xl bg-yellow-500 rounded-full p-2 transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/50 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default FamilyMoviesPage;
