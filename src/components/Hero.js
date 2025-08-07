import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';


const Hero = () => {
  return (
    <div className='relative h-screen w-full overflow-hidden'>
      
      <div className='absolute inset-0'>
        <img 
          className='w-full h-full object-cover'
          src='/assets/watchmovie.jpg' 
          alt='movie background'
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </div>

   
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.h1 
            className='text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Watch movies anytime,<br />everywhere.
          </motion.h1>

          <motion.p 
            className='text-white/90 text-xl mb-8 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Stream thousands of movies and TV shows in 4K HDR quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="relative w-full max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="Search for movies, shows..."
              className="w-full py-3 pl-6 pr-12 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
            />
            <Search className='absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 w-5 h-5 cursor-pointer hover:text-orange-400 transition-colors duration-300' />
          </motion.div>
        </motion.div>

        {/* Video for Everyone Section
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0"
        >
          <h2 className='text-white text-lg md:text-xl font-medium'>
            Video for Everyone
          </h2>
          <div className="flex justify-center gap-6 mt-4">
            {['4K', 'HDR', 'Dolby Vision', 'Multi-Platform'].map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-white/80 text-sm md:text-base"
              >
                {item}
              </motion.span> */}
            {/* ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;