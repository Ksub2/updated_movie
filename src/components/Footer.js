import React from 'react'
import { MonitorPlay } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-3'>
      {/* Header Row with Icon */}
      <div className='flex justify-between max-w-7xl mx-8  px-1'>
        {/* Movies Section */}
        <div className='flex flex-col items-center'>
          <div className='flex items-center'>
            <MonitorPlay size={32} className='text-white' />
            <h1 className='text-3xl font-bold mt-2 ml-2 space-x-5'>Movies</h1>
          </div>
          <div className='mt-2 flex flex-col items-center gap-1'>
            <button className='hover:underline'>Drama</button>
            <button className='hover:underline'>Comedy</button>
            <button className='hover:underline'>Action</button>
            <button className='hover:underline'>Horror</button>
          </div>
        </div>

        {/* Support Section */}
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold mt-2'>Support</h1>
          <div className='mt-2 flex flex-col items-center gap-1'>
            <button className='hover:underline'>Help Center</button>
            <button className='hover:underline'>Contact</button>
            <button className='hover:underline'>FAQ</button>
          </div>
        </div>

        {/* About Us Section */}
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold mt-2'>About Us</h1>
          <div className='mt-2 flex flex-col items-center gap-1'>
            <button className='hover:underline'>Company</button>
            <button className='hover:underline'>Careers</button>
            <button className='hover:underline'>Blog</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
