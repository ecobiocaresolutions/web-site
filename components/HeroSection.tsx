
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b3d3f] to-[#1b5e5b] z-0">
         <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
                duration: 20,
                ease: 'linear',
                repeat: Infinity,
            }}
            style={{
                backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)',
                backgroundSize: 'auto',
            }}
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tighter"
        >
          Empowering <span className="gradient-text">Environmental Excellence</span> with Scientific Precision.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8"
        >
          Leading NABL-Accredited Environmental Testing & Consultancy in Odisha.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => scrollToSection('services')} className="px-8 py-3 bg-[#1da757] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Explore Services
          </button>
          <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-transparent border-2 border-[#1da757] text-white font-semibold rounded-full hover:bg-[#1da757] transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start p-1"
        >
            <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
