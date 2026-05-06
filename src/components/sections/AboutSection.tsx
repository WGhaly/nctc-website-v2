'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="w-full overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4a81f6' }}>
            Who We Are
          </p>
          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-5 max-w-3xl"
            style={{ color: '#01093d', letterSpacing: '-0.02em' }}
          >
            Egypt's Bridge Between Research and{' '}
            <span style={{ color: '#4a81f6' }}>Market</span>
          </h2>
          <p
            className="text-lg text-gray-500 max-w-2xl leading-relaxed"
          >
            NCTC connects researchers, universities, and industry partners through structured 
            commercialization pathways — turning Egyptian innovation into economic impact.
          </p>
        </motion.div>

        {/* Mission + Vision side by side */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-8 lg:p-10"
            style={{ background: '#01093d' }}
          >
            <div
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: 'rgba(74,129,246,0.8)' }}
            >
              Mission
            </div>
            <h3 className="text-2xl font-black text-white mb-4">
              Enabling Research Commercialization
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.75' }}>
              We provide structured pathways, digital tools, and national partnerships 
              that connect knowledge creators with industry and investment — transforming 
              academic discoveries into market-ready solutions that drive economic growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="relative overflow-hidden rounded-2xl p-8 lg:p-10"
            style={{ background: '#f7f8fc', border: '1.5px solid #dde8ff' }}
          >
            <div
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#4a81f6' }}
            >
              Vision
            </div>
            <h3 className="text-2xl font-black mb-4" style={{ color: '#01093d' }}>
              Regional Leadership in Innovation
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.75' }}>
              To position Egypt as a regional leader in technology commercialization, 
              where research-driven innovation fuels sustainable economic growth, industrial 
              advancement, and societal impact — competing globally and creating lasting value.
            </p>
          </motion.div>
        </div>

        {/* Why NCTC — full width highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8"
          style={{
            background: '#f7f8fc',
            border: '1px solid #e2e8f0',
          }}
        >
          <div className="flex-1">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: '#4a81f6' }}
            >
              Why NCTC
            </div>
            <h3 className="text-xl font-black mb-2" style={{ color: '#01093d' }}>
              Unlocking Egypt's Research Potential
            </h3>
            <p style={{ color: '#4a5568', lineHeight: '1.7' }}>
              Egypt holds a vast reserve of untapped research, patents, and technical expertise across its universities 
              and research centers. NCTC ensures that Egyptian innovation does not remain confined to labs — 
              but reaches industries, markets, and communities where it creates measurable value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

