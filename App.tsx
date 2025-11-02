// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CoreDomainsSection from "./components/CoreDomainsSection";
import AboutSection from "./components/AboutSection";
import CertificationsSection from "./components/CertificationsSection";
import SectorsSection from "./components/SectorsSection";
import ServicesSection from "./components/ServicesSection";
import LabFacilitySection from "./components/LabFacilitySection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ClientsSection from "./components/ClientsSection";

import ServiceDetail from "./pages/ServiceDetail";

const MainLayout: React.FC = () => {
  return (
    <div className="bg-[#05141b] text-gray-300 overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <CoreDomainsSection />
        <AboutSection />
        <CertificationsSection />
        <SectorsSection />
        <ServicesSection />
        <LabFacilitySection />
        <WhyChooseUsSection />
        <StatsSection />
        <ClientsSection />
        <GallerySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* root renders your full page (Home) */}
        <Route path="/" element={<MainLayout />} />

        {/* service detail route */}
        <Route path="/services/:id" element={<ServiceDetail />} />

        {/* optional fallback: redirect unknown routes to home */}
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
