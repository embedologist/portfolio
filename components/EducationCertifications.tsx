'use client';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS, PATENTS } from '@/data/education';
import { GraduationCap, Award, FileCode } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section className="py-20 bg-slate-100/50 dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Patents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl space-y-6 lg:col-span-3 border-l-4 border-l-cyan-500"
        >
          <div className="flex items-center space-x-3 text-cyan-500">
            <FileCode className="w-7 h-7" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Patents & Publications</h3>
          </div>
          {PATENTS.map((pat, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200">{pat.title}</h4>
              <p className="text-xs font-semibold text-cyan-500">{pat.number}</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{pat.summary}</p>
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl space-y-6 lg:col-span-2"
        >
          <div className="flex items-center space-x-3 text-emerald-400">
            <GraduationCap className="w-7 h-7" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Education</h3>
          </div>
          <div className="space-y-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="border-b border-slate-200 dark:border-slate-800 pb-4 last:border-none">
                <h4 className="text-lg font-bold">{edu.degree}</h4>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{edu.institution} ({edu.year})</p>
                <p className="text-xs text-cyan-500 mt-1 font-semibold">{edu.score}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl space-y-6"
        >
          <div className="flex items-center space-x-3 text-cyan-400">
            <Award className="w-7 h-7" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Certifications</h3>
          </div>
          <div className="space-y-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40">
                <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{cert.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}