'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowRight, FileText, Shield, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-bold tracking-wider">
              <Shield className="w-4 h-4" />
              <span>15+ YEARS TECH & PRODUCT LEADERSHIP</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
                {PORTFOLIO_DATA.headline}
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light">
                {PORTFOLIO_DATA.subheadline}
              </p>

              <p className="text-base text-slate-400 max-w-xl leading-relaxed">
                {PORTFOLIO_DATA.about}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold transition-colors flex items-center space-x-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold transition-all flex items-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Executive Resume</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-800/50 mt-8">
              {PORTFOLIO_DATA.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-extrabold text-cyan-500 mb-1">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image Card */}
          {/* SURGICAL FIX: Changed to flex justify-end to prevent grid stretching */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:flex justify-end items-center w-full"
          >
            {/* SURGICAL FIX: Applied strict width (w-[360px]) so it cannot over-scale */}
            <div className="relative w-[360px] rounded-3xl overflow-hidden bg-slate-900/50 border border-slate-800 p-2 shadow-2xl">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-800 group">
                <img 
                  src={PORTFOLIO_DATA.image} 
                  alt={PORTFOLIO_DATA.name}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent pointer-events-none"></div>
                
                {/* SURGICAL FIX: Added pb-10 to push the text up */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 z-10 flex flex-col gap-1 pointer-events-none">
                  <p className="text-2xl font-bold text-white drop-shadow-lg">{PORTFOLIO_DATA.name}</p>
                  <p className="text-cyan-400 text-sm font-medium drop-shadow-md">{PORTFOLIO_DATA.location}</p>
                </div>
              </div>

              {/* SURGICAL FIX: Changed to -bottom-6 to push the badge down outside the image */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900/95 backdrop-blur-sm border border-slate-700 p-3 rounded-2xl shadow-2xl flex items-center space-x-3 z-20">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">AI Medical Devices</p>
                  <p className="text-xs text-slate-400 mt-0.5">Production Scaled</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}