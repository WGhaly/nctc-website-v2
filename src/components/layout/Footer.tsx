'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { label: 'About NCTC', href: '#about' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Innovation Ecosystem', href: '#otc-network' },
        { label: 'Innovation Clusters', href: '#clusters' },
        { label: 'Digital Platform', href: '#platform' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { label: 'For Researchers', href: '#get-involved' },
        { label: 'For Industry', href: '#get-involved' },
        { label: 'For Investors', href: '#get-involved' },
        { label: 'For Universities', href: '#get-involved' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Use', href: '/terms' },
        { label: 'IP & Licensing', href: '/ip-licensing' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #01093d 0%, #10112f 50%, #161616 100%)',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-6 gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/nctc-logo-hq.png"
                alt="NCTC"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 font-light mb-8 leading-relaxed">
              Egypt's National Center for Technology Commercialization — 
              Transforming research into impact through innovation, collaboration, and excellence.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="md:col-span-1">
              <h4 className="text-white font-bold text-lg mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#4a81f6]" />
                <p>Egypt</p>
              </div>
              <a 
                href="mailto:info@nctc.eg" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-[#4a81f6]" />
                <span>info@nctc.eg</span>
              </a>
              <a 
                href="tel:+20XXXXXXXXXX" 
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-[#4a81f6]" />
                <span>+20 (X) XXXX-XXXX</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} NCTC. All rights reserved.
            </p>
            <p className="text-center">
              Built with innovation and dedication to Egypt's technological future.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Gradient Border Top */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, #01093d 0%, #4a81f6 50%, #01093d 100%)',
        }}
      />
    </footer>
  );
};

export default Footer;
