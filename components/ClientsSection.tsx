
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter: React.FC<{ value: number, suffix?: string }> = ({ value, suffix }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 4000, bounce: 0.2 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.round(latest).toLocaleString() + (suffix || '');
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

const clients = [
  "Twice Happy Resorts", "Sourapradhaniguda Stone Quarry", "Gayatri Poultries Pvt. Ltd.", 
  "SKGG Hotel, Bhawanipatna", "M/s Motwani Builders", "M/s LA Developers", "Paltronics", 
  "M/s Astroz Creators Pvt. Ltd.", "M/s Evos Buildcon (Sipasarubali)", "M/s Evos Buildcon (Jagasara)",
  "M/s Sahej Towers Pvt Ltd.", "M/s Tesko Hotel & Malls", "Seetal", "Sri Hari Hospital", 
  "Subarnabhoomi Hotels Pvt. Ltd.", "Basulei Sand Quarry", "Guitana Nagrigudari Kainjhara", 
  "Kulei Sand Quarry", "Calderys India Refractories Limited", "Sibani Womens Self Help Group", 
  "M/s Maikal Breweries Pvt. Ltd.", "Haladi-2", "GD Construction", "Perfectus Technology", 
  "Oil Refinery", "Lalchand Resorts", "AMJ Global", "Shree Jagannath Puri Parikrama Prakalpa", 
  "Idudi-I Sand Bed", "M/s Rudra Metaliks", "Kantio-Putasahi Sand Quarry", "Hindustan Aqua Pvt. Ltd.", 
  "Siba Monolithics", "M/s BERHAMPUR CARDIAC CENTRE", "M/s Ganapati Foods", 
  "Bikash Diagnostic Centre & Hospital, Koraput", "M/s Laxmi Rice Mill, Dengadi", 
  "M/s Hotel Raj Inn, Koraput", "M/s Adinarayan Rice Mill", "M/s Maruti Poultries", 
  "M/s Darlipali Thermal Power Project", "Sunny Metropolis", "M/s Hi-Tech Medical College & Hospital (BMW)", 
  "NTPC, Darlipalli", "M/s Mahalaxmi Stone Crusher", "Maa Bhawani Rice Mill", 
  "M/s Bipulingi Stone Quarry", "M/s Institute of Gastro and Kidney Care", "M/s Gunupur Sand Bed-II",
];

const duplicatedClients = [...clients, ...clients];

const ClientPlaceholder: React.FC<{ name: string }> = ({ name }) => (
    <div className="h-24 w-60 flex items-center justify-center bg-gray-800/50 rounded-lg border border-gray-700 p-4">
        <span className="text-white font-medium text-center text-sm">{name}</span>
    </div>
);

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-24 bg-[#0a2c33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
            >
                Our <span className="gradient-text">Esteemed Clients</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-gray-400 mb-12"
            >
                Trusted by leading industries, institutions, and organizations across Odisha.
            </motion.p>
            <div className="text-center mb-12">
                <span className="inline-block text-3xl font-bold text-white border-2 border-[#1da757] rounded-full px-8 py-4 shadow-[0_0_20px_rgba(29,167,87,0.4)]">
                    Trusted by <AnimatedCounter value={100} suffix="+" /> Clients
                </span>
            </div>
        </div>
        <div className="w-full overflow-hidden mt-12">
            <div className="w-full inline-flex flex-nowrap">
                <div className="scrolling-logos">
                    {duplicatedClients.map((client, index) => (
                        <div key={index} className="mx-4 flex-shrink-0 flex items-center">
                            <ClientPlaceholder name={client} />
                        </div>
                    ))}
                </div>
                <div className="scrolling-logos" aria-hidden="true">
                    {duplicatedClients.map((client, index) => (
                        <div key={index} className="mx-4 flex-shrink-0 flex items-center">
                            <ClientPlaceholder name={client} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ClientsSection;