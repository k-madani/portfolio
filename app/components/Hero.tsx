'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const roles = [
  'Software Developer',
  'Full Stack Developer',
  'Backend Developer',
  'Cloud Developer',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 overflow-hidden pt-32 pb-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(var(--accent-primary))]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(var(--accent-light))]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        {/* 
          KEY: items-stretch makes both columns the same height.
          The LEFT content determines the row height naturally.
          The RIGHT photo then stretches to fill that same height.
          No forced min-h on the row — content drives everything.
        */}
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-2">

          {/* Left — Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 z-10 flex flex-col justify-center"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[rgb(var(--text-primary))] tracking-tight leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Krishna Madani
              </motion.span>
            </h1>

            <div className="h-12 sm:h-14 md:h-16 mb-8 overflow-hidden">
              <motion.div
                key={currentRole}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[rgb(var(--accent-primary))] via-[rgb(var(--accent-light))] to-[rgb(var(--accent-primary))] bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-[rgb(var(--text-secondary))] mb-10 leading-relaxed max-w-2xl"
            >
              Building scalable systems from code to cloud. Every solution starts with clear thinking and a shot of espresso.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-light))] text-white font-semibold hover:shadow-2xl hover:shadow-[rgb(var(--accent-primary))]/30 transition-all duration-300"
              >
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base border-2 border-[rgb(var(--accent-primary))] text-[rgb(var(--accent-primary))] font-semibold hover:bg-[rgb(var(--accent-primary))]/5 transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block flex-shrink-0 self-stretch"
          >
            {/* 
              w-72 fixed width. h-full fills the row height = left content height.
              object-cover ensures image fills without distorting.
            */}
            <div className="relative w-72 h-full">
              {/* Animated Frame 1 - Outer */}
              <motion.div
                animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 border-2 border-[rgb(var(--accent-primary))]/40 translate-x-6 translate-y-6"
              />
              {/* Animated Frame 2 - Middle */}
              <motion.div
                animate={{ x: [0, 8, 0], y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute inset-0 border-2 border-[rgb(var(--accent-light))]/50 translate-x-3 translate-y-3"
              />
              {/* Main Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="relative z-10 w-full h-full overflow-hidden border-2 border-[rgb(var(--accent-primary))] shadow-2xl shadow-[rgb(var(--accent-primary))]/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80"
                  alt="Krishna Madani"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              {/* Accent square */}
              <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute -top-3 -right-3 w-10 h-10 bg-[rgb(var(--accent-primary))] z-0"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs sm:text-sm text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--accent-primary))] transition-colors">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(var(--accent-primary))]" />
        </motion.div>
      </motion.button>

      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[rgb(var(--accent-primary))]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[rgb(var(--accent-light))]/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}