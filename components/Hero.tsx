'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowRight, FileText, Cpu, Sparkles, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-bold tracking-wider">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>EDGE AI SYSTEMS ARCHITECT & PRODUCT LEADER</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.15] tracking-tight">
                Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400">Edge AI</span> & Health-Tech Platforms
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                {PORTFOLIO_DATA.subheadline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {PORTFOLIO_DATA.about}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all flex items-center space-x-2 shadow-lg shadow-cyan-500/25 hover:scale-[1.02]"
              >
                <span>Explore Edge AI Projects</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
              <a
                href={PORTFOLIO_DATA.resume}
                download="Tushar_Patil_AI_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-slate-200/80 dark:bg-navy-800 hover:bg-slate-300 dark:hover:bg-navy-700 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold transition-all flex items-center space-x-2"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Executive Resume</span>
              </a>
            </div>

            {/* Stats Row with Guaranteed Zero Overlap */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/80 mt-6">
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="min-w-0 space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold text-cyan-500 dark:text-cyan-400 tracking-tight whitespace-nowrap">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider sm:whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image Card with Anti-Overlap Spacing */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            <div className="relative w-full max-w-[310px] sm:max-w-[340px] rounded-3xl bg-slate-200/50 dark:bg-slate-900/40 p-2 border border-slate-300 dark:border-slate-800 shadow-2xl">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-800 group">
                <img 
                  src={PORTFOLIO_DATA.image} 
                  alt={PORTFOLIO_DATA.name}
                  className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Deep bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent pointer-events-none"></div>
                
                {/* Text overlay with pb-20 to guarantee clear distance above the bottom floating badge */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-20 z-10 flex flex-col gap-1 pointer-events-none">
                  <p className="text-2xl font-bold text-white drop-shadow-md leading-tight">{PORTFOLIO_DATA.name}</p>
                  <p className="text-cyan-400 text-sm font-semibold tracking-wide drop-shadow-sm">Edge AI Systems Architect</p>
                  <p className="text-slate-300 text-xs mt-0.5">{PORTFOLIO_DATA.location}</p>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 p-3 rounded-2xl shadow-xl shadow-cyan-500/10 flex items-center space-x-2.5 z-20">
                <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">Sub-512MB SLM</p>
                  <p className="text-[10px] text-cyan-400">LiteRT & Wear OS</p>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-4 -left-3 bg-slate-900/95 backdrop-blur-md border border-emerald-500/40 p-3 rounded-2xl shadow-xl shadow-emerald-500/10 flex items-center space-x-2.5 z-20">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-tight">WIPO Patent Holder</p>
                  <p className="text-[10px] text-emerald-400">AI Activity Classifier</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}