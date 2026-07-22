'use client';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Demos', href: '#ai-demos' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">
          TUSHAR PATIL
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              {item.label}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all shadow-md hover:shadow-cyan-500/20"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-700 dark:text-slate-200">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t mt-3 py-6 px-8 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href={PORTFOLIO_DATA.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-cyan-500 text-white font-semibold"
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}