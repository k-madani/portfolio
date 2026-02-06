'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  tags: string[];
  gif: string;
  index: string;
  problem: string;
  solution: string;
  links: {
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Real-Time Auction Platform',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
    gif: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
    index: '01',
    problem: 'Traditional auctions lacked real-time bidding capabilities and instant price updates for multiple concurrent users.',
    solution: 'Built WebSocket-based bidding system with Spring Boot backend, achieving sub-200ms bid processing with support for 500+ concurrent users and zero bid conflicts.',
    links: {
      github: '#',
    },
  },
  {
    title: 'ContentFlow',
    tags: ['CrewAI', 'Flask API', 'Vite', 'RAG'],
    gif: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    index: '02',
    problem: 'Content creation required hours of manual work across research, writing, editing, and SEO optimization.',
    solution: 'Developed multi-agent AI system using CrewAI that reduced content generation time from 4 hours to 5 minutes with 97% quality acceptance rate at zero operational cost.',
    links: {
      github: '#',
    },
  },
  {
    title: 'Budgetly',
    tags: ['Django', 'Next.js', 'PostgreSQL'],
    gif: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60',
    index: '03',
    problem: 'Users struggled to track expenses and understand spending patterns without manual categorization.',
    solution: 'Created finance tracker with JWT authentication and automated category assignment that processes 1000+ transactions in under 2 seconds with 80% categorization accuracy.',
    links: {
      github: '#',
    },
  },
  {
    title: 'WordArena',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    gif: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    index: '04',
    problem: 'Classic word games lacked real-time multiplayer capabilities and engaging competitive features.',
    solution: 'Built multiplayer hangman game using MERN stack with WebSocket and Redis, supporting 100+ concurrent games with sub-100ms response time.',
    links: {
      github: '#',
    },
  },
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
            Real systems solving real problems. Each project demonstrates my ability to design, build, and ship production-ready solutions.
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
              {/* Project Row */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                {/* Index */}
                <span className="text-sm text-[rgb(var(--text-secondary))] font-medium tracking-widest">
                  {project.index}
                </span>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold flex-1 text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* All Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
                <div className="pt-12">
                  {/* GIF and Details Grid */}
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - GIF Only */}
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ 
                        scale: hoveredIndex === index ? 1 : 0.95,
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.gif}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Right - Problem + Solution */}
                    <div className="space-y-8">
                      {/* Problem */}
                      <div className="border-l-4 border-[rgb(var(--accent-primary))] pl-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[rgb(var(--text-primary))] mb-3">
                          Problem
                        </h4>
                        <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Solution with metrics */}
                      <div className="border-l-4 border-[rgb(var(--accent-primary))] pl-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[rgb(var(--text-primary))] mb-3">
                          Solution
                        </h4>
                        <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      {/* GitHub Link Only */}
                      <div className="pt-4">
                        {project.links.github && (
                          
                          <a href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[rgb(var(--accent-primary))] text-[rgb(var(--accent-primary))] font-semibold hover:bg-[rgb(var(--accent-primary))]/5 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}