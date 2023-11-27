
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="ml-2 text-lg font-semibold">Hosted by Vercel </span>
          <span className='pl-3 font-light inline-block'>and made with love by Aelys</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;