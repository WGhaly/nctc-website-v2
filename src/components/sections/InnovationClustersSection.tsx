'use client';

import { motion } from 'framer-motion';
import { Cog, Cpu, Activity, Atom, Heart, Leaf } from 'lucide-react';

const InnovationClustersSection = () => {
  const clusters = [
    {
      id: 1,
      icon: <Cog className="w-10 h-10" />,
      title: 'Engineering & Advanced Manufacturing',
      description: 'Mechanical, electrical, civil, and industrial engineering. Robotics, HVAC systems, power systems, construction materials, process optimization, and advanced materials including composites and metamaterials.',
      gradient: 'linear-gradient(135deg, #01093d 0%, #243996 100%)',
    },
    {
      id: 2,
      icon: <Cpu className="w-10 h-10" />,
      title: 'Information & Communication Technology (ICT)',
      description: 'Software development, AI and machine learning, cybersecurity, telecommunications (5G, IoT), and data science including big data analytics and cloud computing.',
      gradient: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
    },
    {
      id: 3,
      icon: <Activity className="w-10 h-10" />,
      title: 'Life Sciences & Biotechnology',
      description: 'Pharmaceuticals, medical devices, diagnostics, bioinformatics including genomic analysis, and agricultural biotech such as crop improvement and biopesticides.',
      gradient: 'linear-gradient(135deg, #4a81f6 0%, #243996 100%)',
    },
    {
      id: 4,
      icon: <Atom className="w-10 h-10" />,
      title: 'Physical Sciences & Chemistry',
      description: 'Nanotechnology, advanced materials (graphene, smart materials), chemical processes, energy storage (batteries, supercapacitors), photonics, and organic chemistry including polymers and novel molecules.',
      gradient: 'linear-gradient(135deg, #01093d 0%, #4a81f6 100%)',
    },
    {
      id: 5,
      icon: <Heart className="w-10 h-10" />,
      title: 'Health & Medical Sciences',
      description: 'Clinical innovations, digital health (telemedicine, health monitoring), medical imaging, therapeutics (gene therapy, immunotherapy), and public health technologies including vaccine delivery systems.',
      gradient: 'linear-gradient(135deg, #243996 0%, #01093d 100%)',
    },
    {
      id: 6,
      icon: <Leaf className="w-10 h-10" />,
      title: 'Environmental & Energy Sciences',
      description: 'Renewable energy (solar, wind), clean tech (carbon capture, pollution control), water treatment, sustainability solutions (waste-to-energy, circular economy), and climate tech.',
      gradient: 'linear-gradient(135deg, #4a81f6 0%, #01093d 100%)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
      } 
    },
  };

  return (
    <section id="clusters" className="w-full py-24 relative overflow-hidden" style={{ background: '#01093d' }}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" 
          style={{ background: '#4a81f6' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" 
          style={{ background: '#243996' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Innovation Clusters
            </h2>
            <div 
              className="w-20 h-1.5 rounded-full mx-auto mb-8" 
              style={{ background: 'linear-gradient(90deg, #4a81f6, #243996)' }} 
            />
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              NCTC organizes technologies across six strategic innovation clusters, 
              each aligned with Egypt's national priorities.
            </p>
          </motion.div>

          {/* Clusters Grid - Masonry Style */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
            variants={containerVariants}
          >
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
                style={{ gridRow: index % 3 === 1 ? 'span 1' : 'auto' }}
              >
                {/* Card with Variable Height */}
                <div 
                  className={`relative p-8 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
                    index % 3 === 0 ? 'pt-12' : index % 3 === 1 ? 'pt-8' : 'pt-10'
                  }`}
                  style={{ background: '#161616', minHeight: index % 3 === 1 ? '280px' : '320px' }}
                >
                  {/* Corner Accent */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 opacity-20 blur-2xl"
                    style={{ background: cluster.gradient }}
                  />

                  {/* Icon Container - Smaller */}
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-5 text-white shadow-lg relative z-10"
                    style={{ background: cluster.gradient }}
                  >
                    {cluster.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white relative z-10">
                    {cluster.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-grow relative z-10">
                    {cluster.description}
                  </p>

                  {/* Decorative Corner */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5"
                    style={{ background: cluster.gradient }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-20"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-lg mb-6">
              Each cluster has dedicated resources, experts, and industry partners
            </p>
            <motion.a
              href="#platform"
              className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #4a81f6, #243996)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Technologies by Cluster
              <span className="text-2xl">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationClustersSection;
