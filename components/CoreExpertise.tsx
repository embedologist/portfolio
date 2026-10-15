'use client';
import { motion } from 'framer-motion';
import { Cpu, Eye, Activity, Cloud, ShieldCheck, Rocket } from 'lucide-react';

const EXPERTISE_DOMAINS = [
  {
    icon: Cpu,
    title: "Edge AI & On-Device SLMs",
    badge: "Core Specialization",
    desc: "Deployment of quantized Small Language Models (SLMs) and LLMs (<512MB RAM) on mobile and Wear OS chips using Google LiteRT and PyTorch with Android NNAPI acceleration."
  },
  {
    icon: Eye,
    title: "Computer Vision on the Edge",
    badge: "Real-Time Inference",
    desc: "Low-latency on-device computer vision, including 32 anatomical body joints pose-estimation for real-time physiotherapy form correction and interactive AI co-pilots."
  },
  {
    icon: Activity,
    title: "TinyML & Multimodal Biosensors",
    badge: "Patent Holder",
    desc: "Microcontroller TinyML for continuous PPG, ECG, SpO2, and CGM biosignal processing, 1D Conformer feature encoders, and WIPO-patented AI activity classification."
  },
  {
    icon: Cloud,
    title: "Cloud-Edge Hybrid Architectures",
    badge: "Scalable Systems",
    desc: "Bridging constrained edge environments with Google Vertex AI and AWS pipelines, high-throughput BLE/NFC data ingestion, and personalized digital health digital twins."
  },
  {
    icon: ShieldCheck,
    title: "Medical Devices & SaMD / SiMD",
    badge: "FDA & ISO Compliance",
    desc: "Full lifecycle engineering in regulated environments: FDA design controls, ISO 13485, IEC 60601, EMC compliance, and verification & validation (V&V) protocols."
  },
  {
    icon: Rocket,
    title: "0-to-1 Product Leadership",
    badge: "15+ Years Tech Leadership",
    desc: "Transforming cutting-edge AI capability into mass-market hardware. Proven CTO track record scaling startups, BOM streamlining, COGS reduction, and global CDMO partnerships."
  }
];

export default function CoreExpertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-100/50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-widest">Core Competencies</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Edge AI Systems & Technical Pillars
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            Deep technical leadership unifying on-device neural inference, embedded firmware, biomedical hardware, and cloud intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE_DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card p-8 rounded-2xl hover:border-cyan-500/70 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/80 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/50">
                      {domain.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}