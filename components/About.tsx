'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Cpu, ShieldCheck, Award, Zap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Cpu,
      title: "6 Years Edge LLM & SLM",
      desc: "Proven deployment of quantized Small Language Models on Wear OS and mobile under <340MB RAM."
    },
    {
      icon: Award,
      title: "WIPO Patent Holder",
      desc: "Patented activity classification machine learning algorithms from accelerometer and motion sensors."
    },
    {
      icon: ShieldCheck,
      title: "Regulated Medical Devices",
      desc: "Deep mastery of FDA design controls, ISO 13485, IEC 60601, and EMC testing for therapeutic systems."
    },
    {
      icon: Zap,
      title: "0-to-1 Product Velocity",
      desc: "Former CTO scaling connected health hardware from prototype to global mass production with tier-1 ODM/CDMOs."
    }
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left narrative */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-2">
            <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm tracking-wider uppercase font-semibold">Executive Profile</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Pioneering Edge AI & Intelligent Medical Hardware
            </h2>
          </div>
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            {PORTFOLIO_DATA.about}
          </p>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Throughout my career as Chief Technology Officer and Lead Capability Architect, I have architected and deployed solutions spanning the complete spectrum of hardware-software co-design: from custom biomedical analog front-ends and low-power BLE firmware, to on-device neural execution (Google LiteRT) and cloud-native digital twin platforms on Google Vertex AI.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
            <p className="flex items-center gap-2">▹ <span>Edge LLM & SLM (LiteRT & PyTorch)</span></p>
            <p className="flex items-center gap-2">▹ <span>Computer Vision (32 Joint Tracking)</span></p>
            <p className="flex items-center gap-2">▹ <span>TinyML & Multimodal Biosensing</span></p>
            <p className="flex items-center gap-2">▹ <span>FDA Design Controls & ISO 13485</span></p>
            <p className="flex items-center gap-2">▹ <span>Google Vertex AI & AWS Cloud</span></p>
            <p className="flex items-center gap-2">▹ <span>Global ODM/CDMO Manufacturing</span></p>
          </div>
        </motion.div>

        {/* Right Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:border-cyan-500/50 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}