'use client';

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface EducationItem {
  organization: string;
  location: string;
  degree: string;
  period: string;
  courses?: string[];
}

interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    organization: "Northeastern University",
    location: "Boston, Massachusetts, USA",
    degree: "Master of Science in Information Systems",
    period: "September'23 - December'25",
  },
  {
    organization: "University of Mumbai",
    location: "Mumbai, India",
    degree: "Bachelor of Engineering in Information Technology",
    period: "August'16 - May'20",
  },
];

const experienceData: ExperienceItem[] = [
  {
    company: "Crewasis.ai",
    location: "New York City, NY, USA",
    role: "Software Developer",
    period: "January'25 - June'25",
  },
  {
    company: "Capgemini",
    location: "Mumbai, India",
    role: "Software Developer",
    period: "September'20 - July'23",
  },
];

interface TimelineEntryProps {
  period: string;
  icon: typeof GraduationCap;
  title: string;
  location: string;
  subtitle: string;
  courses?: string[];
  showConnector: boolean;
  index: number;
  direction: 'left' | 'right';
}

const TimelineEntry = ({
  period,
  icon: Icon,
  title,
  location,
  subtitle,
  courses,
  showConnector,
  index,
  direction,
}: TimelineEntryProps) => (
  <motion.div
    className="relative flex gap-4 sm:gap-6 mb-12 sm:mb-16 last:mb-0"
    initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Timeline icon column */}
    <div className="relative flex flex-col items-center flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-[rgb(var(--bg-card))] border-2 border-[rgb(var(--accent-primary))] flex items-center justify-center z-10">
        <Icon className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
      </div>
      {showConnector && (
        <div className="w-0.5 h-full bg-[rgb(var(--border))] absolute top-10" />
      )}
    </div>

    {/* Content — date on top (mobile), then title block */}
    <div className="flex-1 min-w-0 pb-4">
      <span className="block text-[rgb(var(--text-muted))] text-xs sm:text-sm mb-2">
        {period}
      </span>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[rgb(var(--accent-primary))] mb-1 leading-tight">
        {title}
      </h3>
      <p className="text-[rgb(var(--text-secondary))] text-sm mb-2">
        {location}
      </p>
      <p className="font-semibold text-[rgb(var(--text-primary))] text-sm sm:text-base">
        {subtitle}
      </p>
      {courses && (
        <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed mt-3">
          • {courses.join(" • ")}
        </p>
      )}
    </div>
  </motion.div>
);

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 relative px-6 sm:px-8">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20 md:mb-32">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-[rgb(var(--accent-primary))] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-3 sm:mb-4">
              The Journey
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--text-primary))] leading-tight">
              Education
              <br />
              <span className="text-[rgb(var(--accent-primary))]">&</span> Experience
            </h2>
          </div>
          <p className="text-[rgb(var(--text-secondary))] max-w-md text-base sm:text-lg leading-relaxed">
            A chronological exploration of my professional and academic journey through the digital landscape.
          </p>
        </motion.div>
      </div>

      {/* Two column timeline */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Education */}
          <div className="relative">
            <h3 className="lg:hidden text-xs font-bold uppercase tracking-widest text-[rgb(var(--accent-primary))] mb-6">
              Education
            </h3>
            {educationData.map((item, index) => (
              <TimelineEntry
                key={index}
                period={item.period}
                icon={GraduationCap}
                title={item.organization}
                location={item.location}
                subtitle={item.degree}
                courses={item.courses}
                showConnector={index < educationData.length - 1}
                index={index}
                direction="left"
              />
            ))}
          </div>

          {/* Experience */}
          <div className="relative">
            <h3 className="lg:hidden text-xs font-bold uppercase tracking-widest text-[rgb(var(--accent-primary))] mb-6">
              Experience
            </h3>
            {experienceData.map((item, index) => (
              <TimelineEntry
                key={index}
                period={item.period}
                icon={Briefcase}
                title={item.company}
                location={item.location}
                subtitle={item.role}
                showConnector={index < experienceData.length - 1}
                index={index}
                direction="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;