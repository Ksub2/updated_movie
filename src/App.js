import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import MovieSection from './components/MovieSection';
import Footer from './components/Footer';
import FamilyMovies from './pages/FamilyMovies';
import TeenMovies from './pages/TeenMovies';
import KidsMovies from './pages/KidsMovies';
import SportsVideos from './pages/SportsVideos';
import NewReleases from './pages/NewReleases';

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Header />

        <Routes>
  <Route 
    path="/" 
    element={
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
          <MovieSection />

        </motion.div>
         
      </>
    } 
  />
  
  <Route 
    path="/new-releases" 
    element={
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <NewReleases />
      </motion.div>
    } 
  />
  
  <Route path="/family-movies" element={<FamilyMovies />} />
  <Route path="/teen-movies" element={<TeenMovies />} />
  <Route path="/kids-movies" element={<KidsMovies />} />
  <Route path="/sports-videos" element={<SportsVideos />} />
</Routes>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
