
import React from 'react';
// FIX: Import Variants type from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { FiAward, FiCheckCircle, FiClock, FiHeart } from 'react-icons/fi';

const reasons = [
    { icon: <FiAward />, title: "Certified Professionals", description: "Our team consists of highly qualified and experienced environmental experts." },
    { icon: <FiCheckCircle />, title: "NABL Accreditation", description: "Ensuring the highest standards of quality and accuracy in all our tests." },
    { icon: <FiClock />, title: "Fast Turnaround", description: "Efficient processes to deliver timely reports and solutions without compromising quality." },
    { icon: <FiHeart />, title: "Sustainable Approach", description: "We are committed to practices that promote environmental health and sustainability." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

// FIX: Explicitly type itemVariants with Variants to resolve type incompatibility with framer-motion's expected types for 'ease'.
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#05141b] relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
                {/* Glowing line connector background would be complex; using a pattern instead */}
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="b" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(2) rotate(0)"><rect x="0" y="0" width="100%" height="100%" fill="none"/><path d="M0 30h60M30 0v60" stroke-width="1" stroke="rgba(29, 167, 87, 0.5)" fill="none"/></pattern></defs><rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)"/></svg>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Why Choose <span className="gradient-text">Us?</span>
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {reasons.map((reason, index) => (
                        <motion.div key={index} variants={itemVariants} className="section-bg p-8 rounded-xl text-center">
                            <div className="text-5xl text-[#1da757] mb-6 inline-block">{reason.icon}</div>
                            <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                            <p className="text-gray-400">{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
