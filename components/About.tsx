'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Cpu, Target, Award, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h2 className="text-3xl font-extrabold uppercase tracking-widest text-cyan-500 text-sm">
            Executive Summary
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight">
            Bridging High-Precision Hardware, AI Algorithms & Clinical Product Vision
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl space-y-4 border-l-4 border-l-cyan-500"
          >
            <div className="flex items-center space-x-3">
              <Cpu className="w-7 h-7 text-cyan-500" />
              <h3 className="text-xl font-bold">Product Leadership & 0-to-1 Scale</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {PORTFOLIO_DATA.summary} Proven track record taking wearable diagnostics from initial napkin design through CDMO selection in China and global mass production[cite: 1].
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl space-y-4 border-l-4 border-l-emerald-400"
          >
            <div className="flex items-center space-x-3">
              <Zap className="w-7 h-7 text-emerald-400" />
              <h3 className="text-xl font-bold">Multidisciplinary Convergence</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Uniquely positioned at the intersection of embedded firmware, sensor integration (ECG, SpO2, CGM), cloud analytics (Google Vertex AI, AWS), and regulatory compliance (EMC, HIPAA, V&V)[cite: 1].
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}