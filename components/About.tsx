'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8">
            <p className="text-cyan-500 text-sm font-bold uppercase tracking-widest mb-2">Background</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">About Me</h2>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            {PORTFOLIO_DATA.about}
          </p>
        </motion.div>
      </div>
    </section>
  );
}