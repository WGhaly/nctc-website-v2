'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Briefcase, Wallet, Users } from 'lucide-react';
import { useState } from 'react';

const GetInvolvedSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const actions = [
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: 'For Researchers & Inventors',
      description: 'Submit your technology, access IP support, and connect with industry partners.',
      cta: 'Commercialize Technology',
      gradient: 'linear-gradient(135deg, #01093d 0%, #243996 100%)',
      benefits: [
        'TRL/MRL assessment support',
        'IP protection and patenting',
        'Prior art search and analysis',
        'Commercialization pathway support'
      ]
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: 'For Industry & Corporates',
      description: 'Discover Egyptian innovations, license technologies, and collaborate with researchers.',
      cta: 'Access Technologies',
      gradient: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
      benefits: [
        'Technology scouting and discovery',
        'Licensing opportunities',
        'Feasibility study support',
        'R&D collaboration partnerships'
      ]
    },
    {
      icon: <Wallet className="w-10 h-10" />,
      title: 'For Investors & VCs',
      description: 'Find high-potential startups, access deal flow, and support Egyptian innovation.',
      cta: 'Explore Opportunities',
      gradient: 'linear-gradient(135deg, #4a81f6 0%, #243996 100%)',
      benefits: [
        'TRL/MRL verified startups',
        'IP-protected technologies',
        'Market assessment insights',
        'Co-investment opportunities'
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'For Universities & TTOs',
      description: 'Join the Innovation Ecosystem, access resources, and enhance your commercialization capacity.',
      cta: 'Join Network',
      gradient: 'linear-gradient(135deg, #01093d 0%, #4a81f6 100%)',
      benefits: [
        'IP protection services',
        'TRL/MRL assessment tools',
        'Commercialization platform access',
        'Prior art search support'
      ]
    }
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
    <section id="get-involved" className="w-full py-24 relative overflow-hidden" style={{ background: '#01093d' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
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
              Get Involved
            </h2>
            <div 
              className="w-20 h-1.5 rounded-full mx-auto mb-8" 
              style={{ background: 'linear-gradient(90deg, #4a81f6, #243996)' }} 
            />
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
              Whether you're a researcher, company, investor, or institution — 
              there's a place for you in Egypt's innovation ecosystem.
            </p>
          </motion.div>

          {/* Tabbed Interface */}
          <motion.div 
            className="mb-16"
            variants={containerVariants}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {actions.map((action, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                    activeTab === index
                      ? 'text-white shadow-xl'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                  style={activeTab === index ? { background: action.gradient } : {}}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={activeTab === index ? 'text-white' : 'text-gray-400'}>
                    {action.icon}
                  </div>
                  <span className="hidden sm:inline">{action.title.replace('For ', '')}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Gradient Top Bar */}
                <div 
                  className="h-2"
                  style={{ background: actions[activeTab].gradient }}
                />

                <div className="p-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Icon and Title */}
                    <div>
                      <div 
                        className="w-24 h-24 rounded-2xl flex items-center justify-center mb-6 text-white shadow-2xl"
                        style={{ background: actions[activeTab].gradient }}
                      >
                        {actions[activeTab].icon}
                      </div>
                      <h3 className="text-4xl font-bold mb-4 text-white">
                        {actions[activeTab].title}
                      </h3>
                      <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        {actions[activeTab].description}
                      </p>
                      
                      <motion.a
                        href={`/contact?subject=${encodeURIComponent(actions[activeTab].cta)}`}
                        className="inline-block px-8 py-4 rounded-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                        style={{ background: actions[activeTab].gradient }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {actions[activeTab].cta} →
                      </motion.a>
                    </div>

                    {/* Right: Benefits Cards */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-6">What You Get:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {actions[activeTab].benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div 
                                className="mt-0.5 w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white font-bold text-sm shadow-lg"
                                style={{ background: actions[activeTab].gradient }}
                              >
                                ✓
                              </div>
                              <span className="text-base text-gray-100 leading-relaxed">{benefit}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Contact Info Box */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 p-12 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, #4a81f6 0%, #243996 100%)' }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Egyptian Innovation?
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Contact NCTC to learn more about how you can contribute to 
              Egypt's technology commercialization ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact?subject=General%20Inquiry"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>✉</span>
                Contact NCTC
              </motion.a>
            </div>
          </motion.div>

          {/* Bottom Tagline */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-lg italic">
              "Building bridges between research excellence and market success"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
