
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter: React.FC<{ value: number, suffix?: string }> = ({ value, suffix }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000, bounce: 0 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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

const stats = [
    { value: 1000, suffix: "+", label: "Clients" },
    { value: 300, suffix: "+", label: "Professional Staff" },
    { value: 7, suffix: "+", label: "Years of Experience" },
    { value: 640, suffix: "+", label: "Lab Technicians" },
];

const StatsSection: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-[#0b3d3f] to-[#1b5e5b] relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <h3 className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-lg text-gray-300 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
