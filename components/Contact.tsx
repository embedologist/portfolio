'use client';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-500 text-sm font-bold uppercase tracking-widest">Connect</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Executive Inquiries & Partnerships</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Cards - Adjusted padding and spacing to preserve height */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl flex items-center space-x-5">
              <div className="p-4 bg-cyan-500/10 text-cyan-500 rounded-xl">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Email Direct</p>
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-lg font-bold hover:text-cyan-500 transition-colors">
                  {PORTFOLIO_DATA.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex items-center space-x-5">
              <div className="p-4 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Location</p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{PORTFOLIO_DATA.location}</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-5 rounded-2xl flex items-center justify-center space-x-2 font-bold hover:border-cyan-500 transition-all text-slate-800 dark:text-slate-200"
              >
                <Linkedin className="w-5 h-5 text-cyan-500" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-5 rounded-2xl flex items-center justify-center space-x-2 font-bold hover:border-cyan-500 transition-all text-slate-800 dark:text-slate-200"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Formspree Serverless Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl"
          >
            <form
              action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xvgpogzq'}`}
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-cyan-500"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-cyan-500"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-cyan-500"
                  placeholder="Executive Strategic Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-500">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-navy-950 border border-slate-300 dark:border-slate-800 focus:outline-none focus:border-cyan-500"
                  placeholder="Share details regarding your initiative or collaboration idea..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-white font-bold text-base flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>Send Direct Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}