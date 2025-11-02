// src/pages/ServiceDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { findServiceById } from "../data/servicesData";
import { motion } from "framer-motion";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = id ? findServiceById(id) : undefined;

  if (!service) {
    return (
      <div className="py-24 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Service not found</h2>
          <Link to="/" className="text-[#1da757] font-semibold">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36 }}
      className="py-24 bg-[#07161a] text-white min-h-[70vh]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-4xl text-[#1da757]">{service.icon}</div>
            <h1 className="text-3xl font-bold">{service.title}</h1>
          </div>

          <div className="text-gray-200 leading-relaxed space-y-4">
            <p>{service.description}</p>

            {/* optional expanded sections */}
            {service.id === "water-testing" && (
              <>
                <h3 className="text-xl font-semibold mt-4">What we test</h3>
                <ul className="list-disc pl-6 text-gray-200">
                  <li>pH, Turbidity, Hardness</li>
                  <li>Dissolved Oxygen, TDS/Conductivity</li>
                  <li>Microbiological tests (Coliforms, E. coli)</li>
                  <li>Heavy metals & trace elements (on request)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4">Why choose us</h3>
                <p>
                  NABL-accredited lab, certified reports, fast turnaround and compliance-ready documentation for regulators and auditors.
                </p>
              </>
            )}
          </div>

          <div className="mt-6">
            <Link to="/#services" className="inline-block px-4 py-2 bg-[#1da757] text-black rounded-lg font-semibold">
              ← Back to Services
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceDetail;
