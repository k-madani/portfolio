'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  year: string;
  index: string;
}

const projects: Project[] = [
  {
    title: 'Real-Time Auction Platform',
    description:
      'A modern e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout experience.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    year: '2024',
    index: '01',
  },
  {
    title: 'ContentFlow',
    description: 'Real-time analytics dashboard with interactive charts and customizable widgets.',
    tags: ['Crew AI', 'Flask API', 'Vite'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    year: '2023',
    index: '02',
  },
  {
    title: 'Budgetly',
    description: 'Secure and intuitive mobile banking experience with biometric authentication.',
    tags: ['Django', 'Next.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    year: '2023',
    index: '03',
  },
  {
    title: 'WordArena',
    description: 'AI-powered content creation tool for marketers and content creators.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    liveUrl: '#',
    year: '2024',
    index: '04',
  }
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 relative px-6 sm:px-8">
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
              Selected Work
            </motion.p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--text-primary))] leading-tight">
              Featured
              <br />
              <span className="italic text-[rgb(var(--accent-primary))]">Projects</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[rgb(var(--text-secondary))] max-w-md text-lg leading-relaxed"
          >
            A curated selection of projects that showcase my expertise in creating bold digital experiences.
          </motion.p>
        </motion.div>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group border-t border-[rgb(var(--accent-primary))]/10 py-12 md:py-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={project.liveUrl} className="block">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                  {/* Index */}
                  <span className="text-sm text-[rgb(var(--text-secondary))] font-medium tracking-widest">
                    {project.index}
                  </span>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold flex-1 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="hidden lg:flex items-center gap-3">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))] rounded-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Year */}
                  <span className="text-sm text-[rgb(var(--text-secondary))] font-medium">{project.year}</span>

                  {/* Arrow */}
                  <motion.div
                    className="w-14 h-14 border-2 border-[rgb(var(--accent-primary))]/30 flex items-center justify-center group-hover:bg-[rgb(var(--accent-primary))] group-hover:border-[rgb(var(--accent-primary))] transition-all duration-300 text-[rgb(var(--text-primary))] group-hover:text-white"
                    animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </motion.div>
                </div>

                {/* Expandable content on hover */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="grid md:grid-cols-2 gap-8 pt-8 md:pt-12">
                    <motion.div
                      className="aspect-video overflow-hidden"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </motion.div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[rgb(var(--text-secondary))] text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 lg:hidden">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium px-3 py-1.5 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))] rounded-none"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}