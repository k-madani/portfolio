'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'JOURNEY', href: '#timeline' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'WORK', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 py-5 md:py-6 transition-all duration-300 ${
        scrolled 
          ? 'bg-[rgb(var(--bg-primary))]/80 backdrop-blur-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-xl md:text-2xl font-bold text-[rgb(var(--text-primary))] hover:text-[rgb(var(--accent-primary))] transition-colors"
        >
          Krishna<span className="text-[rgb(var(--accent-primary))]">.</span>
        </a>

        {/* Navigation Links + Theme Toggle */}
        <div className="flex items-center">
          {/* Nav Items */}
          <div className="flex items-center gap-6 md:gap-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-xs md:text-sm font-medium tracking-widest text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors uppercase whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-0.5 h-6 bg-[rgb(var(--border))] mx-6 md:mx-8" />

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-2 hover:bg-[rgb(var(--accent-primary))]/10 transition-all flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <div className="relative w-5 h-5">
              <motion.div
                initial={false}
                animate={{
                  scale: theme === 'dark' ? 1 : 0,
                  rotate: theme === 'dark' ? 0 : 180,
                  opacity: theme === 'dark' ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Moon className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  scale: theme === 'light' ? 1 : 0,
                  rotate: theme === 'light' ? 0 : -180,
                  opacity: theme === 'light' ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Sun className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}