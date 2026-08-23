import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
          <p className="font-medium text-slate-600 dark:text-slate-400">
            Design and developed by{' '}
            <a
              href="https://github.com/embedologist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 font-semibold transition-colors"
            >
              Embedologist Lab
            </a>
          </p>
        </div>

        <div className="flex items-center space-x-5 text-slate-600 dark:text-slate-400">
          <a
            href={PORTFOLIO_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            aria-label="Email Contact"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}