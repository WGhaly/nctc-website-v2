'use client';

import { motion } from 'framer-motion';

const InnovationClustersSection = () => {
  const clusters = [
    {
      id: '01',
      title: 'Engineering & Advanced Manufacturing',
      description: 'Mechanical, electrical, civil, and industrial engineering. Robotics, HVAC systems, power systems, construction materials, process optimization, and advanced materials including composites and metamaterials.',
    },
    {
      id: '02',
      title: 'Information & Communication Technology (ICT)',
      description: 'Software development, AI and machine learning, cybersecurity, telecommunications (5G, IoT), and data science including big data analytics and cloud computing.',
    },
    {
      id: '03',
      title: 'Life Sciences & Biotechnology',
      description: 'Pharmaceuticals, medical devices, diagnostics, bioinformatics including genomic analysis, and agricultural biotech such as crop improvement and biopesticides.',
    },
    {
      id: '04',
      title: 'Physical Sciences & Chemistry',
      description: 'Nanotechnology, advanced materials (graphene, smart materials), chemical processes, energy storage (batteries, supercapacitors), photonics, and organic chemistry including polymers and novel molecules.',
    },
    {
      id: '05',
      title: 'Health & Medical Sciences',
      description: 'Clinical innovations, digital health (telemedicine, health monitoring), medical imaging, therapeutics (gene therapy, immunotherapy), and public health technologies including vaccine delivery systems.',
    },
    {
      id: '06',
      title: 'Environmental & Energy Sciences',
      description: 'Renewable energy (solar, wind), clean tech (carbon capture, pollution control), water treatment, sustainability solutions (waste-to-energy, circular economy), and climate tech.',
    },
  ];

  return (
    <section id="clusters" className="w-full py-24 relative overflow-hidden" style={{ background: '#01093d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4a81f6' }}>
              Research Domains
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Innovation Clusters
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              NCTC organizes technologies across six strategic clusters, 
              each aligned with Egypt&apos;s national development priorities.
            </p>
          </div>

          {/* Clusters Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            {clusters.map((cluster, index) => (
              <motion.div
                key={cluster.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-8 flex flex-col gap-4"
                style={{ background: '#01093d' }}
              >
                <span className="text-3xl font-bold" style={{ color: '#4a81f6', fontVariantNumeric: 'tabular-nums' }}>
                  {cluster.id}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {cluster.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {cluster.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold text-sm transition-all duration-200"
              style={{
                background: '#243996',
                border: '1px solid rgba(74,129,246,0.4)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#4a81f6';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#243996';
              }}
            >
              Browse Technologies by Cluster
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationClustersSection;
