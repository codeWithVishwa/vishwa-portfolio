import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import { Project } from './components/section/Project'
import { Contact } from './components/section/Contact'





function App() {
  const [isLoading,setisLoading]=useState(false)
  const[menuOpen,setMenuOpen]=useState(false)


  return (
    <>
    { !isLoading&&
     <LoadingScreen onComplete={()=>setisLoading(true)} />}{""}
     <div className={`min-h-screen transition-opacity duration-700 ${isLoading?"opacity-100":"opacity-0"} bg-black text-gray-100`}>
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Home />
     <About />
     <Project />
     <Contact/>

     </div>

     



    </>
  )
}

export default App
