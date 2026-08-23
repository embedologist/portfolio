'use client';
import { SKILL_CATEGORIES } from '@/data/skills';
import { motion } from 'framer-motion';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-widest">Technical Competencies</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Skills & Domain Mastery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl space-y-6"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-200/80 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700/50 hover:border-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}