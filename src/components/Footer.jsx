import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mayank Sharma. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">React</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Tailwind CSS</a>.
        </p>
      </div>
      
    </footer>
    
   
  )
}

export default Footer

