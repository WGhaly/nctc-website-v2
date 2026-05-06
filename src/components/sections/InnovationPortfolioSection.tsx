'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export default function InnovationPortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0f4ff 0%, #ffffff 60%, #f8faff 100%)' }}
    >
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1e3a8a 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5 rounded-full"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Innovation Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Validated Technologies{' '}
            <br className="hidden md:block" />
            <span
              style={{
                background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready for Industry
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            ASRT-funded research inventions assessed for Technology, Market, and Commercialization
            readiness. Each technology is available for licensing, joint development, or spin-off.
          </p>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          className="flex flex-col items-center justify-center text-center py-24 px-8 rounded-3xl border border-blue-100 bg-white shadow-sm"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)' }}
          >
            <Clock className="w-10 h-10 text-white" />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Coming Soon
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio Launching Shortly
          </h3>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10">
            We are currently finalising our innovation portfolio database. The full listing of
            ASRT-assessed technologies will be available here very soon.
          </p>

          {/* Decorative dots */}
          <div className="flex items-center gap-3 mb-10">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: '#3b82f6' }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
              />
            ))}
          </div>

          <p className="text-gray-400 text-sm mb-6">
            Are you a researcher with a technology ready for commercialization?
          </p>
          <a
            href="/contact?subject=Submit%20Technology%20for%20Commercialization"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
              boxShadow: '0 4px 24px rgba(59,130,246,0.3)',
            }}
          >
            Submit Your Technology
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
