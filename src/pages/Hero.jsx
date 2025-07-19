import React from 'react'
import {Typewriter}  from 'react-simple-typewriter'

const Hero = () => {
  return (
    <div className="text-white min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-24 pt-24 gap-96 lg:pt-0">
      <div className="absolute md:static top-56 md:top-auto left-0 md:left-auto w-full md:w-auto flex flex-col items-center md:items-start">
        <h1 className="text-4xl lg:text-6xl font-bold mb-3 text-left">Hi, I am </h1>
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-left">Mayankk Sharma</h1>
         <span className='text-lg md:text-2xl'>I am a </span>
        <span className="text-lg md:text-2xl text-purple-700">
          <Typewriter
            words={['Full Stack Developer', 'UI/UX Developer', 'Wordpress Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className='mt-8'>
          <a href="/Mayank12691.pdf" target="_blank" rel="noopener noreferrer" className="bg-slate-400 text-white px-6 py-3 rounded hover:bg-gray-300 hover:text-slate-600 transition duration-300">
            Download CV
          </a>
        </div>
      </div>
      <div className="relative lg:static right-0 top-80 lg:top-0 h-[180px] w-[140px] lg:h-[330px] lg:w-[260px] flex items-center justify-center lg:block hidden lg:flex">
        <img src="/welcome-unscreen.gif" alt="Hero" className="w-full h-full" />
      </div>
      </div>
  )
}

export default Hero