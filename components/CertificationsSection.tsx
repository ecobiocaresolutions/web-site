
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckSquare, FiShield, FiDownload } from 'react-icons/fi';

const certifications = [
  {
    icon: <FiCheckSquare />,
    title: "ISO 9001:2015 Certified",
    description: "Quality Management System",
    certId: "",
    link: "/ISO 90012015 Certified.pdf"
  },
  {
    icon: <FiAward />,
    title: "NABL (ISO/IEC 17025:2017)",
    description: "Accredited for technical competence in testing.",
    certId: "Certificate No. TC-16883",
    link: "/Certificate No. TC-16883.pdf"
  },
  {
    icon: <FiShield />,
    title: "CPCB Approved",
    description: "Recognized by the Central Pollution Control Board.",
    certId: "",
    link: "/CPCB Approved.pdf"
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05141b] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
            Our <span className="gradient-text">Certifications & Accreditations</span>
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-400 mb-16"
        >
            We take pride in maintaining the highest industry standards.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, boxShadow: '0 0 35px rgba(29, 167, 87, 0.3)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="section-bg rounded-xl p-8 flex flex-col group border-2 border-transparent hover:border-[#1da757]/50 transition-all duration-300"
            >
              <div className="flex-grow">
                <div className="text-5xl text-[#1da757] mb-5">{cert.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-1">{cert.description}</p>
                {cert.certId && <p className="text-sm text-green-400 font-mono">{cert.certId}</p>}
              </div>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center px-6 py-2 bg-gray-800/60 text-white font-semibold rounded-md border border-gray-700 hover:bg-[#1da757] hover:border-[#1da757] transition-all duration-300 flex items-center justify-center"
              >
                <FiDownload className="mr-2"/> View Certificate
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center text-center">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#1da757]/50 to-transparent"></div>
            <span className="gradient-text font-semibold text-lg tracking-wider mx-6">Trusted by Leading Brands</span>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent via-[#1da757]/50 to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;