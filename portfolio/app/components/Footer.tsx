'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[rgb(var(--accent-primary))]/10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="text-xl font-bold inline-block mb-3 text-[rgb(var(--text-primary))]">
              Krishna<span className="text-[rgb(var(--accent-primary))]">.</span>
            </a>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              © {new Date().getFullYear()} Krishna Madani. All rights reserved.
            </p>
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-8">
            {[
              { name: 'GitHub', href: 'https://github.com/krishnamadani' },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/krishnamadani' },
              { name: 'Email', href: 'mailto:madanik0199@gmail.com' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors uppercase tracking-widest"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ y: -2 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}