'use client';
import { motion } from 'framer-motion';
import { Activity, Cpu, Cloud, ShieldAlert, LineChart, CpuIcon } from 'lucide-react';

const EXPERTISE_DOMAINS = [
  { icon: Activity, title: "Medical Devices & Wearables", desc: "ECG, SpO2, Bioimpedance, CGM sensor architecture, ergonomic form factors, and BLE pipelines." },
  { icon: Cpu, title: "AI/ML Product Development", desc: "Vertex AI, computer vision pose tracking (32 body joints), activity classification models, and predictive analytics." },
  { icon: Cloud, title: "Cloud & IoT Platforms", desc: "AWS Certified architectures, real-time bi-directional telemetry, and HIPAA-compliant data pipelines." },
  { icon: ShieldAlert, title: "Regulatory & Validation", desc: "EMC testing, Verification & Validation (V&V), design controls, HIPAA, and medical-grade device compliance." },
  { icon: LineChart, title: "0-to-1 Product Strategy", desc: "Transforming raw R&D ideas into commercial products, budget leadership, BOM streamlining, and COGS reduction." },
  { icon: CpuIcon, title: "Embedded & BioMEMS", desc: "Embedded Linux, bio-signal conditioning, microfluidics hematology analyzers, and firmware calibration." }
];

export default function CoreExpertise() {
  return (
    <section id="expertise" className="py-20 bg-slate-100/50 dark:bg-navy-900/40 border-y border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-500 text-sm font-bold uppercase tracking-widest">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Core Engineering & Executive Pillars</h2>
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
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:border-cyan-500 transition-all group"
              >
                <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-500 w-fit group-hover:bg-cyan-500 group-hover:text-white transition-colors mb-6">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{domain.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{domain.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}