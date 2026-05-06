'use client';

import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Researcher / Inventor',
      description: 'Creating inventions and innovations that solve critical issues for the industry, developing cutting-edge technologies and solutions.',
    },
    {
      id: 2,
      title: 'OTC (Office of Technology Commercialization)',
      description: 'Intakes research from inventors and builds a comprehensive portfolio, working with entities and industry to enable commercialization opportunities.',
    },
    {
      id: 3,
      title: 'NCTC (National Center of Technology Commercialization)',
      description: 'Builds the infrastructure, frameworks, and governance. Intakes work from OTCs and provides standardized processes and platforms to enable efficient commercialization.',
    },
    {
      id: 4,
      title: 'Industry',
      description: 'Enterprises willing to license inventions and engage in commercialization activities with NCTC, OTCs, and researchers to access advanced technologies.',
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-24 bg-gray-50">
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
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#01093d' }}>
              The Commercialization Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              A collaborative ecosystem connecting researchers, technology offices, NCTC, 
              and industry to transform innovations into market-ready solutions.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-300" />
            
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number Circle */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl"
                    style={{ background: '#01093d', border: '3px solid #4a81f6' }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-28 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <div className="bg-white p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#01093d' }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <a
              href="/contact?subject=Platform%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold text-sm transition-all duration-200"
              style={{ background: '#01093d' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#243996';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#01093d';
              }}
            >
              Discover How the Platform Works
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
