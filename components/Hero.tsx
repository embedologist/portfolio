'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowRight, FileText, ShieldCheck, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Animated Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>15+ Years Tech & Product Leadership</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Architecting <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              AI & Health-Tech
            </span> <br />
            Platforms from 0 to 1
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-light">
            {PORTFOLIO_DATA.subTitle}
          </p>

          <p className="text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Former CTO and Lead Engineer specializing in medical devices, embedded hardware, cloud AI architecture, and digital therapeutics. Patent holder in AI activity classification.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Initiate Contact</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={PORTFOLIO_DATA.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl glass-card font-semibold text-slate-800 dark:text-slate-200 hover:border-cyan-500 transition-all"
            >
              <FileText className="w-5 h-5 text-cyan-500" />
              <span>Executive Resume</span>
            </a>
          </div>

          {/* Core Metrics Quick-Grid */}
          <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800/80">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-500">10 Yrs</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">CTO Leadership</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">30%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Engagement Boost</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">WIPO</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Patent Holder</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column Visual / Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          {/* Increased size from w-80 to w-96 and lg:w-[420px] */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl p-2 glass-panel border border-cyan-500/30 shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <img
                src={PORTFOLIO_DATA.profileImage}
                alt={PORTFOLIO_DATA.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xl font-bold">{PORTFOLIO_DATA.name}</p>
                <p className="text-sm text-cyan-400 font-medium">{PORTFOLIO_DATA.location}</p>
              </div>
            </div>

            {/* Floating Badge - Moved to -right-6 to prevent overlapping the text */}
            <div className="absolute -bottom-6 -right-6 glass-panel px-4 py-3 rounded-2xl flex items-center space-x-3 border border-emerald-500/40">
              <Activity className="w-6 h-6 text-emerald-400 animate-pulse" />
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-100">AI Medical Devices</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Production Scaled</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}