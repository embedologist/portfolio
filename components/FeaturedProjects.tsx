'use client';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { Layers, Clock, TrendingUp } from 'lucide-react';

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-slate-100/50 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-500 text-sm font-bold uppercase tracking-widest">Key Deliverables</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Featured Key Product Initiatives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-500">
                    {proj.duration} Duration
                  </span>
                  <Layers className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{proj.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{proj.description}</p>

                <ul className="space-y-2 pt-2">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start space-x-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Impact: {proj.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
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