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
    // courses: [
    //   "Application Engineering & Development",
    //   "Web Design and UI Development",
    //   "Program Structures & Algorithms",
    //   "Design Patterns",
    //   "Network Structures and Cloud Computing",
    // ],
  },
  {
    organization: "University of Mumbai",
    location: "Mumbai, India",
    degree: "Bachelor of Engineering in Information Technology",
    period: "August'16 - May'20",
    // courses: [
    //   "Operating Systems",
    //   "Database Management & Database Design",
    //   "Computer Networks",
    // ],
  },
];

const experienceData: ExperienceItem[] = [
  {
    company: "Crewasis.ai",
    location: "New York City,NY, USA",
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

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 relative px-6 sm:px-8">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="text-[rgb(var(--accent-primary))] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              The Journey
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(var(--text-primary))] leading-tight">
              Education
              <br />
              <span className="text-[rgb(var(--accent-primary))]">&</span> Experience
            </h2>
          </div>
          <p className="text-[rgb(var(--text-secondary))] max-w-md text-lg leading-relaxed">
            A chronological exploration of my professional and academic journey through the digital landscape.
          </p>
        </motion.div>
      </div>

      {/* Two column timeline */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Education Timeline */}
          <div className="relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6 mb-16 last:mb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Date on left */}
                <div className="w-32 flex-shrink-0 text-left pt-1">
                  <span className="text-[rgb(var(--text-muted))] text-sm">
                    {item.period}
                  </span>
                </div>

                {/* Timeline icon */}
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--bg-card))] border-2 border-[rgb(var(--accent-primary))] flex items-center justify-center z-10">
                    <GraduationCap className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                  </div>
                  {index < educationData.length - 1 && (
                    <div className="w-0.5 h-full bg-[rgb(var(--border))] absolute top-10" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--accent-primary))] mb-1">
                    {item.organization}
                  </h3>
                  <p className="text-[rgb(var(--text-secondary))] text-sm mb-2">
                    {item.location}
                  </p>
                  <p className="font-semibold text-[rgb(var(--text-primary))] mb-3">
                    {item.degree}
                  </p>
                  {item.courses && (
                    <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed">
                      • {item.courses.join(" • ")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex gap-6 mb-16 last:mb-0"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Date on left */}
                <div className="w-32 flex-shrink-0 text-left pt-1">
                  <span className="text-[rgb(var(--text-muted))] text-sm">
                    {item.period}
                  </span>
                </div>

                {/* Timeline icon */}
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--bg-card))] border-2 border-[rgb(var(--accent-primary))] flex items-center justify-center z-10">
                    <Briefcase className="w-5 h-5 text-[rgb(var(--accent-primary))]" />
                  </div>
                  {index < experienceData.length - 1 && (
                    <div className="w-0.5 h-full bg-[rgb(var(--border))] absolute top-10" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[rgb(var(--accent-primary))] mb-1">
                    {item.company}
                  </h3>
                  <p className="text-[rgb(var(--text-secondary))] text-sm mb-2">
                    {item.location}
                  </p>
                  <p className="font-semibold text-[rgb(var(--text-primary))]">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;