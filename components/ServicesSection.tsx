// src/components/ServicesSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#05141b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Our <span className="gradient-text">Services</span>
        </motion.h2>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
          {servicesData.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="text-center group"
            >
              <Link to={`/services/${s.id}`} className="block">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#1b5e5b]/30 flex items-center justify-center text-5xl text-[#1da757] border-2 border-[#1da757]/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1da757]/30 group-hover:shadow-[0_0_20px_#1da757]">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-white">{s.title}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
