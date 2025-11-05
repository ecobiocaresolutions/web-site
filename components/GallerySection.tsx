import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Gallery image configuration with WebP format and metadata
const images = [
  {
    src: '/field-work-1.webp',
    alt: 'Field research team conducting soil analysis',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-2.webp',
    alt: 'Environmental monitoring equipment setup',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-3.webp',
    alt: 'Biodiversity assessment in natural habitat',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-4.webp',
    alt: 'Water quality testing in field conditions',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-5.webp',
    alt: 'Ecological survey and data collection',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-6.webp',
    alt: 'Wildlife observation and documentation',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-7.webp',
    alt: 'Plant species identification and cataloging',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-8.webp',
    alt: 'Remote sensing and geospatial mapping',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-9.webp',
    alt: 'Community engagement in conservation efforts',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-10.webp',
    alt: 'Climate data recording in field station',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-11.webp',
    alt: 'Forest ecosystem health assessment',
    width: 800,
    height: 600,
  },
  {
    src: '/field-work-12.webp',
    alt: 'Sustainable land management demonstration',
    width: 800,
    height: 600,
  },
];

/**
 * GallerySection Component
 * 
 * Displays a responsive grid gallery of field work images with optimized performance:
 * - Uses Next.js Image component for automatic optimization
 * - WebP format for better compression
 * - Lazy loading with priority loading for above-fold images
 * - Responsive sizing with srcset generation
 * - Proper accessibility with descriptive alt text
 * - Minimal animations using CSS transitions instead of heavy JS animations
 * - Virtualization-ready structure (can integrate react-window for large lists)
 */
const GallerySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#05141b]" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified heading with fade-in on scroll */}
        <motion.h2
          id="gallery-heading"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Our <span className="gradient-text">Field Work</span>
        </motion.h2>

        {/* Gallery grid - virtualization ready structure */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Field work gallery"
        >
          {images.map((image, index) => (
            <div
              key={`field-work-${index}`}
              className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              role="listitem"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover"
                loading={index < 3 ? 'eager' : 'lazy'}
                priority={index < 3}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
