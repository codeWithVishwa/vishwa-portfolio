import React from 'react'
import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <RevealOnScroll>
      <div className='text-center z-10 px-4'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-right'>
          Hello, I'm Viswa
        </h1>
        <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto' >
        Hi, I'm Viswa — a Full Stack Web Developer and Python Programmer who loves building useful and creative web applications. I enjoy working on both the front-end and back-end, turning ideas into real, working products.

        </p>

        <div className='flex justify-center space-x-4'>
          <a href="#projects" className='bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 165, 0,0.8)]'>View Projects</a>
          <a href="#contact" className='border border-orange text-orange-500/70 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500/10'> Contact Me</a>

        </div>
       
      </div>
      </RevealOnScroll>
    </section>
  )
}
