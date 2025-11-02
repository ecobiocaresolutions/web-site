
import React from 'react';
import { motion } from 'framer-motion';

const images = [
    '/field-work-1.jpg',
    '/field-work-2.jpg',
    '/field-work-3.jpg',
    '/field-work-4.jpg',
    '/field-work-5.jpg',
    '/field-work-6.jpg',
    '/field-work-7.jpg',
    '/field-work-8.jpg',
    '/field-work-9.jpg',
    '/field-work-10.jpg',
    '/field-work-11.jpg',
    '/field-work-12.jpg',
];

const GallerySection: React.FC = () => {
    return (
        <section className="py-24 bg-[#05141b]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Our <span className="gradient-text">Field Work</span>
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                            className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden group shadow-lg"
                        >
                            <img
                                src={img}
                                alt={`Field work gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;