'use client';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-widest">Leadership Journey</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Professional Experience</h2>
        </div>

        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Marker */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white dark:bg-navy-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md">
                <Briefcase className="w-4 h-4" />
              </div>

              <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <p className="text-lg font-semibold text-cyan-500">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}