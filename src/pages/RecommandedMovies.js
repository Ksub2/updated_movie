import React from 'react'
import { Play } from 'lucide-react'

const RecommendedMovies = () => {
  const RecMovies = [
    { id: 1, title: 'Sinister', year: '2012', imageUrl: '/assets/image5.jpg' },
    { id: 2, title: 'Ragini MMS-2', year: '2014', imageUrl: '/assets/image6.jpg' }
  ]

  const handleGoBack = () => {
    if (window.location.pathname === '/') {
      window.location.reload()
    } else {
      window.history.back()
    }
  }

  return (
     <div className="px-4 py-8 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">New Releases</h1>
          <button className='mt-1 px-6 py-3 text-1xl bg-yellow-500 rounded-full  transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/50 hover:shadow-lg m-3 mx-0' onClick={handleGoBack}>Go Back</button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {RecMovies.map((movie) => (
              <div
                key={movie.id}
                className="group relative rounded-xl overflow-hidden shadow bg-gray-900"
              >
                <div className="relative aspect-w-3 aspect-h-4 w-full">
                  <img
                    src={movie.imageUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        </div>
  )
}

export default RecommendedMovies
