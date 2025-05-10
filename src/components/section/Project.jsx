import React from 'react'
import { RevealOnScroll } from "./RevealOnScroll";


export const Project = () => {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-orange-700 to-yellow-400 bg-clip-text text-transparent text-center'>Future Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(255,165,0,0.8)] transition '>
          <h3 className='text-xl font-bold mb-2'>AI-Powered Chess Analyzer</h3>
          <p className='text-gray-400 mb-4'>➝A desktop tool that analyzes chess games using advanced AI models. It will provide move suggestions, opening repertoire guidance, and endgame insights tailored to player level.</p>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(255,165,0,0.8)] transition '>
          <h3 className='text-xl font-bold mb-2'>Full-Stack Movie Streaming App</h3>
          <p className='text-gray-400 mb-4'>➝Inspired by Netflix, this project will feature user authentication, a real-time database, personalized watchlists, and secure video streaming using MERN stack and AWS.</p>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(255,165,0,0.8)] transition '>
          <h3 className='text-xl font-bold mb-2'>Portfolio Builder SaaS</h3>
          <p className='text-gray-400 mb-4'>➝A web app that helps developers quickly create and deploy stylish personal portfolios. It will include pre-built templates, drag-and-drop customization, and GitHub integration Totally Free of cost </p>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(255,165,0,0.8)] transition '>
          <h3 className='text-xl font-bold mb-2'>Space Colonization Blog & Visualization</h3>
          <p className='text-gray-400 mb-4'>➝A dynamic, interactive site exploring the future of space colonization. Includes animations, scientific research breakdowns, and 3D visualizations using Three.js.

</p>
          </div>
        </div>

      </div>
      </RevealOnScroll>
    </section>
  )
}
