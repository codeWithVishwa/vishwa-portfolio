import React, { useEffect, useRef, useState } from 'react';
import '../../index.css';
import profile4 from '../../assets/profile4.jpg';
import { RevealOnScroll } from "./RevealOnScroll";


export const About = () => {
  const frontendSkills = ["Html", "css", "javascript", "react", "tailwind"];
  const backendSkills = ["Node", "python", "MongoDB", "Aws", "express js"];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 } // adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
      ref={sectionRef}
    >
      <RevealOnScroll>
      <div className={`max-w-3xl mx-auto px-4 ${isVisible ? 'slide_right' : ''}`}>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-orange-700 to-yellow-300 bg-clip-text text-transparent text-center'>
          About Me
        </h2>
        <img
          src={profile4}
          className='h-32 w-32 rounded-full border-2 border-orange-500 shadow-lg mx-auto mb-5 hover:-translate-y-1 transition-all hover:drop-shadow-[0_0_10px_rgba(255,115,0,0.5)]'
          alt="profile"
        />
        <div className='glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
          <p className='text-gray-300 mb-6 font-sans'>
            A passionate Full Stack Web Developer and skilled Python Programmer, focused on building scalable,
            user-friendly digital experiences. With hands-on expertise in both front-end and back-end technologies,
            I enjoy transforming ideas into powerful, real-world web applications. <br /><br />
            Outside of tech, chess plays a big role in shaping my strategic thinking and problem-solving approach.
            Whether it’s writing efficient code or calculating moves on the board, I thrive on challenges that push me
            to grow and think ahead.
            <br /><br />
            Always eager to learn, collaborate, and contribute to projects that drive innovation and create meaningful impact.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {frontendSkills.map((tech, index) => (
                  <span key={index} className='bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(255,165,0,0.8)] transition font-mono'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>Backend</h3>
              <div className='flex flex-wrap gap-2'>
                {backendSkills.map((tech, index) => (
                  <span key={index} className='bg-orange-500/10 text-orange-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(255,165,0,0.8)] transition font-mono'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
               <h3 className='text-xl font-bold mb-4'>
               🎓Education
               </h3>
               <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li> 
                  <strong> Pursuing Bachelor of Science (B.Sc.) in Artificial intelligence and machine learning</strong><br /><p>-Hindusthan college of arts and science ,coimbatore</p>
                </li>
               </ul>

            </div>

            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
               <h3 className='text-xl font-bold mb-4'>
               💼Work
               </h3>
               <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li> 
                  <strong>Freelance Full Stack Developer Self-employed | Remote Jan 2024 – Present </strong><br /><p>Projects completed for clients in e-commerce, portfolio, and blog domains.</p>
                </li>
               </ul>

            </div>

          </div>

        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
