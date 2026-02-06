'use client';

import { motion } from 'framer-motion';
import { Server, Layout, Database } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Node.js', 'Express.js', 'FlaskAPI', 'REST APIs'],
  },
  {
    title: 'Frontend & UI',
    icon: Layout,
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Cloud & Database',
    icon: Database,
    skills: ['AWS', 'Azure DevOps', 'Docker', 'CI/CD', 'PostgreSQL', 'MongoDB', 'Git', 'Serverless'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 relative px-6 sm:px-8 border-t border-[rgb(var(--accent-primary))]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[rgb(var(--accent-primary))] text-sm font-medium tracking-widest uppercase mb-4"
            >
              Technical Arsenal
            </motion.p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--text-primary))] leading-tight">
              Skills &<br />
              <span className="italic text-[rgb(var(--accent-primary))]">Technologies</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[rgb(var(--text-secondary))] max-w-md text-lg leading-relaxed"
          >
            A comprehensive toolkit for building scalable, modern applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="relative border-t-2 border-[rgb(var(--accent-primary))] pt-8"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border-2 border-[rgb(var(--accent-primary))] flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--text-primary))]">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm bg-[rgb(var(--accent-primary))]/10 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] hover:border-[rgb(var(--accent-primary))] transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}