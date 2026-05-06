'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  Route,
  BarChart3,
  Users,
  FileText,
  MessageSquare,
  PenLine,
  Handshake,
  Rocket,
  Calculator,
  ChevronDown,
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: <Route className="w-5 h-5" />,
    title: 'Commercialization Pathway Assessment',
    tagline: 'Find the best route to market',
    description:
      'Evaluate and compare licensing, spin-off, joint venture, direct market entry, and strategic partnership models. We recommend the optimal route based on your technology\'s readiness, IP position, and market dynamics.',
    audience: ['Inventors', 'R&D Teams', 'TTOs', 'Startups'],
    deliverable: 'Pathway Assessment Report',
  },
  {
    number: '02',
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'IP Valuation',
    tagline: 'Know what your innovation is worth',
    description:
      'Economic valuation of your technology and IP assets using recognized methodologies. We account for market size, IP strength, competitive positioning, and revenue potential to give you a defensible, evidence-based value.',
    audience: ['Inventors', 'TTOs', 'Startups', 'Government Funders'],
    deliverable: 'IP Valuation Report',
  },
  {
    number: '03',
    icon: <Users className="w-5 h-5" />,
    title: 'Licensee Identification & Profiling',
    tagline: 'Find the right commercial partner',
    description:
      'Research and profile qualified potential licensees across target industries. We assess strategic fit, technical capability, and commercial interest to present you with a shortlist of high-probability partners.',
    audience: ['Inventors', 'TTOs', 'Corporates'],
    deliverable: 'Licensee Profiles Report',
  },
  {
    number: '04',
    icon: <FileText className="w-5 h-5" />,
    title: 'Sales & Marketing Materials',
    tagline: 'Present your innovation professionally',
    description:
      'Develop a professional technology brief and licensee pitch deck tailored for targeted outreach and investor presentations. Your invention, articulated for the commercial world.',
    audience: ['Inventors', 'Startups', 'TTOs'],
    deliverable: 'Technology Brief + Pitch Deck',
  },
  {
    number: '05',
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'Licensee Approach & Engagement',
    tagline: 'Open the right commercial doors',
    description:
      'Execute targeted outreach to shortlisted licensees, manage communications, present the opportunity, and qualify interest. We build and maintain an active pipeline of engaged commercial partners.',
    audience: ['Inventors', 'TTOs', 'Research Institutions'],
    deliverable: 'Active Licensee Pipeline',
  },
  {
    number: '06',
    icon: <PenLine className="w-5 h-5" />,
    title: 'Drafting Licensing Agreement',
    tagline: 'Protect your interests in writing',
    description:
      'Prepare a professionally drafted agreement covering scope, exclusivity, royalty structure, sublicensing rights, and key terms. Comprehensive and ready for negotiation.',
    audience: ['Inventors', 'TTOs', 'Corporates'],
    deliverable: 'Licensing Agreement Draft',
  },
  {
    number: '07',
    icon: <Handshake className="w-5 h-5" />,
    title: 'Licensing Negotiation',
    tagline: 'Close the deal with confidence',
    description:
      'Lead negotiations, coordinate stakeholders, and facilitate agreement toward a signed, commercially sound licensing arrangement. We represent your interests at every stage of the table.',
    audience: ['Inventors', 'TTOs', 'Corporates'],
    deliverable: 'Signed Licensing Arrangement',
  },
  {
    number: '08',
    icon: <Rocket className="w-5 h-5" />,
    title: 'Startup & Spin-Off Support',
    tagline: 'Turn research into a venture',
    description:
      'Assess the venture opportunity, match to suitable incubator/accelerator programs, and develop an initial business model to support launch. Connected to our VC alliance partners.',
    audience: ['Researchers', 'Startups', 'University TTOs'],
    deliverable: 'Business Model Canvas + Program Match',
  },
  {
    number: '09',
    icon: <Calculator className="w-5 h-5" />,
    title: 'Financial & Economic Feasibility Study',
    tagline: 'Validate commercial viability rigorously',
    description:
      'Rigorous financial and economic assessment covering revenue modelling, cost structure, projections, funding gap, and risk analysis — with a clear go/no-go recommendation.',
    audience: ['Investors', 'Government', 'Corporates', 'Startups'],
    deliverable: 'Feasibility Report with Recommendation',
  },
];

const alliancePartners = [
  { name: 'Progressio', role: 'Strategy & Technical Review' },
  { name: 'Entelaq', role: 'Market Research' },
  { name: 'Lumens', role: 'Marketing & Creative' },
  { name: 'Falak', role: 'Venture Capital' },
  { name: 'Sequence', role: 'Venture Capital' },
  { name: 'Glint', role: 'Venture Capital' },
  { name: 'MO4', role: 'Media & Communications' },
];

export default function CommercializationServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="commercialization-services"
      className="w-full py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #243996 30%, #4a81f6 50%, #243996 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#4a81f6] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            IP Commercialization Services
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#01093d' }}
          >
            From Invention to Market.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We Get You There.
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Nine end-to-end services covering every stage of the commercialization journey — 
            from strategic planning and IP valuation to negotiated licensing deals and venture launches.
            Supported by Egypt's leading innovation alliance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                expanded === i ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{
                border: expanded === i ? '1.5px solid #4a81f6' : '1.5px solid #e8edf8',
                background: expanded === i ? 'linear-gradient(135deg, #01093d 0%, #1a2a7a 100%)' : '#fafbff',
              }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="p-6 md:p-7">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: expanded === i ? 'rgba(74,129,246,0.2)' : '#eef2ff',
                        color: expanded === i ? '#7eaaff' : '#4a81f6',
                      }}
                    >
                      {service.icon}
                    </div>
                    <span
                      className="text-xs font-bold tracking-widest font-mono"
                      style={{ color: expanded === i ? 'rgba(255,255,255,0.3)' : '#c0c9e8' }}
                    >
                      {service.number}
                    </span>
                  </div>
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-300"
                    style={{
                      color: expanded === i ? 'rgba(255,255,255,0.4)' : '#9dafd4',
                      transform: expanded === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </div>

                {/* Title & tagline */}
                <h3
                  className="font-bold text-base leading-snug mb-1"
                  style={{ color: expanded === i ? '#ffffff' : '#01093d' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: expanded === i ? 'rgba(255,255,255,0.5)' : '#7a8fc0' }}
                >
                  {service.tagline}
                </p>

                {/* Expanded content */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-white/10 space-y-4">
                        <p className="text-sm text-white/65 leading-relaxed">
                          {service.description}
                        </p>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-2">
                            Deliverable
                          </p>
                          <div
                            className="inline-block text-xs font-medium px-3 py-1.5 rounded-lg"
                            style={{ background: 'rgba(74,129,246,0.2)', color: '#7eaaff', border: '1px solid rgba(74,129,246,0.3)' }}
                          >
                            {service.deliverable}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-2">
                            For
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.audience.map((a) => (
                              <span
                                key={a}
                                className="text-xs px-2.5 py-1 rounded-full"
                                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                              >
                                {a}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={`/contact?subject=${encodeURIComponent('Enquiry: ' + service.title)}&service=${encodeURIComponent(service.title)}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all duration-200 hover:gap-3"
                          style={{ color: '#7eaaff' }}
                        >
                          Enquire About This Service <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, #243996, #4a81f6)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-2xl"
          style={{ background: 'linear-gradient(135deg, #01093d 0%, #1a2a7a 100%)', border: '1px solid rgba(74,129,246,0.2)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <p className="text-white text-2xl font-bold mb-2">Ready to commercialize your technology?</p>
            <p className="text-white/50 text-sm">
              Individual services or full end-to-end programme — we tailor the engagement to your needs.
            </p>
          </div>
          <a
            href="/contact?subject=Commercialization%20Services%20Inquiry"
            className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #243996, #4a81f6)',
              boxShadow: '0 4px 24px rgba(74,129,246,0.3)',
            }}
          >
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Alliance Partners */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest font-semibold mb-6">
            Alliance Members Supporting This Service
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {alliancePartners.map((p) => (
              <div
                key={p.name}
                className="px-4 py-2 rounded-xl text-sm"
                style={{ background: '#f0f3fc', border: '1px solid #dde4f4' }}
              >
                <span className="font-bold text-[#243996]">{p.name}</span>
                <span className="text-gray-400 text-xs ml-2">— {p.role}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
