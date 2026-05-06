'use client';

import { motion } from 'framer-motion';

const StakeholdersSection = () => {
  const stakeholders = [
    {
      title: 'Universities & Research Institutions',
      description: 'Generate cutting-edge research and technologies ready for commercialization.',
      statNumber: '35+',
      statLabel: 'Institutions',
    },
    {
      title: 'Industry Partners',
      description: 'Provide real-world validation, manufacturing expertise, and market access.',
      statNumber: '6',
      statLabel: 'Innovation Clusters',
    },
    {
      title: 'Investors & Funds',
      description: 'Support scaling through venture capital, grants, and strategic funding.',
      statNumber: '1',
      statLabel: 'National Platform',
    }
  ];

  return (
    <section id="stakeholders" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4a81f6' }}>
            The Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#01093d' }}>
            Collaborative Ecosystem
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            NCTC brings together Egypt&apos;s innovation stakeholders to accelerate technology commercialization and economic impact.
          </p>
        </motion.div>

        {/* Horizontal Stat Cards */}
        <div className="space-y-4">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="flex flex-col md:flex-row">
                {/* Stats Side */}
                <div 
                  className="md:w-1/4 p-8 flex flex-col items-center justify-center text-white"
                  style={{ background: '#01093d' }}
                >
                  <div className="text-4xl font-bold mb-1">
                    {stakeholder.statNumber}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wide text-center">
                    {stakeholder.statLabel}
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#01093d' }}>
                    {stakeholder.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {stakeholder.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;

