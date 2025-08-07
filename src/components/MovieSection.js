import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MovieSection = () => {
  const [activeCategory, setActiveCategory] = useState('Popular Movies');
  const navigate=useNavigate();
  const NewReleases=()=>{
    navigate('/new-releases');
  }

  const movieData = {
    
    'Popular Movies': [
      { id: 5, title: 'Taken', year: '2007', imageUrl: '/assets/image7.jpeg' },
      { id: 6, title: 'Theri', year: '2016', imageUrl: '/assets/image8.jpg' },
    ],
    'Recommended': [
      { id: 7, title: 'Sinister', year: '2012', imageUrl: '/assets/image5.jpg' },
      { id: 8, title: 'Ragini MMS-2', year: '2014', imageUrl: '/assets/image6.jpg' }
    ]
  };
   const handlePremium=()=>{
    if(window.location.pathname==='/'){
      window.location.reload();
    }
   else{
    navigate('/');

   }
  };
  const categoryCards = [
    {
      title: 'Family Movies',
      image: '/assets/image9.jpg',
      path: '/family-movies'
    },
    {
      title: 'Teen Movies',
      image: '/assets/image10.jpg',
      path: '/teen-movies'
    },
    {
      title: 'Kids Movies',
      image: '/assets/image11.jpg',
      path: '/kids-movies'
    },
    {
      title: 'Sports Video',
      image: '/assets/image12.jpg',
      path: '/sports-videos'
    }
  ];


  return (
    <>
      <section className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Buttons */}
          <div className="flex justify-center mb-10 space-x-4">
            {/* {Object.keys(movieData).map(category => ( */}
            <button
              
              onClick={NewReleases}
              className={`px-4 py-2 rounded-full font-semibold ${
                activeCategory === 'New Releases'
                  ? 'bg-yellow-500 text-black'
                  : 'bg-gray-700 text-white hover:bg-yellow-500'
              } transition duration-300`}
            >
              {' New Releases'}
            </button>
              <button
              
                onClick={() => setActiveCategory('Popular Movies')}
                className={`px-4 py-2 rounded-full font-semibold ${
                  activeCategory === 'Popular Movies'
                    ? 'bg-gray-700 text-white hover:bg-yellow-500'
                    : 'bg-yellow-500 text-white '
                } transition duration-300`}
              >
                {'Popular Movies'}
              </button>
            {/* ))} */}
            <button
              
                onClick={() => setActiveCategory('Recommanded')}
                className={`px-4 py-2 rounded-full font-semibold ${
                  activeCategory === 'Recommanded'
                    ? 'bg-gray-700 text-black '
                    : 'bg-gray-700 text-white hover:bg-yellow-500'
                } transition duration-300`}
              >
                {'Recommended Movies'}
              </button>

          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {movieData[activeCategory]?.map((movie) => (
              <div key={movie.id} className="group relative rounded-xl overflow-hidden shadow bg-gray-900">
                <div
                 className="relative aspect-w-3 aspect-h-4 w-full">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <Play size={48} className="text-white cursor-pointer mb-3 animate-pulse" /> 
                    <button className="px-4 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
                      Play Movie
                    </button>
                  </div>
                </div>
                <div className="p-4 text-center space-y-1">
                  <h2 className="text-white text-lg font-bold">{movie.title}</h2>
                  <p className="text-gray-400">{movie.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Category Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center justify-center mt-12"
          >
            <h1 className="text-3xl font-bold text-white mb-8">Video for Everyone</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
              {categoryCards.map((item, index) => (
                <Link to={item.path} key={index} className="group">
                  <div className="bg-black rounded-xl overflow-hidden shadow hover:shadow-yellow-500/20 transition-shadow duration-300 text-center">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-white font-semibold hover:text-yellow-500 transition-colors text-lg">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
  <div className="absolute inset-0">
    <img
      className="w-full h-full object-cover"
      src="/assets/image13.jpg"
      alt="movie background"
    />
    {/* Gradient overlay - darker on top, bottom, and left */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent  "></div>
  </div>

  <div className="relative z-10 flex flex-col items-start justify-center h-full text-left px-6 md:px-15">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <motion.h1
        className="text-white text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg leading-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        The best movie and <br /> video on your home.
      </motion.h1>

      <motion.p
        className="text-white/90 text-xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Discover top-rated entertainment, handpicked just for you.
      </motion.p>
      <button className="text-2xl bg-yellow-500 rounded-full p-2 transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/50 hover:shadow-lg" onClick={handlePremium}>
        Go Premium
      </button>
    </motion.div>
  </div>
</section>


    </>
  );
};

export default MovieSection;
