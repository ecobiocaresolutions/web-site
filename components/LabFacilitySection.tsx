
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FiBox, FiActivity, FiFileText, FiChevronRight } from 'react-icons/fi';

const LabFacilitySection: React.FC = () => {

    const workflowSteps = [
        { icon: <FiBox />, text: "Sample Collection" },
        { icon: <FiActivity />, text: "Testing & Analysis" },
        { icon: <FiFileText />, text: "Reporting" },
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };
    
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
                scale: { duration: 0.8 }
            } 
        }
    };

    return (
        <section id="lab" className="py-32 bg-[#0a2c33] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/lab-pattern.png')] opacity-5"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold text-center mb-6 text-white leading-tight"
                    >
                        Our NABL-Accredited <span className="gradient-text">Lab Facility</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl text-center text-[#1da757] font-semibold mb-4"
                    >
                        Accurate. Reliable. Certified.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-8xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { id: 1, title: "Advanced Microscopy", subtitle: "High-Precision Analysis" },
                            { id: 2, title: "Digital Analysis Station", subtitle: "Real-time Data Processing" },
                            { id: 3, title: "Research & Development", subtitle: "Innovation Hub" },
                            { id: 4, title: "Quality Control", subtitle: "Rigorous Testing" },
                            { id: 5, title: "Specialized Testing", subtitle: "Advanced Equipment" },
                            { id: 6, title: "State-of-the-Art Facility", subtitle: "Modern Infrastructure" }
                        ].map(item => (
                            <motion.div 
                                key={item.id} 
                                variants={itemVariants} 
                                className="group"
                                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            >
                                <div className="overflow-hidden rounded-2xl shadow-xl bg-[#05141b] transform transition-transform duration-500 hover:shadow-2xl hover:shadow-[#1da757]/20">
                                    <div className="aspect-w-4 aspect-h-3 relative">
                                        <motion.img 
                                            src={`/lab-facility-${item.id}.jpg`} 
                                            alt={item.title} 
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100">
                                            <h4 className="text-white text-lg font-semibold text-center mb-1">{item.title}</h4>
                                            <p className="text-[#1da757] text-sm text-center">{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <div className="lg:pl-8">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl font-bold mb-12 text-white"
                        >
                            Our Streamlined Process
                        </motion.h3>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="space-y-8"
                        >
                            {workflowSteps.map((step, index) => (
                                <motion.div 
                                    key={index} 
                                    variants={itemVariants} 
                                    className="flex items-center"
                                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                >
                                    <div className="flex items-center bg-[#05141b] p-6 rounded-xl w-full hover:bg-[#0d1f24] transition-colors duration-300">
                                        <div className="text-4xl text-[#1da757] mr-6">{step.icon}</div>
                                        <span className="text-xl font-medium text-white">{step.text}</span>
                                    </div>
                                    {index < workflowSteps.length - 1 && (
                                        <motion.span 
                                            className="mx-4"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <FiChevronRight size={28} color="#1da757" />
                                        </motion.span>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LabFacilitySection;
