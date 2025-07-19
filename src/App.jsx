import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import { BrowserRouter , Routes, Route, } from 'react-router-dom'


function App() {
  return (
    <>
      <div className="bg-gradient-to-l from-slate-600 to-zinc-900 text-white min-h-screen pt-2 ">
   
        <Navbar />
        <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
        <Footer />
    
      </div>
    </>
  )
}

export default App
