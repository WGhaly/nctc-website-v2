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

  {
    title: 'Impedimetric Viral Sensor',
    inventor: 'Prof. Rabeay Hassan',
    field: 'Medical Devices',
    fieldColor: '#059669',
    trl: 6,
    mrl: 3,
    crl: 1,
    status: 'evidence-needed' as const,
    highlight: 'Nanomaterial-enhanced point-of-care COVID-19 detection on carbon strips — patent filed',
  },
  {
    title: 'Vitamin-D Immunosensor',
    inventor: 'Prof. Rabeay Hassan',
    field: 'Medical Devices',
    fieldColor: '#059669',
    trl: 6,
    mrl: 4,
    crl: 2,
    status: 'evidence-needed' as const,
    highlight: 'Nano-impedimetric platform for rapid Vitamin-D deficiency detection in blood — patent filed',
  },
  {
    title: 'Fusarium Bioherbicide',
    inventor: 'Prof. Yasser Shabana',
    field: 'Agriculture',
    fieldColor: '#65a30d',
    trl: 5,
    mrl: 3,
    crl: 3,
    status: 'evidence-needed' as const,
    highlight: 'Field-validated granular bioherbicide for sustainable Broomrape control in Faba Bean crops',
  },
  {
    title: 'Prosthetic Lower Limb',
    inventor: 'Ahmed El-Sabbagh',
    field: 'Medical Devices',
    fieldColor: '#059669',
    trl: 5,
    mrl: 3,
    crl: 2,
    status: 'active' as const,
    highlight: 'Carbon fiber ESR prosthetic foot localized for Egyptian manufacturing capabilities — TRL 5',
  },
];

function LevelPill({ label, value }: { label: string; value: number }) {
  const color =
    value >= 7
      ? { bg: '#dcfce7', text: '#15803d', bar: '#16a34a' }
      : value >= 5
      ? { bg: '#fef9c3', text: '#a16207', bar: '#d97706' }
      : value >= 3
      ? { bg: '#fff7ed', text: '#c2410c', bar: '#ea580c' }
      : { bg: '#f3f4f6', text: '#6b7280', bar: '#9ca3af' };

  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-xs font-bold px-2.5 py-0.5 rounded-lg"
        style={{ background: color.bg, color: color.text }}
      >
        {label} {value}
      </span>
      <div className="w-12 h-1 rounded-full overflow-hidden bg-gray-100">
        <div
          className="h-full rounded-full"
          style={{ width: `${(value / 9) * 100}%`, background: color.bar }}
        />
      </div>
    </div>
  );
}

const statusConfig = {
  active: { label: 'Active', bg: '#dcfce7', text: '#15803d' },
  'evidence-needed': { label: 'Evidence Review', bg: '#fef9c3', text: '#a16207' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedTechnologiesSection() {
  return (
    <section
      id="portfolio"
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#f8f9ff' }}
    >
      {/* Subtle accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #243996 30%, #4a81f6 50%, #243996 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
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
            <p className="text-gray-500 text-lg leading-relaxed">
              ASRT-funded inventions assessed for Technology, Market, and Commercialization
              readiness. Available for licensing, joint development, or spin-off.
            </p>
          </div>
          <div
            className="flex-shrink-0 px-5 py-4 rounded-2xl"
            style={{ background: '#ffffff', border: '1.5px solid #e8edf8' }}
          >
            <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-1">
              Total Portfolio
            </p>
            <p className="text-3xl font-bold" style={{ color: '#01093d' }}>
              8{' '}
              <span className="text-gray-400 text-base font-normal">technologies</span>
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featured.map((item, i) => {
            const sc = statusConfig[item.status];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8edf8',
                  boxShadow: '0 2px 12px rgba(1,9,61,0.04)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,129,246,0.4)';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 8px 40px rgba(74,129,246,0.1)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#e8edf8';
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 2px 12px rgba(1,9,61,0.04)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Top accent stripe */}
                <div
                  className="h-1 w-full flex-shrink-0"
                  style={{
                    background: `linear-gradient(90deg, ${item.fieldColor}, transparent)`,
                  }}
                />

                <div className="p-5 flex flex-col flex-1">
                  {/* Field badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        background: `${item.fieldColor}15`,
                        color: item.fieldColor,
                        border: `1px solid ${item.fieldColor}35`,
                      }}
                    >
                      {item.field}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: sc.bg, color: sc.text }}
                    >
                      {sc.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-sm leading-snug mb-1.5" style={{ color: '#01093d' }}>
                    {item.title}
                  </h3>

                  {/* Inventor */}
                  <p className="text-xs text-gray-400 mb-3">{item.inventor}</p>

                  {/* Highlight */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
                    {item.highlight}
                  </p>

                  {/* TRL / MRL / CRL */}
                  <div
                    className="flex items-center justify-between mb-4 p-3 rounded-xl"
                    style={{ background: '#f8f9ff' }}
                  >
                    <LevelPill label="TRL" value={item.trl} />
                    <div className="w-px h-8 bg-gray-100" />
                    <LevelPill label="MRL" value={item.mrl} />
                    <div className="w-px h-8 bg-gray-100" />
                    <LevelPill label="CRL" value={item.crl} />
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/contact?subject=${encodeURIComponent('Inquiry: ' + item.title)}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:gap-3"
                    style={{
                      background: '#eef2ff',
                      color: '#243996',
                      border: '1px solid #dde4f4',
                    }}
                  >
                    Inquire About This Technology
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #01093d 0%, #1a2a7a 100%)',
            border: '1px solid rgba(74,129,246,0.15)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">
              Explore the full innovation portfolio
            </p>
            <p className="text-white/50 text-sm">
              8 technologies across Biotechnology, Medical Devices, Agriculture, and more — all
              with TRL/MRL/CRL assessments.
            </p>
          </div>
          <Link
            href="/technologies"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #243996, #4a81f6)',
              boxShadow: '0 4px 24px rgba(74,129,246,0.3)',
            }}
          >
            View All Technologies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Submit your tech */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm">
            Are you a researcher with a technology ready for commercialization?{' '}
            <Link
              href="/contact?subject=Submit%20Technology%20for%20Commercialization"
              className="font-semibold hover:underline"
              style={{ color: '#4a81f6' }}
            >
              Submit your technology →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
