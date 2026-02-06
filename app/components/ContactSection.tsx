'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative border-t border-[rgb(var(--accent-primary))]/10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[rgb(var(--accent-primary))] text-sm font-medium tracking-widest uppercase mb-6"
          >
            Get in Touch
          </motion.p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--text-primary))] leading-tight">
            Let&apos;s build
            <br />
            <span className="italic text-[rgb(var(--accent-primary))]">something</span>
            <br />
            <span>extraordinary</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-12">
              <div>
                <p className="text-xs text-[rgb(var(--text-secondary))] uppercase tracking-widest mb-3 font-semibold">
                  Email
                </p>
                <a 
                  href="mailto:madanik0199@gmail.com"
                  className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] hover:text-[rgb(var(--accent-primary))] transition-colors inline-block"
                >
                  madanik0199@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-[rgb(var(--text-secondary))] uppercase tracking-widest mb-3 font-semibold">
                  Location
                </p>
                <p className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-2">
                  Boston, MA
                </p>
                <p className="text-sm text-[rgb(var(--text-secondary))]">
                  Open to relocation across the US
                </p>
              </div>

              <div className="flex gap-6 pt-8">
                {[
                  { name: 'GitHub', icon: Github, href: 'https://github.com/krishnamadani' },
                  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/krishnamadani' },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-[rgb(var(--accent-primary))]/10 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] hover:border-[rgb(var(--accent-primary))] transition-all duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--text-secondary))] mb-3"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-[rgb(var(--accent-primary))]/30 py-4 text-xl text-[rgb(var(--text-primary))] focus:border-[rgb(var(--accent-primary))] outline-none transition-colors placeholder:text-[rgb(var(--text-secondary))]/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--text-secondary))] mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-[rgb(var(--accent-primary))]/30 py-4 text-xl text-[rgb(var(--text-primary))] focus:border-[rgb(var(--accent-primary))] outline-none transition-colors placeholder:text-[rgb(var(--text-secondary))]/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-widest text-[rgb(var(--text-secondary))] mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-[rgb(var(--accent-primary))]/30 py-4 text-xl text-[rgb(var(--text-primary))] focus:border-[rgb(var(--accent-primary))] outline-none transition-colors resize-none placeholder:text-[rgb(var(--text-secondary))]/50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[rgb(var(--accent-primary))]/10 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--accent-primary))] text-sm"
                >
                  {submitMessage}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-6 mt-8"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <span className="w-16 h-16 border-2 border-[rgb(var(--accent-primary))]/30 flex items-center justify-center group-hover:bg-[rgb(var(--accent-primary))] group-hover:border-[rgb(var(--accent-primary))] transition-all duration-300 text-[rgb(var(--text-primary))] group-hover:text-white">
                  <ArrowRight className="w-6 h-6" />
                </span>
                <span className="text-xl font-medium text-[rgb(var(--text-primary))]">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}