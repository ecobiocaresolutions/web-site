
import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FiShield, FiFilter, FiClipboard } from 'react-icons/fi';

const domains = [
  {
    icon: <FiShield className="w-12 h-12 text-[#1da757]" />,
    title: 'Environmental Clearance',
    description: 'Expert guidance and documentation for seamless regulatory approvals.',
  },
  {
    icon: <FiFilter className="w-12 h-12 text-[#1da757]" />,
    title: 'Pollution Testing',
    description: 'Accurate analysis of air, water, and soil to ensure compliance and safety.',
  },
  {
    icon: <FiClipboard className="w-12 h-12 text-[#1da757]" />,
    title: 'Lab Solutions',
    description: 'State-of-the-art NABL-accredited laboratory for precise scientific testing.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// FIX: Explicitly type cardVariants with Variants to resolve type incompatibility with framer-motion's expected types for 'ease'.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

const CoreDomainsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#05141b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(29, 167, 87, 0.25)' }}
              className="section-bg rounded-lg p-8 text-center cursor-pointer transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                {domain.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{domain.title}</h3>
              <p className="text-gray-400 leading-relaxed">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreDomainsSection;
