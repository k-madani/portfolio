'use client';

import { motion } from 'framer-motion';
import { Project } from '@/lib/projects';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
  index: number;
  onClick: () => void;
};

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <motion.div
        onClick={onClick}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative h-full bg-gradient-to-br from-[rgb(var(--bg-card))] via-[rgb(var(--bg-card))] to-[rgb(var(--bg-secondary))] border border-[rgb(var(--border))] overflow-hidden cursor-pointer transition-all duration-500 hover:border-[rgb(var(--accent-primary))] hover:shadow-2xl hover:shadow-[rgb(var(--accent-primary))]/20 rounded-none"
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[rgb(var(--accent-primary))]/5 to-transparent transition-opacity duration-500" />

        {/* Content */}
        <div className="relative p-8 md:p-10 h-full flex flex-col">
          {/* Header with Number and Icons */}
          <div className="flex items-start justify-between mb-6">
            <div className="text-sm font-mono font-bold text-[rgb(var(--accent-primary))] bg-[rgb(var(--accent-primary))]/10 px-3 py-1 rounded-none">
              Project {String(index + 1).padStart(2, '0')}
            </div>
            <div className="flex gap-3">
              {project.links.demo && (
                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-primary))]/20 transition-colors rounded-none"
                  aria-label="View demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] hover:bg-[rgb(var(--accent-primary))]/20 transition-colors rounded-none"
                  aria-label="View source"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text-primary))] mb-3 group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed line-clamp-3 flex-grow">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-6 py-6 border-t border-[rgb(var(--border))]">
            {project.metrics.slice(0, 3).map((metric, i) => (
              <div key={i} className="text-center">
                <span className="block text-2xl mb-2">{metric.icon}</span>
                <span className="block text-sm font-semibold text-[rgb(var(--accent-primary))]">
                  {metric.text.split(' ').slice(0, -1).join(' ')}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techBadges.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs font-medium bg-[rgb(var(--accent-primary))]/10 text-[rgb(var(--accent-primary))] border border-[rgb(var(--accent-primary))]/20 hover:border-[rgb(var(--accent-primary))]/50 transition-colors rounded-none"
              >
                {tech}
              </motion.span>
            ))}
            {project.techBadges.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium text-[rgb(var(--text-muted))] rounded-none">
                +{project.techBadges.length - 4} more
              </span>
            )}
          </div>

          {/* View Case Study Link */}
          <motion.button
            onClick={onClick}
            className="inline-flex items-center gap-2 text-[rgb(var(--accent-primary))] font-semibold group-hover:gap-4 transition-all"
            whileHover={{ x: 4 }}
          >
            View Case Study
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.article>
  );
}