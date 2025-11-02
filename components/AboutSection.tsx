
import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye } from 'react-icons/fi';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
    >
        {children}
    </motion.h2>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a2c33]">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(2) rotate(45)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M10-10l20 20zm0 40l20-20z" strokeWidth="1" stroke="#1da757" fill="none"/></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)"/></svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader>
          About <span className="gradient-text">ECOBIOCARE</span> SOLUTIONS
        </SectionHeader>

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center text-lg text-gray-300 mb-20"
        >
          ECOBIOCARE SOLUTIONS PVT LTD is a multidisciplinary consultancy delivering environmental, scientific, and technical solutions. We provide end-to-end services from clearance, analysis, and compliance to laboratory testing — ensuring sustainability with precision.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="section-bg p-8 rounded-xl"
            >
                <div className="flex items-center mb-4">
                    <FiTarget className="w-10 h-10 text-[#1da757] mr-4"/>
                    <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-400">
                    To provide innovative, reliable, and cost-effective environmental solutions that help our clients achieve their sustainability goals while ensuring regulatory compliance and protecting our planet for future generations.
                </p>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="section-bg p-8 rounded-xl"
            >
                <div className="flex items-center mb-4">
                    <FiEye className="w-10 h-10 text-[#1da757] mr-4"/>
                    <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-400">
                    To be the leading environmental consultancy and laboratory in India, recognized for our scientific integrity, technological advancement, and unwavering commitment to a greener, healthier world.
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
