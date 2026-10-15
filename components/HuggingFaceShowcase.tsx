'use client';
import { motion } from 'framer-motion';
import { HUGGINGFACE_PROJECTS } from '@/data/huggingface';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function HuggingFaceShowcase() {
  return (
    <section id="ai-demos" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-500 text-sm font-bold uppercase tracking-widest">Interactive Models</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Hugging Face AI Spaces & Live Demos</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Interactive clinical machine learning web spaces engineered for diagnostic risk prediction.
          </p>
        </div>

        <div className="space-y-16">
          {HUGGINGFACE_PROJECTS.map((hf, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-500 uppercase tracking-wide mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Clinical AI Model Demo</span>
                  </div>
                  <h3 className="text-2xl font-bold">{hf.title}</h3>
                </div>
                <a
                  href={hf.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold hover:text-cyan-400 transition-colors w-fit"
                >
                  <span>Open Fullscreen Space</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{hf.description}</p>

              {/* Embed Iframe Responsive Container */}
              <div className="w-full h-[500px] rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 bg-black/10">
                <iframe
                  src={hf.embedUrl}
                  className="w-full h-full border-none"
                  title={hf.title}
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {hf.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}