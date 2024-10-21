import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section ref={heroRef} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">John Doe</h1>
        <h2 className="text-3xl md:text-4xl font-light mb-8">Frontend Developer</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">Crafting beautiful and performant web experiences with a passion for clean code and user-centric design.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:john@example.com" className="text-white hover:text-gray-200 transition duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;