import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
        <p>© {new Date().getFullYear()} Tushar Patil. All rights reserved.</p>
        <p>Designed for Executive Engineering & AI Leadership.</p>
      </div>
    </footer>
  );
}