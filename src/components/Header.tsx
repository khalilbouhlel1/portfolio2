import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <header ref={headerRef} className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-600">JD</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition duration-300">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</a>
        </nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4">
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">About</a>
          <a href="#skills" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">Skills</a>
          <a href="#projects" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">Projects</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;