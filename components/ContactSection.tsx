
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const socialLinks = [
    { icon: <FiFacebook />, href: "#" },
    { icon: <FiLinkedin />, href: "#" },
    { icon: <FiInstagram />, href: "#" },
    { icon: <FiYoutube />, href: "#" },
];

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-[#0a2c33]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
                >
                    Get in <span className="gradient-text">Touch</span>
                </motion.h2>
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">Contact Us</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1da757] text-white" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1da757] text-white" />
                            <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1da757] text-white" />
                            <textarea placeholder="Your Message" rows={5} className="w-full p-3 bg-gray-800/50 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1da757] text-white"></textarea>
                            <button type="submit" className="w-full px-8 py-3 bg-[#1da757] text-white font-semibold rounded-md shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Locations</h3>
                            <div className="space-y-4">
                                <div className="flex">
                                    <FiMapPin className="w-6 h-6 text-[#1da757] mr-3 mt-1 flex-shrink-0" />
                                    <p><strong className="text-white">Registered Office:</strong> PLOT NO.783/13425, RAMA KRUSHNA NAGAR, 2ND LANE, Lochapada, Berhampur, Ganjam, Odisha – 761001</p>
                                </div>
                                <div className="flex">
                                    <FiMapPin className="w-6 h-6 text-[#1da757] mr-3 mt-1 flex-shrink-0" />
                                    <p><strong className="text-white">Laboratory:</strong> PLOT NO.4496, PANDARA, Rasulgarh, Bhubaneswar, Khordha, Odisha – 751010</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
                            <div className="space-y-3">
                                <a href="mailto:info@ecobiocaresolutions.com" className="flex items-center hover:text-[#1da757] transition-colors">
                                    <FiMail className="w-5 h-5 mr-3" />
                                    info@ecobiocaresolutions.com
                                </a>
                                <a href="tel:+917008539089" className="flex items-center hover:text-[#1da757] transition-colors">
                                    <FiPhone className="w-5 h-5 mr-3" />
                                    +91 7008539089 / 8658128435
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-2xl p-2 bg-gray-800/50 rounded-full hover:bg-[#1da757] hover:text-white transition-all duration-300 transform hover:scale-110">
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
