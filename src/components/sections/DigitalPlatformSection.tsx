'use client';

import { motion } from 'framer-motion';
import { Database, Shield, Search, BarChart, Users, FileCheck } from 'lucide-react';
import ColorChangeCard from '@/components/ui/color-change-card';

const DigitalPlatformSection = () => {
  const features = [
    {
      title: 'Centralized Registry',
      description: 'Comprehensive database of Egyptian research and innovations.',
      imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      title: 'Smart Search & Discovery',
      description: 'AI-powered matching between technologies and industry needs.',
      imgSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80'
    },
    {
      title: 'IP Management Tools',
      description: 'Secure documentation and tracking of intellectual property.',
      imgSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time insights into innovation pipeline and trends.',
      imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      title: 'Collaboration Hub',
      description: 'Connect researchers, industry partners, and investors.',
      imgSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    {
      title: 'Licensing Management',
      description: 'Streamlined processes for technology transfer agreements.',
      imgSrc: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    }
  ];

  return (
    <section id="platform" className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4a81f6' }}>
              Digital Infrastructure
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#01093d' }}>
              The National Digital Platform
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              A unified digital ecosystem connecting Egypt&apos;s innovation landscape — 
              from research labs to market deployment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <ColorChangeCard
                  heading={feature.title}
                  description={feature.description}
                  imgSrc={feature.imgSrc}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold text-sm transition-colors duration-200"
              style={{ background: '#01093d' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#243996';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#01093d';
              }}
            >
              Get Early Access
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalPlatformSection;

