import React from 'react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  return (
    <div className="text-white min-h-screen flex flex-col md:flex-row gap-8 md:gap-24 px-4 md:px-16 pt-20 md:pt-32">
      {/* Left Side (Text) */}
      <div className="w-full md:w-2/3 px-0 md:px-12 pt-4 md:pt-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg md:text-2xl mb-6">
          I am a passionate Full Stack Web Developer with a love for creating dynamic and responsive web applications.
        </p>
        <p className="text-base md:text-xl mb-8">
          I have experience in various technologies including React, Node.js, and MongoDB.
        </p>
        <a
          href="#projects"
          className="bg-slate-400 text-white px-6 py-3 rounded hover:bg-gray-300 hover:text-slate-600 transition duration-300"
        >
          View Projects
        </a>
      </div>

      {/* Right Side (Image) */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start pt-8 md:pt-24">
      <Tilt glareEnable={true}
  glareMaxOpacity={0.45}
  glareColor="#projectsf0f0f0"
  glarePosition="all"
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  tiltReverse={true}
  scale={1.05}
  >
        <div className="h-[220px] w-[180px] md:h-[350px] md:w-[280px] ">
          <img
            src="/mayank.jpeg"
            alt="About Me"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </Tilt>
        
      </div>
    </div>
  );
};

export default About;
