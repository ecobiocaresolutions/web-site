
import React from 'react';
import { FiGlobe } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#05141b] border-t border-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <FiGlobe className="w-6 h-6 text-[#1da757]" />
                        <span className="text-lg font-bold text-white">ECOBIOCARE SOLUTIONS PVT LTD</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} ECOBIOCARE SOLUTIONS. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
