import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowLeft,
  FileCheck, 
  Calendar, 
  Mail, 
  ShieldAlert, 
  FileText, 
  Scale, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  CreditCard, 
  AlertTriangle, 
  Gavel, 
  RefreshCw,
  Globe,
  MapPin,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Embedologist Lab',
  description: 'Terms of Service governing access and use of mobile applications published by Embedologist Lab on the Google Play Store.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
  const sections = [
    { id: 'license', label: '1. License Grant' },
    { id: 'accounts', label: '2. User Accounts' },
    { id: 'acceptable-use', label: '3. Acceptable Use' },
    { id: 'intellectual-property', label: '4. IP Rights' },
    { id: 'billing', label: '5. In-App Purchases' },
    { id: 'termination', label: '6. Termination' },
    { id: 'disclaimer', label: '7. Disclaimer' },
    { id: 'liability', label: '8. Liability' },
    { id: 'governing-law', label: '9. Governing Law' },
    { id: 'modifications', label: '10. Modifications' },
    { id: 'contact', label: '11. Contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Header / Branding Bar */}
      <header className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-navy-900/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-cyan-500 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Site</span>
            </Link>
            <div className="w-px h-5 bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-500">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wider text-slate-900 dark:text-white uppercase">
                  Embedologist Lab
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:block">
                  Official Google Play Developer Legal Agreement
                </p>
              </div>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0">
            <FileCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Binding Agreement</span>
            <span className="sm:hidden">Binding</span>
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Document Hero */}
        <section className="space-y-6 border-b border-slate-200 dark:border-slate-800/80 pb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL TERMS OF SERVICE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center space-x-1.5 bg-slate-200/60 dark:bg-navy-800 px-3 py-1.5 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
              <Calendar className="w-4 h-4 text-cyan-500" />
              <span><strong>Effective Date:</strong> October 15, 2026</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-200/60 dark:bg-navy-800 px-3 py-1.5 rounded-lg border border-slate-300/40 dark:border-slate-700/40">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span><strong>Last Updated:</strong> October 15, 2026</span>
            </span>
          </div>

          <div className="glass-card p-6 rounded-2xl text-slate-700 dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you&rdquo;) and <strong>Embedologist Lab</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), governing your access to and use of all mobile applications and digital services published under the Embedologist Lab developer account on the Google Play Store (collectively, the &ldquo;Applications&rdquo;).
            </p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              By downloading, installing, or accessing any of our Applications, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must immediately uninstall and discontinue use of the Applications.
            </p>
          </div>

          {/* Quick Jump Pills */}
          <div className="space-y-2 pt-2">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Table of Contents:
            </p>
            <div className="flex flex-wrap gap-2">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-200/70 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/50 border border-slate-300/50 dark:border-slate-700/50 transition-all font-medium"
                >
                  {sec.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: License Grant */}
        <section id="license" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">01.</span>
            <span>License Grant</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>
              Subject to your strict compliance with these Terms, Embedologist Lab grants you a personal, non-exclusive, non-transferable, revocable, and limited license to download, install, and execute the Applications on compatible Android hardware that you own or control, solely for your personal, non-commercial, or authorized internal use.
            </p>
          </div>
        </section>

        {/* Section 2: User Accounts & Responsibilities */}
        <section id="accounts" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">02.</span>
            <span>User Accounts & Responsibilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Account Accuracy</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                If an Application requires creating an account, you agree to provide truthful, accurate, and current information.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Credential Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You are solely responsible for safeguarding the credentials associated with your account and for all actions that occur under your account.
              </p>
            </div>
            <div className="glass-card p-6 rounded-2xl space-y-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">Breach Notification</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                You must notify us immediately at <a href="mailto:embedologist@gmail.com" className="text-cyan-500 font-semibold underline">embedologist@gmail.com</a> if you suspect any unauthorized access or security breach.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Acceptable Use and Restrictions */}
        <section id="acceptable-use" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">03.</span>
            <span>Acceptable Use and Restrictions</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              You agree that you will not, directly or indirectly:
            </p>
            <ul className="space-y-3">
              {[
                'Reverse engineer, decompile, disassemble, decrypt, or attempt to derive the source code or underlying algorithms of any Application.',
                'Modify, adapt, translate, or create derivative works based upon the Applications.',
                'Rent, lease, lend, sell, sublicense, distribute, or commercially exploit the Applications without explicit written consent.',
                'Circumvent, disable, or tamper with any digital rights management, security safeguards, or feature-gating mechanisms.',
                'Transmit malicious code, viruses, worms, malware, or destructive payloads through or within the Applications.',
                'Use the Applications for any unlawful, fraudulent, defamatory, or harmful purposes, or in violation of Google Play Developer Distribution policies.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4: Intellectual Property Rights */}
        <section id="intellectual-property" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">04.</span>
            <span>Intellectual Property Rights</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
              <p>
                All titles, ownership rights, trademarks, copyrights, trade secrets, algorithms, UI designs, graphics, and intellectual property embodied within the Applications belong exclusively to <strong>Embedologist Lab</strong> and its licensors. These Terms do not grant you any ownership rights or title in or to our Applications or brand assets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: In-App Purchases, Billing, and Subscriptions */}
        <section id="billing" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">05.</span>
            <span>In-App Purchases, Billing, and Subscriptions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2 text-cyan-500 font-bold text-sm">
                <CreditCard className="w-4 h-4" />
                <h3>Google Play Processing</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Any in-app purchases, features, or subscriptions made available within our Applications are billed exclusively through Google Play In-App Billing and are subject to Google Play’s Terms of Service.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2 text-sky-500 font-bold text-sm">
                <RefreshCw className="w-4 h-4" />
                <h3>Subscriptions & Renewals</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Recurring subscriptions automatically renew unless canceled through your Google Play Store account settings at least 24 hours prior to the conclusion of the active subscription period.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <h3>Refunds</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                All refund requests are governed by Google Play’s standard refund guidelines and must be submitted through the Google Play Store platform.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Termination of Access */}
        <section id="termination" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">06.</span>
            <span>Termination of Access</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>
              We reserve the right, without prior notice and at our sole discretion, to suspend or terminate your access to our Applications or delete your account if you breach any provision of these Terms or engage in conduct that compromises the integrity or security of our services.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-rose-600 dark:text-rose-400">
              Upon termination, all licenses granted under these Terms immediately cease, and you must uninstall the Applications from your devices.
            </p>
          </div>
        </section>

        {/* Section 7: Disclaimer of Warranties */}
        <section id="disclaimer" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">07.</span>
            <span>Disclaimer of Warranties</span>
          </h2>
          <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-slate-700 dark:text-slate-300 space-y-3 text-xs sm:text-sm leading-relaxed">
            <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <h3>Provided on an &quot;AS IS&quot; &amp; &quot;AS AVAILABLE&quot; Basis</h3>
            </div>
            <p>
              To the maximum extent permitted by applicable law, all Applications provided by Embedologist Lab are provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express, statutory, or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or continuous uptime.
            </p>
            <p>
              We do not guarantee that the Applications will function uninterrupted, be completely error-free, or meet your hardware-specific requirements under all conditions.
            </p>
          </div>
        </section>

        {/* Section 8: Limitation of Liability */}
        <section id="liability" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">08.</span>
            <span>Limitation of Liability</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <div className="flex items-start space-x-3">
              <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <p>
                To the fullest extent permissible by applicable law, in no event shall <strong>Embedologist Lab</strong>, its owners, affiliates, or licensors be held liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, data loss, business interruption, or hardware failure—resulting from or related to your use of, or inability to use, our Applications.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Governing Law and Jurisdiction */}
        <section id="governing-law" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">09.</span>
            <span>Governing Law and Jurisdiction</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <div className="flex items-start space-x-3">
              <Gavel className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
              <p>
                These Terms and any disputes arising out of or related to them shall be governed by and construed in accordance with the laws of <strong>Maharashtra, India</strong>, without regard to its conflict of law principles. Any legal action or dispute shall be subject to the exclusive jurisdiction of the courts located in <strong>Maharashtra, India</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 10: Modifications to Terms */}
        <section id="modifications" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">10.</span>
            <span>Modifications to Terms</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
            <p>
              Embedologist Lab reserves the right to amend or replace these Terms at any time. Changes become effective immediately upon being published to this page. Continued access or use of the Applications after revisions are posted indicates your acceptance of the updated Terms.
            </p>
          </div>
        </section>

        {/* Section 11: Contact Information */}
        <section id="contact" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">11.</span>
            <span>Contact Information</span>
          </h2>
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              For any questions, legal concerns, or general inquiries regarding these Terms of Service:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40 space-y-1">
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Developer / Publisher</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Embedologist Lab</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40 space-y-1">
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Jurisdiction &amp; Location</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Maharashtra, India</span>
                </p>
              </div>

              <a
                href="https://embedologist.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40 space-y-1 group hover:border-cyan-500 transition-colors"
              >
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Official Website</p>
                <p className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>embedologist.in</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
                </p>
              </a>

              <a
                href="mailto:embedologist@gmail.com"
                className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40 space-y-1 group hover:border-cyan-500 transition-colors"
              >
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Email Address</p>
                <p className="font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>embedologist@gmail.com</span>
                  <ExternalLink className="w-3 h-3 ml-auto opacity-70 group-hover:opacity-100" />
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 space-y-2">
          <div className="flex items-center justify-center space-x-4">
            <Link href="/privacy-policy/" className="hover:text-cyan-500 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Terms of Service</span>
          </div>
          <p>© 2026 Embedologist Lab. All rights reserved.</p>
          <p>Published in accordance with Google Play Developer Policies &amp; Indian Law.</p>
        </div>
      </footer>
    </div>
  );
}
