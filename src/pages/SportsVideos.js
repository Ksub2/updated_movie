import React from 'react';
import { Link } from 'react-router-dom';

const SportsVideos = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Sports Videos</h1>
        {/* Back to Home button */}
        <Link 
          to="/" 
          className="mt-4 px-6 py-3 text-1xl bg-yellow-500 rounded-full  transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/50 hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SportsVideos;
