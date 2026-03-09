'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { BeamsBackground } from '@/components/ui/beams-background';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const rotatingPhrases = [
    'Connecting Research, Innovation, and Industry',
    'Transforming Ideas into Market-Ready Solutions',
    'Driving Egypt\'s Innovation Economy Forward',
    'Building Bridges from Lab to Market',
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen">
      <BeamsBackground 
        intensity="strong"
        className="pt-0"
        style={{ 
          background: 'linear-gradient(135deg, #01093d 0%, #10112f 40%, #243996 80%, #4a81f6 100%)' 
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
          <motion.div
            className="max-w-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* NCTC Logo */}
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Image
                src="/NCTC Logo HQ.png"
                alt="NCTC - National Center of Technology Commercialization"
                width={500}
                height={150}
                className="w-auto h-24 sm:h-32 md:h-40 object-contain drop-shadow-2xl brightness-0 invert"
                priority
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              From Research to{' '}
              <span 
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #4a81f6 0%, #243996 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real Impact
              </span>
            </motion.h1>
            
            
            {/* Animated Rotating Subheadline */}
            <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPhraseIndex}
                  className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  {rotatingPhrases[currentPhraseIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-white/70 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Egypt's National Center for Technology Commercialization transforms research outcomes 
              into real-world technologies by uniting researchers, universities, industry leaders, and investors.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a
                href="#platform"
                className="group px-8 sm:px-10 py-4 text-white font-semibold rounded-xl flex items-center gap-3 transition-all duration-300 text-base sm:text-lg shadow-2xl hover:shadow-blue-500/50"
                style={{
                  background: 'linear-gradient(135deg, #4a81f6 0%, #243996 100%)',
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore the Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#otc-network"
                className="px-8 sm:px-10 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 text-base sm:text-lg shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Ecosystem
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2 cursor-pointer hover:border-white/60 transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1.5 h-2 bg-white/60 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </BeamsBackground>
    </section>
  );
};

export default HeroSection;
