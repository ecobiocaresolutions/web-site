
import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FiFileText, FiAnchor, FiWind, FiDroplet, FiTrash2, FiTool, FiMic } from 'react-icons/fi';

const sectors = [
  { icon: <FiFileText />, name: "Environmental Clearance" },
  { icon: <FiAnchor />, name: "CRZ Clearance" },
  { icon: <FiWind />, name: "Pollution Clearance (SPCB Odisha)" },
  { icon: <FiDroplet />, name: "Ground Water Clearance" },
  { icon: <FiTrash2 />, name: "Waste Water Treatment (ETP/STP)" },
  { icon: <FiTool />, name: "ETP/STP Installation" },
  { icon: <FiMic />, name: "NABL-Accredited Laboratory Facilities" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

// FIX: Explicitly type cardVariants with Variants to resolve type incompatibility with framer-motion's expected types for 'ease'.
const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const SectorsSection: React.FC = () => {
  return (
    <section id="sectors" className="py-24 bg-[#0a2c33]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
            Our <span className="gradient-text">Sectors</span>
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05, boxShadow: "0 10px 15px -3px rgba(29, 167, 87, 0.2), 0 4px 6px -2px rgba(29, 167, 87, 0.1)" }}
              className="section-bg rounded-lg p-6 flex flex-col items-center text-center cursor-default h-full"
            >
              <div className="text-5xl text-[#1da757] mb-5">{sector.icon}</div>
              <h3 className="text-xl font-semibold text-white">{sector.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsSection;
