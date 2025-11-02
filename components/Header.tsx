import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Sectors', id: 'sectors' },
  { name: 'Services', id: 'services' },
  { name: 'Lab', id: 'lab' },
  { name: 'Clients', id: 'clients'},
  { name: 'Team', id: 'team' },
  { name: 'Contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const Logo = () => {

    return (
      <div className="flex items-center gap-3 group">
        <motion.div 
          className="flex items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <img src="/logo.png" alt="ECOBIOCARE Logo" className="h-16 w-auto drop-shadow-lg" />
        </motion.div>
        <div className="flex flex-col text-left justify-center">
          <motion.h1 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white font-bold text-xl tracking-wide relative"
          >
            <span className="relative inline-block">
              ECOBIOCARE
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1da757] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>
          <motion.span 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#1da757] text-sm font-medium tracking-wider leading-tight group-hover:text-[#22c66d] transition-colors duration-300"
          >
            SOLUTIONS PVT LTD
          </motion.span>
        </div>
      </div>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0b3d3f]/80 backdrop-blur-lg border-b border-gray-700/50 shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="cursor-pointer">
              <Logo />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-[#1da757] transition-colors duration-300 font-medium tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#05141b] z-50 md:hidden"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)} className="text-white">
                <FiX size={28} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-2xl text-gray-300 hover:text-[#1da757] transition-colors duration-300 font-medium"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;