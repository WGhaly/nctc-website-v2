'use client';

import { motion } from 'framer-motion';
import { Database, Shield, Search, BarChart, Users, FileCheck } from 'lucide-react';
import ColorChangeCard from '@/components/ui/color-change-card';

const DigitalPlatformSection = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Centralized Registry',
      description: 'Comprehensive database of Egyptian research and innovations.',
      imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Smart Search & Discovery',
      description: 'AI-powered matching between technologies and industry needs.',
      imgSrc: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'IP Management Tools',
      description: 'Secure documentation and tracking of intellectual property.',
      imgSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into innovation pipeline and trends.',
      imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration Hub',
      description: 'Connect researchers, industry partners, and investors.',
      imgSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Licensing Management',
      description: 'Streamlined processes for technology transfer agreements.',
      imgSrc: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    }
  ];

  const audiences = [
    {
      title: 'For Researchers',
      description: 'Showcase your work, connect with industry, and access commercialization support.',
      gradient: 'linear-gradient(135deg, #01093d 0%, #243996 100%)',
    },
    {
      title: 'For Industry',
      description: 'Discover cutting-edge technologies and connect with Egypt\'s research ecosystem.',
      gradient: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
    },
    {
      title: 'For Investors',
      description: 'Find high-potential innovations ready for market deployment and scaling.',
      gradient: 'linear-gradient(135deg, #4a81f6 0%, #243996 100%)',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="platform" className="w-full py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#01093d' }}>
              The National Digital Platform
            </h2>
            <div 
              className="w-20 h-1.5 rounded-full mx-auto mb-8" 
              style={{ background: 'linear-gradient(90deg, #4a81f6, #243996)' }} 
            />
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
              A unified digital ecosystem connecting Egypt's innovation landscape — 
              from research labs to market deployment.
            </p>
          </motion.div>

          {/* Features - Color Change Cards */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <ColorChangeCard
                  heading={feature.title}
                  description={feature.description}
                  imgSrc={feature.imgSrc}
                  icon={feature.icon}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Audiences Section */}
          <motion.div variants={itemVariants} className="mt-24">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#01093d' }}>
              Built for Every Stakeholder
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {audiences.map((audience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
                >
                  {/* Gradient Background */}
                  <div 
                    className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: audience.gradient }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-10 text-white">
                    <h4 className="text-2xl font-bold mb-4">
                      {audience.title}
                    </h4>
                    <p className="text-white/90 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-20"
            variants={itemVariants}
          >
            <motion.a
              href="#get-involved"
              className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #4a81f6, #243996)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore the Platform
              <span className="text-2xl">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalPlatformSection;
