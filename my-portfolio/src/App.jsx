import {React,useEffect} from 'react'
import Hero from './components/hero'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Aos from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <main className='bg-gray-950'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
