'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { Layers, TrendingUp, ExternalLink, Cpu, Sparkles } from 'lucide-react';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { label: 'All Projects', count: PROJECTS.length, key: 'All' },
    { label: 'Edge AI & SLMs', key: 'Edge AI' },
    { label: 'Wearables & IoT', key: 'Wearable' },
    { label: 'Medical & Diagnostics', key: 'Diagnostic' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Edge AI') {
      return (
        proj.category?.includes('Edge AI') ||
        proj.technologies.some((t) =>
          t.toLowerCase().includes('edge') ||
          t.toLowerCase().includes('litert') ||
          t.toLowerCase().includes('slm') ||
          t.toLowerCase().includes('tinyml') ||
          t.toLowerCase().includes('vision')
        )
      );
    }
    if (activeFilter === 'Wearable') {
      return (
        proj.category?.toLowerCase().includes('wearable') ||
        proj.technologies.some((t) =>
          t.toLowerCase().includes('wear') ||
          t.toLowerCase().includes('ble') ||
          t.toLowerCase().includes('smartwatch') ||
          t.toLowerCase().includes('iot')
        )
      );
    }
    if (activeFilter === 'Diagnostic') {
      return (
        proj.category?.toLowerCase().includes('diagnostic') ||
        proj.category?.toLowerCase().includes('medical') ||
        proj.category?.toLowerCase().includes('regulatory') ||
        proj.title.toLowerCase().includes('diagnostic') ||
        proj.technologies.some((t) =>
          t.toLowerCase().includes('hematology') ||
          t.toLowerCase().includes('bioimpedance') ||
          t.toLowerCase().includes('samd') ||
          t.toLowerCase().includes('cogs') ||
          t.toLowerCase().includes('medical') ||
          t.toLowerCase().includes('ecg') ||
          t.toLowerCase().includes('cardio')
        )
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-slate-100/60 dark:bg-navy-900/40 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Engineering & Product Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Key Product & Edge AI Initiatives
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            From open-sourced on-device Small Language Models (SLMs) and TinyML wearables to regulated digital therapeutics and clinical diagnostic analyzers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-white/80 dark:bg-navy-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, index) => {
              const isEdgeAI = proj.badge?.includes('Edge AI') || proj.category?.includes('Edge AI');
              return (
                <motion.div
                  layout
                  key={proj.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`glass-card p-7 rounded-2xl flex flex-col justify-between relative group hover:border-cyan-500/60 transition-all ${
                    isEdgeAI ? 'ring-1 ring-cyan-500/20' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Duration & Badge */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                        {proj.duration}
                      </span>

                      {proj.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                          {isEdgeAI && <Cpu className="w-3 h-3" />}
                          {proj.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
                        {proj.title}
                      </h3>
                      {proj.category && (
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                          {proj.category}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start space-x-2">
                          <span className="text-cyan-500 font-bold shrink-0 mt-0.5">•</span>
                          <span className="leading-tight">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Impact & Tech Stack & Links */}
                  <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex items-start space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                      <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />
                      <span className="leading-tight">{proj.impact}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-200/80 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-300/40 dark:border-slate-700/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-500 hover:text-cyan-400 transition-colors pt-1"
                      >
                        <span>View Open-Source Model on Hugging Face</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}