import React, { useState, useEffect, useMemo } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface TeamMember {
  name: string;
  title: string;
  tagline: string;
  imageUrl: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mrs. JYOTSNAMAYEE CHOUDHURY',
    title: 'Director',
    tagline: 'Leading with vision and environmental integrity.',
    imageUrl: '/team/Mrs.%20JYOTSNAMAYEE%20CHOUDHURY.jpg',
    bio:
      "As a founding Director, Mrs. Choudhury provides strategic leadership that aligns with the company's core mission of environmental stewardship. Her extensive experience in management and compliance ensures that ECOBIOCARE SOLUTIONS operates at the highest standards of quality and ethical practice, driving the company towards a sustainable and successful future.",
  },
  {
    name: 'Mr. Santosh Kumar Sahoo',
    title: 'Environmental Engineer',
    tagline: 'Designing sustainable solutions for a cleaner tomorrow.',
    imageUrl: '/team/Mr.%20Santosh%20Kumar%20Sahoo.jpg',
    bio:
      'Mr. Sahoo is a brilliant environmental engineer who specializes in waste management and pollution control systems. He is responsible for designing and implementing innovative solutions for clients, helping them minimize their environmental impact while maximizing operational efficiency. His technical expertise is crucial to our success.',
  },
  {
    name: 'Mr. Deba Prasad Choudhary',
    title: 'Managing Director',
    tagline: 'Driving excellence through innovation and precision.',
    imageUrl: '/team/Mr.%20Deba%20Prasad%20Choudhary.jpg',
    bio:
      'Mr. Choudhary oversees the daily operations and strategic growth of the company. With a keen eye for detail and a passion for innovation, he ensures that every project is executed with precision and that the company remains at the forefront of the environmental services industry. His leadership is key to our operational excellence.',
  },
  {
    name: 'Mr. Ashok Kumar Sahoo',
    title: 'Lab Head',
    tagline: 'Ensuring accuracy and compliance in every test.',
    imageUrl: '/team/Mr.%20Ashok%20Kumar%20Sahoo.jpg',
    bio:
      'As the head of our EBS-accredited laboratory, Mr. Sahoo is responsible for maintaining the integrity and accuracy of all testing procedures. He leads a team of skilled technicians and ensures that our lab adheres to the strictest national and international standards, providing clients with reliable and defensible data.',
  },
  {
    name: 'Mr. Ramakanta Nayak',
    title: 'Technical Advisor',
    tagline: 'Guiding technical direction with decades of experience.',
    imageUrl: '/team/Mr.%20Ramakanta%20Nayak.jpg',
    bio:
      'With decades of invaluable experience in the environmental sector, Mr. Nayak serves as our senior technical advisor. He provides expert guidance on complex projects, helps navigate regulatory challenges, and mentors our junior staff. His wisdom and foresight are an indispensable asset to our team and clients.',
  },
  {
    name: 'Dr. Ananya Sharma',
    title: 'Lead Scientist',
    tagline: 'Pioneering research for a sustainable future.',
    imageUrl: '/team/default-profile.jpg',
    bio:
      "Dr. Ananya Sharma is at the forefront of environmental research, specializing in bioremediation and sustainable material science. Her work has been published in numerous international journals, and she is dedicated to finding practical, science-backed solutions to today's most pressing ecological challenges.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.18, ease: 'easeIn' } },
};

const Particles: React.FC = () => {
  const particleCount = 60;
  const particles = useMemo(
    () =>
      Array.from({ length: particleCount }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const style: React.CSSProperties = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 30 + 18}s`,
          animationDelay: `${Math.random() * 20}s`,
        };
        return <div key={i} className="particle" style={style} />;
      }),
    []
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0" aria-hidden>
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
        .particle {
          position: absolute;
          bottom: -24px;
          border-radius: 50%;
          background: rgba(74, 226, 143, 0.12);
          animation: floatUp infinite linear;
        }
      `}</style>
      {particles}
    </div>
  );
};

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  return (
    <section id="team" className="py-24 bg-[#0a2c33] relative overflow-hidden">
      <Particles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
        >
          Our <span className="gradient-text">Team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="text-center text-gray-300 mb-16 text-lg"
        >
          Meet the minds driving our environmental excellence.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group h-full cursor-pointer"
              onClick={() => setSelectedMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedMember(member);
              }}
              aria-label={`Open profile for ${member.name}`}
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-br from-[#1da757] to-[#4ae28f] rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out"
                aria-hidden="true"
              />

              <div className="relative w-full h-full section-bg rounded-2xl p-6 text-center flex flex-col items-center z-10">
                <div className="relative mb-6">
                  <div className="p-1.5 rounded-full bg-gradient-to-br from-[#1da757] to-[#1b5e5b]">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-[#0a2c33]"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.onerror = null;
                        t.src = '/team/default-profile.jpg';
                      }}
                    />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p className="gradient-text font-semibold mb-3">{member.title}</p>
                <p className="flex-grow text-gray-300 text-sm leading-relaxed mb-4">
                  {member.tagline}
                </p>

                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-gradient-to-br from-[#1da757] to-[#1b5e5b] text-white rounded-lg hover:from-[#4ae28f] hover:to-[#1da757] transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(member);
                  }}
                  aria-label={`Learn more about ${member.name}`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
            aria-hidden={false}
            role="dialog"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-[#0a2c33] rounded-2xl p-6 max-w-2xl w-full mx-4 relative border border-[#1da757]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
                onClick={() => setSelectedMember(null)}
                aria-label="Close profile"
              >
                <FiX size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="p-1.5 rounded-full bg-gradient-to-br from-[#1da757] to-[#1b5e5b]">
                    <img
                      src={selectedMember.imageUrl}
                      alt={selectedMember.name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-[#0a2c33]"
                      onError={(e) => {
                        const t = e.currentTarget as HTMLImageElement;
                        t.onerror = null;
                        t.src = '/team/default-profile.jpg';
                      }}
                    />
                  </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {selectedMember.name}
                  </h3>
                  <p className="gradient-text font-semibold mb-4">{selectedMember.title}</p>
                  <p className="text-gray-300 leading-relaxed">{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
