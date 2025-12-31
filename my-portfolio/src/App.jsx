import {React,use,useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main className='bg-gray-950'>
      <h1 className='text-white'>Hello, World!</h1>
      
    </main>
  )
}

export default App
