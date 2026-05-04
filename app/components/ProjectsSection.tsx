'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Github, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Project {
  title: string;
  tagline: string;
  tags: string[];
  image: string;
  problem: string;
  solution: string;
  links: { github?: string };
}

const projects: Project[] = [
  {
    title: 'Real-Time Auction Platform',
    tagline: 'Concurrent bidding with guaranteed winner resolution',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'WebSockets', 'React', 'JWT'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60',
    problem: 'High-frequency bids in competitive auctions create race conditions, stale reads and non-deterministic winner resolution under concurrent access.',
    solution: 'Designed a transactional bidding engine with row-level locking and WebSocket-based live propagation to guarantee single-winner consistency, sub-second updates and anti-sniping protection.',
    links: { github: 'https://github.com/k-madani/realtime-auction' },
  },
  {
    title: 'ContentFlow',
    tagline: 'AI pipeline from research to publish-ready article',
    tags: ['CrewAI', 'Python', 'Gemini', 'Groq', 'FastAPI', 'React'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    problem: 'Content creation across research, drafting, editing and SEO is fragmented across tools, leading to slow turnaround and inconsistent quality at scale.',
    solution: 'Engineered a 5-agent CrewAI pipeline with custom SEO and tone analysis modules, dual-LLM failover and health-checked orchestration to deliver publication-ready articles in 3–5 minutes with high reliability.',
    links: { github: 'https://github.com/k-madani/content-creation' },
  },
  {
    title: 'Budgetly',
    tagline: 'Smart finance tracker with predictive forecasting',
    tags: ['Django', 'Next.js', 'PostgreSQL', 'JWT', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&auto=format&fit=crop&q=60',
    problem: 'Users struggled to track expenses and understand spending patterns without manual categorization.',
    solution: 'Created finance tracker with JWT authentication and automated category assignment that processes 1000+ transactions in under 2 seconds with 80% categorization accuracy.',
    links: { github: 'https://github.com/k-madani/budget-tracking' },
  },
  {
    title: 'WordArena',
    tagline: 'Multiplayer word game with real-time rooms',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'Redis'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    problem: 'Classic word games lacked real-time multiplayer capabilities and engaging competitive features.',
    solution: 'Built multiplayer hangman game using MERN stack with WebSocket and Redis, supporting 100+ concurrent games with sub-100ms response time.',
    links: { github: 'https://github.com/k-madani/word-arena' },
  },
  {
    title: 'RL Investment',
    tagline: 'Adaptive portfolio allocation via multi-agent RL',
    tags: ['Python', 'DQN', 'Contextual Bandits', 'NumPy', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60',
    problem: 'Traditional portfolio management uses static allocation rules that fail during market regime changes, leading to suboptimal risk-adjusted returns.',
    solution: 'Built a multi-agent RL system combining DQN for capital allocation with Contextual Bandits for stock selection, achieving 210% returns and a 1.931 Sharpe ratio — outperforming equal-weight baseline by 94 percentage points.',
    links: { github: 'https://github.com/k-madani/rl-investment' },
  },
  {
    title: 'Voyage',
    tagline: 'Flight booking platform with loyalty rewards',
    tags: ['TypeScript', 'Node.js', 'Express.js', 'Mongoose', 'Material UI'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop&q=60',
    problem: 'Budget travellers had no unified platform combining real-time flight alerts, preference-based filtering and a loyalty reward system.',
    solution: 'Developed a full-stack flight booking app with customizable travel preferences, real-time email notifications, secure payment gateway and a tiered loyalty points system (Voyager → Adventurer).',
    links: { github: 'https://github.com/k-madani/Voyage' },
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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

        {/* 2×3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border border-[rgb(var(--accent-primary))]/20 hover:border-[rgb(var(--accent-primary))]/50 overflow-hidden transition-colors duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[rgb(var(--accent-primary))]/0 group-hover:bg-[rgb(var(--accent-primary))]/5 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold uppercase tracking-widest text-white bg-black/60 backdrop-blur-sm px-4 py-2">
                    View Details
                  </span>
                </div>
              </div>

              {/* Tile footer */}
              <div className="p-6">
                <div className="mb-3">
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="group/gh flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--text-secondary))] transition-colors duration-200"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4 group-hover/gh:text-[rgb(var(--accent-primary))] transition-colors duration-200" />
                        <span className="group-hover/gh:text-[rgb(var(--accent-primary))] transition-colors duration-200">GitHub</span>
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Blurred backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Dialog */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[rgb(var(--bg-card))] border border-[rgb(var(--accent-primary))]/30 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center border border-[rgb(var(--accent-primary))]/30 hover:bg-[rgb(var(--accent-primary))] hover:border-[rgb(var(--accent-primary))] text-[rgb(var(--text-secondary))] hover:text-white transition-all duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Cyan accent bar at bottom of image */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[rgb(var(--accent-primary))]" />
                </div>

                {/* Modal content */}
                <div className="p-8">
                  {/* Title row with GitHub */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-2 leading-tight">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-[rgb(var(--text-secondary))]">
                        {selectedProject.tagline}
                      </p>
                    </div>
                    {selectedProject.links.github && (
                      <a
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors duration-200"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 border border-[rgb(var(--accent-primary))]/30 text-[rgb(var(--text-secondary))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Problem / Solution */}
                  <div className="space-y-6">
                    <div className="border-l-4 border-[rgb(var(--accent-primary))] pl-5">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--text-primary))] mb-2">
                        Problem
                      </h4>
                      <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                        {selectedProject.problem}
                      </p>
                    </div>

                    <div className="border-l-4 border-[rgb(var(--accent-primary))] pl-5">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[rgb(var(--text-primary))] mb-2">
                        Solution
                      </h4>
                      <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}