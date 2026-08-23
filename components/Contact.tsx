'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xvgpogzq';

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        const resData = await response.json().catch(() => null);
        setErrorMessage(
          resData?.errors?.[0]?.message || 
          'Unable to send message via form gateway. Please email directly.'
        );
        setFormStatus('error');
      }
    } catch {
      setErrorMessage('Network error occurred. Please reach out directly via email.');
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-bold uppercase tracking-widest">Connect</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Executive Inquiries & Partnerships</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl flex items-center space-x-5">
              <div className="p-4 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Email Direct</p>
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-lg font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {PORTFOLIO_DATA.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl flex items-center space-x-5">
              <div className="p-4 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Location</p>
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
                <Linkedin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
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

          {/* Interactive Serverless Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-400">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={formStatus === 'submitting'}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  disabled={formStatus === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                  placeholder="Executive Strategic Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-400">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  disabled={formStatus === 'submitting'}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-navy-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                  placeholder="Share details regarding your initiative or collaboration idea..."
                />
              </div>

              {/* Status Feedback Messages */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center space-x-3 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-between space-x-3 text-sm"
                >
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.email}?subject=Direct Portfolio Inquiry`}
                    className="underline text-rose-300 hover:text-white flex-shrink-0 font-medium ml-2"
                  >
                    Open Mail
                  </a>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-white font-bold text-base flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Direct Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}