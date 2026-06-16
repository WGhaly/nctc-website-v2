'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const documents = [
  {
    label: 'Stage 1',
    stage: 'Protecting Confidential Discussions',
    title: 'Non-Disclosure Agreement',
    acronym: 'NDA',
    description:
      'Legally binds parties to confidentiality before sharing sensitive research, IP details, or commercial information. The essential first document for any serious innovation discussion.',
    useCases: [
      'Before sharing unpublished research with potential licensees',
      'When entering industry collaboration discussions',
      'Prior to any investor pitch or funding conversation',
      'Between co-inventors or external consultants',
    ],
    cta: 'Request NDA Template',
  },
  {
    label: 'Stage 2',
    stage: 'Documenting Your Invention',
    title: 'Invention Disclosure Form',
    acronym: 'IDF',
    description:
      'The formal mechanism for inventors to disclose a new invention to their Technology Transfer Office. Captures technical details, IP status, prior disclosures, funding sources, and commercialization potential.',
    useCases: [
      "When you've created something novel worth protecting",
      'Before filing a patent application',
      'To trigger the institutional IP evaluation process',
      'Required to access NCTC commercialization services',
    ],
    cta: 'Request IDF Template',
  },
  {
    label: 'Stage 3',
    stage: 'Governing Research Material Transfers',
    title: 'Material Transfer Agreement',
    acronym: 'MTA',
    description:
      'Governs the transfer of tangible research materials between organizations. Defines permitted uses, ownership of derivatives, IP rights, and liability. Critical for preventing unintentional IP loss.',
    useCases: [
      'Transferring biological samples, chemicals, or prototypes to collaborators',
      'Receiving materials from industry for joint research',
      'Sharing research tools or reagents with other institutions',
      'Any physical exchange with commercial implications',
    ],
    cta: 'Request MTA Template',
  },
  {
    label: 'Reference Guide',
    stage: 'Understanding the Full Framework',
    title: 'Comprehensive Guide to Licensing Agreements',
    acronym: 'Licensing Guide',
    description:
      'An in-depth reference covering the structure, terms, and negotiation of technology licensing agreements. From exclusive vs. non-exclusive rights to royalty structures, field-of-use restrictions, and sublicensing provisions.',
    useCases: [
      'Understanding your rights as an inventor in a licensing deal',
      'Reference guide for TTO staff structuring agreements',
      'Preparation before entering licensing negotiations',
      'Educating stakeholders on commercialization structures',
    ],
    cta: 'Request Licensing Guide',
  },
];

export default function LegalToolboxSection() {
  return (
    <section
      id="legal-toolbox"
      className="w-full py-24 md:py-32"
      style={{ background: '#f7f8fc' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#4a81f6' }}>
            OTC Legal Toolbox
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#01093d' }}>
            Legal Tools for Every Stage of Your Journey
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            Professional legal frameworks prepared by the NCTC team to protect inventors, 
            researchers, and institutions across the entire innovation lifecycle.
          </p>
        </motion.div>

        {/* Document Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {documents.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white overflow-hidden"
              style={{
                borderLeft: '4px solid #01093d',
                border: '1px solid #e2e8f0',
                borderLeftWidth: '4px',
                borderLeftColor: '#01093d',
              }}
            >
              <div className="p-7 md:p-8">
                {/* Stage label */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4a81f6' }}>
                      {doc.label}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{doc.stage}</p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-gray-100 text-gray-600">
                    {doc.acronym}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 leading-snug" style={{ color: '#01093d' }}>
                  {doc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {doc.description}
                </p>

                {/* Use cases */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                    When to Use
                  </p>
                  {doc.useCases.map((uc, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: '#4a81f6' }}>—</span>
                      <p className="text-xs text-gray-500 leading-snug">{uc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                  style={{ color: '#01093d' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#4a81f6';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#01093d';
                  }}
                >
                  {doc.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 px-8 py-5"
            style={{ background: '#fff', border: '1px solid #e2e8f0' }}
          >
            <div>
              <p className="font-bold text-sm" style={{ color: '#01093d' }}>Need a custom legal document or legal advice?</p>
              <p className="text-gray-400 text-xs mt-0.5">Our team provides tailored legal support for complex IP and commercialization matters.</p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-colors duration-200"
              style={{ background: '#01093d' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#243996';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#01093d';
              }}
            >
              Contact Legal Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

