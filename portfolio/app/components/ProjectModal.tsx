'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText } from 'lucide-react';
import { Project } from '@/lib/projects';
import { useEffect } from 'react';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl bg-[rgb(var(--bg-card))] rounded-2xl shadow-2xl border border-[rgb(var(--border))] max-h-[90vh] overflow-y-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-[rgb(var(--bg-secondary))] transition-colors z-10"
                >
                  <X className="w-6 h-6 text-[rgb(var(--text-secondary))]" />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Title */}
                  <h2 className="text-4xl font-bold text-[rgb(var(--text-primary))] mb-2">
                    {project.title}
                  </h2>
                  <div className="h-1 w-20 bg-[rgb(var(--accent-primary))] rounded mb-8" />

                  {/* Challenge */}
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-[rgb(var(--accent-primary))] mb-3">
                      THE CHALLENGE
                    </h3>
                    <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                      {project.challenge}
                    </p>
                  </section>

                  {/* Solution */}
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-[rgb(var(--accent-primary))] mb-3">
                      THE SOLUTION
                    </h3>
                    <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                      {project.solution}
                    </p>
                  </section>

                  {/* Architecture Placeholder */}
                  <section className="mb-8">
                    <div className="bg-[rgb(var(--bg-secondary))] rounded-xl p-8 border border-[rgb(var(--border))]">
                      <div className="text-center text-[rgb(var(--text-secondary))]">
                        <p className="text-sm mb-2">Architecture Diagram</p>
                        <p className="text-xs opacity-50">Add your system diagram here</p>
                      </div>
                    </div>
                  </section>

                  {/* Key Achievements */}
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-[rgb(var(--accent-primary))] mb-4">
                      KEY ACHIEVEMENTS
                    </h3>
                    <ul className="space-y-3">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-[rgb(var(--accent-primary))] mt-1">•</span>
                          <span className="text-[rgb(var(--text-secondary))]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Tech Stack Detailed */}
                  <section className="mb-8">
                    <h3 className="text-xl font-semibold text-[rgb(var(--accent-primary))] mb-4">
                      TECH STACK
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.techStack.map((tech, index) => (
                        <div
                          key={index}
                          className="p-4 bg-[rgb(var(--bg-secondary))] rounded-lg border border-[rgb(var(--border))]"
                        >
                          <h4 className="font-mono font-semibold text-[rgb(var(--text-primary))] mb-1">
                            {tech.name}
                          </h4>
                          <p className="text-sm text-[rgb(var(--text-secondary))]">
                            {tech.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Links */}
                  <section>
                    <div className="flex flex-wrap gap-4">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-[rgb(var(--accent-primary))] text-white rounded-lg hover:bg-[rgb(var(--accent-secondary))] transition-colors font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border border-[rgb(var(--border))] text-[rgb(var(--text-primary))] rounded-lg hover:border-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-primary))] transition-colors font-medium"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {project.links.blog && (
                        <a
                          href={project.links.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border border-[rgb(var(--border))] text-[rgb(var(--text-primary))] rounded-lg hover:border-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-primary))] transition-colors font-medium"
                        >
                          <FileText className="w-4 h-4" />
                          Technical Writeup
                        </a>
                      )}
                    </div>
                  </section>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}