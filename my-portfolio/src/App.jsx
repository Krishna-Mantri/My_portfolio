import {React,useEffect} from 'react'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
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
    </main>
  )
}

export default App
