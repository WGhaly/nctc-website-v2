'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

export default function FeaturedTechnologiesSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#f8f9ff' }}
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #243996 30%, #4a81f6 50%, #243996 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section label */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#4a81f6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Innovation Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{ color: '#01093d' }}
          >
            Technologies{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready for Industry
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            ASRT-funded inventions assessed for Technology, Market, and Commercialization
            readiness — available for licensing, joint development, or spin-off.
          </p>
        </motion.div>

        {/* Coming Soon card */}
        <motion.div
          className="max-w-2xl mx-auto rounded-3xl p-12 text-center"
          style={{
            background: '#ffffff',
            border: '1.5px solid #e8edf8',
            boxShadow: '0 8px 40px rgba(1,9,61,0.06)',
          }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Pulsing dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ background: '#4a81f6' }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ background: '#eef2ff', color: '#243996', border: '1px solid #dde4f4' }}
          >
            <Clock className="w-4 h-4" />
            Portfolio Launching Shortly
          </div>

          <h3 className="text-2xl font-bold mb-3" style={{ color: '#01093d' }}>
            Coming Soon
          </h3>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our featured technology showcase is currently being prepared. ASRT-assessed
            inventions with full TRL/MRL/CRL profiles will be published here soon.
          </p>

          <Link
            href="/contact?subject=Submit%20Technology%20for%20Commercialization"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:gap-3"
            style={{
              background: 'linear-gradient(135deg, #243996, #4a81f6)',
              boxShadow: '0 4px 20px rgba(74,129,246,0.3)',
            }}
          >
            Submit Your Technology
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
