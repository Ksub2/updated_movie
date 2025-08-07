import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom'; // Importing for navigation if needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const location=useLocation();

  
  useEffect(() => {
    setIsScrolled(false);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  
  const handleRefresh = () => {
    if(window.location.pathname==='/'){
      window.location.reload();
    }
   else{
    navigate('/');

   }
     
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-5 transition-colors duration-300 ${
          isScrolled || isMenuOpen || location.pathname !=='/'  ? 'bg-black text-white shadow-lg' : 'bg-transparent text-black'
        }`}
      >
        
        <button onClick={handleRefresh} className="text-2xl font-bold">
          Movie
        </button>

        
        <div className="cursor-pointer z-50" onClick={() => setIsMenuOpen(true)}>
          <Menu
            className={`w-7 h-7 transition-all duration-300 ${isScrolled ? 'text-white' : 'text-black'}`}
          />
        </div>
      </header>

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-50 shadow-lg transform transition-transform duration-300 rounded-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <X className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(false)} />
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          
          <button
            className="text-lg hover:text-orange-400 transition"
            onClick={handleRefresh}
          >
            Home
          </button>
          <button
            className="text-lg hover:text-orange-400 transition"
            onClick={() => navigate('/family-movies')}
          >
            Family Movies
          </button>
          <button
            className="text-lg hover:text-orange-400 transition"
            onClick={() => navigate('/teen-movies')}
          >
            Teen Movies
          </button>
          <button
            className="text-lg hover:text-orange-400 transition"
            onClick={() => navigate('/kids-movies')}
          >
            Kids Movies
          </button>
          <button
            className="text-lg hover:text-orange-400 transition"
            onClick={() => navigate('/sports-videos')}
          >
            Sports Videos
          </button>
          <button className="text-lg hover:text-orange-400 transition">
            Sign In
          </button>
          <button className="text-lg hover:text-orange-400 transition">
            Contact
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
