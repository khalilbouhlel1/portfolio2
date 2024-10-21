import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div ref={ref} className={`max-w-3xl mx-auto text-lg leading-relaxed ${inView ? 'animate-fadeIn' : 'opacity-0'}`}>
          <p className="mb-6">
            Hello! I'm John Doe, a passionate frontend developer with 5 years of experience in creating responsive and intuitive web applications. My journey in web development started with a curiosity for design and a love for problem-solving, which naturally led me to frontend development.
          </p>
          <p className="mb-6">
            I specialize in React, TypeScript, and modern CSS techniques, always striving to write clean, efficient, and maintainable code. My approach to development is user-centric, focusing on creating seamless experiences that delight users while meeting business objectives.
          </p>
          <p>
            When I'm not coding, you can find me exploring new web technologies, contributing to open-source projects, or sharing my knowledge through blog posts and local meetups. I'm always excited to take on new challenges and collaborate with like-minded professionals to build the next generation of web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;