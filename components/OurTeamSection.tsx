import React from 'react';
import { motion } from 'framer-motion';
import './team.css';

const members = [
  {
    id: 1,
    name: 'Mrs. JYOTSNAMAYEE CHOUDHURY',
    title: 'Director',
    tagline: 'Leading with vision and environmental integrity.',
    img: '/assets/team1.jpg'
  },
  {
    id: 2,
    name: 'Mr. Santosh Kumar Sahoo',
    title: 'Environmental Engineer',
    tagline: 'Designing sustainable solutions for a cleaner tomorrow.',
    img: '/assets/team2.jpg'
  },
  {
    id: 3,
    name: 'Mr. Deba Prasad Choudhary',
    title: 'Managing Director',
    tagline: 'Driving excellence through innovation and precision.',
    img: '/assets/team3.jpg'
  },
  {
    id: 4,
    name: 'Mr. Ashok Kumar Sahoo',
    title: 'Lab Head',
    tagline: 'Ensuring accuracy and compliance in every test.',
    img: '/assets/team4.jpg'
  },
  {
    id: 5,
    name: 'Mr. Ramakanta Nayak',
    title: 'Technical Advisor',
    tagline: 'Guiding technical direction with decades of experience.',
    img: '/assets/team5.jpg'
  },
  {
    id: 6,
    name: 'Vacant',
    title: 'Advisor',
    tagline: 'Placeholder profile',
    img: '/assets/team6.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const OurTeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-[#05141b] relative overflow-hidden">
      {/* soft particle bg - optional: add CSS to draw particles */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Team</h2>
          <p className="mt-3 text-lg text-[#1da757]">Meet the minds driving our environmental excellence.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {members.map((m, idx) => (
            <motion.div
              key={m.id}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative flex flex-col items-center text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm"
              whileHover={{ y: -6 }}
            >
              <div className="team-photo-wrapper mb-4">
                <img src={m.img} alt={m.name} className="team-photo" />
                <span className="glow-ring" />
              </div>
              <h3 className="text-white font-poppins text-lg font-semibold">{m.name}</h3>
              <p className="text-[#a7f3d0] mt-1 font-inter font-medium">{m.title}</p>
              <p className="text-gray-300 mt-3 text-sm">{m.tagline}</p>
              <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#1da757] to-[#1b5e5b] text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Profile</button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <hr className="border-t border-[#173636]/40" />
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
