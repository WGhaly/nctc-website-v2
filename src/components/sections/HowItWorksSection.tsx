'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  FolderOpen,
  Building2,
  Factory,
} from 'lucide-react';
import { WorkflowBuilderCard } from '@/components/ui/workflow-builder-card';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Researcher / Inventor',
      description: 'Creating inventions and innovations that solve critical issues for the industry, developing cutting-edge technologies and solutions.',
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'OTC (Office of Technology Commercialization)',
      description: 'Intakes research from inventors and builds a comprehensive portfolio, working with entities and industry to enable commercialization opportunities.',
      icon: <FolderOpen className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'NCTC (National Center of Technology Commercialization)',
      description: 'Builds the infrastructure, frameworks, and governance. Intakes work from OTCs and provides standardized processes and platforms to enable efficient commercialization.',
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Industry',
      description: 'Enterprises willing to license inventions and engage in commercialization activities with NCTC, OTCs, and researchers to access advanced technologies.',
      icon: <Factory className="w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="how-it-works" className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#01093d' }}>
              The Commercialization Journey
            </h2>
            <div 
              className="w-20 h-1.5 rounded-full mx-auto mb-8" 
              style={{ background: 'linear-gradient(90deg, #4a81f6, #243996)' }} 
            />
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
              A collaborative ecosystem connecting researchers, technology offices, NCTC, 
              and industry to transform innovations into market-ready solutions.
            </p>
          </motion.div>

          {/* Timeline Layout */}
          <motion.div 
            className="relative max-w-4xl mx-auto mb-8"
            variants={containerVariants}
          >
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #4a81f6, #243996, #01093d)' }} />
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className={`relative flex items-center mb-6 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl"
                    style={{ background: 'linear-gradient(135deg, #4a81f6, #243996)' }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-28 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                  >
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white"
                      style={{ background: 'linear-gradient(135deg, #4a81f6, #243996)' }}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#01093d' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="#platform"
              className="inline-flex items-center gap-3 px-10 py-4 text-white font-bold rounded-lg text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #4a81f6, #243996)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover How the Platform Works
              <span className="text-2xl">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
