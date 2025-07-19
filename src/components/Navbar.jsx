import React, { useEffect, useState } from 'react'
import {FiMenu , FiX} from 'react-icons/fi'
import {FaGithub , FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
   
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu on link click
  }

  const navLinks = [
    { href: '#hero', label: 'Home', key: 'home' },
    { href: '#about', label: 'About', key: 'about' },
    { href: '#skills', label: 'Skills', key: 'skills' },
    { href: '#experience', label: 'Experience', key: 'experience' },
    { href: '#education', label: 'Education', key: 'education' },
    { href: '#projects', label: 'Projects', key: 'projects' },
    { href: '#contact', label: 'Contact', key: 'contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800/50 backdrop-blur-3xl' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center p-3 sm:p-5 sm:px-10 w-full">
          <div className="text-2xl sm:text-3xl font-bold flex-shrink-0">
            <a href="/">My Portfolio</a>
          </div>
          <div className="hidden md:flex space-x-4 text-base lg:text-xl">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className={`hover:text-gray-300 ${activeLink === link.key ? 'text-blue-500' : ''}`}
                onClick={() => handleLinkClick(link.key)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-2 ml-2">
            <a href="https://github.com/Paras-29" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl sm:text-3xl hover:text-gray-300" />
            </a>
            <a href="http://www.linkedin.com/in/paras-gulvanshi" target="_blank" rel="noopener noreferrer" className="ml-2 sm:ml-4">
              <FaLinkedin className="text-2xl sm:text-3xl hover:text-gray-300" />
            </a>
          </div>

          <button className="md:hidden text-3xl ml-2" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          { isMenuOpen && (
            <div className={`fixed inset-0 top-0 left-0 bg-gray-900/95 backdrop-blur-md w-full h-full md:hidden flex flex-col items-center justify-start z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
              <button className="absolute top-6 right-6 text-3xl text-white hover:text-purple-400 focus:outline-none" onClick={toggleMenu} aria-label="Close menu">
                <FiX />
              </button>
              <ul className="flex flex-col space-y-6 w-full px-8 pt-24">
                {navLinks.map(link => (
                  <li key={link.key} className="w-full">
                    <a
                      href={link.href}
                      className={`block text-lg font-semibold py-2 w-full hover:text-gray-300 ${activeLink === link.key ? 'text-blue-500' : ''}`}
                      onClick={() => handleLinkClick(link.key)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
        </div>
      </nav>
    </>
  )
}

export default Navbar