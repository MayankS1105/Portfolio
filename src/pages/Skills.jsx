import React from 'react'
import { SkillsInfo } from '../constant'
import Tilt from 'react-parallax-tilt'


const Skills = () => {
  return (
    <section id='skills' className='py-12 px-4 sm:px-8 md:px-16'>
      <div className='text-center  text-4xl  font-bold'>
        <h3>Skills</h3>
      </div>
        <div className='w-24 h-1 bg-purple-500 mx-auto mt-2'></div>
      
      <div className='flex flex-wrap justify-center mt-5 text-gray-300 text-2xl'>
        <p>A collection of my technical and experience hand through various projects</p>
      </div>

      <div className='flex flex-wrap justify-between gap-3'>
        {SkillsInfo.map((category) => (
          <div key={category.title} className='flex flex-col w-full sm:max-w-[48%] mt-10 border-1 border-gray-500 shadow-sm shadow-gray-500 py-2 px-4 sm:px-6 rounded-2xl'>
            <div>
               <h4 className='text-2xl font-semibold text-center w-full mb-4'>{category.title}</h4>
               {/* <div className='w-28 h-0.5 bg-gray-700 mx-auto mb-4'></div> */}
            </div>
           
            <Tilt 
            glareEnable={true}
              glareMaxOpacity={0.45}
              glareColor="#projectsf0f0f0"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              tiltReverse={true}
              scale={1.05}
              >
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 px-1 sm:px-3 py-2'>
              {category.skills.map((skill) => (
                <div key={skill} className='flex items-center justify-center mb-2 border border-gray-500 rounded-2xl p-2 hover:bg-gray-700 transition duration-300 min-w-0'>
                  <img src={skill.logo} alt={skill} className='w-7 h-7 mr-1 sm:mr-2 flex-shrink-0' />
                  <span className='text-xs sm:text-sm text-gray-300 break-words whitespace-pre-line text-center'>{skill.name}</span>
                </div>
              ))}
            </div>
            </Tilt>
            
          </div>

          
        ))}
      </div>
    </section>
  )
}

export default Skills