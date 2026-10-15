'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, Linkedin, Github, Globe, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center border-t border-slate-200 dark:border-slate-800/80 mt-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 max-w-2xl mx-auto mb-12"
      >
        <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">Get In Touch</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
          Let’s Build the Next Edge AI Breakthrough
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Open to executive leadership roles, advisory, and technical consulting across Edge AI systems, intelligent medical devices, on-device SLMs, and digital therapeutics.
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        <a
          href={`mailto:${PORTFOLIO_DATA.email}`}
          className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500 transition-all"
        >
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</p>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate max-w-full">
            {PORTFOLIO_DATA.email}
          </p>
        </a>

        <a
          href={`tel:${PORTFOLIO_DATA.phone.replace(/\s+/g, '')}`}
          className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500 transition-all"
        >
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</p>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
            {PORTFOLIO_DATA.phone}
          </p>
        </a>

        <a
          href={PORTFOLIO_DATA.website}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center space-y-2 group hover:border-cyan-500 transition-all"
        >
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
            <Globe className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Website</p>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
            embedologist.in
          </p>
        </a>

        <div className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center space-y-2">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
            <MapPin className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</p>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
            {PORTFOLIO_DATA.location}
          </p>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={`mailto:${PORTFOLIO_DATA.email}`}
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
        >
          <Mail className="w-4 h-4" />
          <span>Send Direct Email</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <div className="flex gap-3">
          <a
            href={PORTFOLIO_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-4 glass-card rounded-xl text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-500 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={PORTFOLIO_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-4 glass-card rounded-xl text-slate-700 dark:text-slate-200 hover:text-cyan-500 hover:border-cyan-500 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}