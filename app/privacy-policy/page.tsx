import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, 
  ShieldCheck, 
  Calendar, 
  Mail, 
  Lock, 
  FileText, 
  AlertCircle, 
  ExternalLink, 
  Smartphone, 
  CheckCircle2, 
  Trash2, 
  HelpCircle,
  Globe,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Embedologist Lab',
  description: 'Privacy Policy for mobile applications and services published by Embedologist Lab on Google Play.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  const sections = [
    { id: 'scope', label: '1. Scope' },
    { id: 'info-collected', label: '2. Info We Collect' },
    { id: 'purpose', label: '3. Purpose & Legal Basis' },
    { id: 'third-party', label: '4. Third-Party Services' },
    { id: 'data-deletion', label: '5. Data Deletion' },
    { id: 'children', label: '6. Children’s Privacy' },
    { id: 'security', label: '7. Security' },
    { id: 'changes', label: '8. Changes' },
    { id: 'contact', label: '9. Contact' },
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
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wider text-slate-900 dark:text-white uppercase">
                  Embedologist Lab
                </span>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:block">
                  Official Google Play Developer Privacy Document
                </p>
              </div>
            </div>
          </div>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Google Play Policy Compliant</span>
            <span className="sm:hidden">Compliant</span>
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Document Hero */}
        <section className="space-y-6 border-b border-slate-200 dark:border-slate-800/80 pb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-xs font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>LEGAL DOCUMENTATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
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
              <strong>Embedologist Lab</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates mobile applications distributed via the Google Play Store (collectively referred to as the &ldquo;Applications&rdquo; or &ldquo;Apps&rdquo;).
            </p>
            <p>
              This Privacy Policy applies to all applications, tools, and services provided by Embedologist Lab and governs our data collection, processing, and disclosure practices in strict accordance with the <strong>Google Play Developer Distribution Agreement</strong>, <strong>Google Play User Data Policies</strong>, and applicable data privacy regulations.
            </p>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              By downloading, installing, or using any application published by Embedologist Lab, you agree to the collection and use of information in accordance with this policy.
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

        {/* Section 1 */}
        <section id="scope" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">01.</span>
            <span>Scope of This Policy</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              This Privacy Policy covers all applications published under the developer identity <strong>Embedologist Lab</strong> on Google Play. Specific features or permissions requested by individual applications may differ depending on the core function of that particular app.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="info-collected" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">02.</span>
            <span>Information We Collect</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We only collect data necessary to provide and enhance our applications. The categories of information collected include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category A */}
            <div className="glass-card p-6 rounded-2xl space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-cyan-500/10 text-cyan-500 uppercase tracking-wide">
                  Category A
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Information You Voluntarily Provide
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 pt-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    <span><strong>User Accounts:</strong> If an application offers account registration, we may collect your name, username, and email address.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    <span><strong>Support Inquiries:</strong> Feedback, bug reports, and messages sent directly to our support team.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 font-bold">•</span>
                    <span><strong>User-Generated Content:</strong> Any data, files, or media you explicitly create or upload within the applications.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category B */}
            <div className="glass-card p-6 rounded-2xl space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-sky-500/10 text-sky-500 uppercase tracking-wide">
                  Category B
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Data Collected Automatically
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 pt-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span><strong>Device Identifiers & Technical Info:</strong> Device model, operating system build version, network carrier, hardware specifications, and non-resettable or resettable identifiers (e.g., Google Advertising ID).</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span><strong>Usage & Analytics:</strong> Session duration, screen views, feature interactions, and navigation patterns within the application.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-sky-500 font-bold">•</span>
                    <span><strong>Crash & Diagnostics:</strong> System error logs, stack traces, and latency diagnostics to maintain software reliability.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Category C */}
            <div className="glass-card p-6 rounded-2xl space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/10 text-emerald-500 uppercase tracking-wide">
                  Category C
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Runtime Permissions & Hardware
                </h3>
                <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-2 pt-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Storage / Photos / Media:</strong> To export, import, or save files generated by the application.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Camera:</strong> To capture images, scan visual markers, or process real-time inputs.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Bluetooth / Nearby Devices:</strong> To communicate with external hardware modules, embedded boards, or peripheral systems.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span><strong>Location (Coarse/Fine):</strong> Only requested when technically necessary for device scanning (such as BLE discovery under certain Android versions) or core utilities.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Runtime Permission Notice */}
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start space-x-3">
            <Smartphone className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
            <p>
              <strong>Device Permission Control:</strong> You can grant or revoke these permissions at any time via your device’s system settings (<code>Settings &gt; Apps &gt; [App Name] &gt; Permissions</code>).
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="purpose" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">03.</span>
            <span>Purpose and Legal Basis for Processing</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Embedologist Lab processes collected data strictly for legitimate operational purposes:
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                <span>Delivering the primary features and functionality of the respective application.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                <span>Monitoring, detecting, and fixing application crashes, latency issues, and software regressions.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                <span>Authenticating user accounts and protecting against unauthorized access or fraud.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                <span>Responding to user feedback and customer support requests.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                <span>Complying with applicable legal obligations and enforcing our Terms of Service.</span>
              </li>
            </ul>
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-semibold text-xs sm:text-sm">
              We do not sell, rent, or trade your personal data to third-party data brokers.
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="third-party" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">04.</span>
            <span>Third-Party Services and SDK Disclosures</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Our applications may integrate standard third-party libraries and SDKs to support analytics, infrastructure, or device connectivity. These providers receive information only as necessary to perform their respective services:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Google Play Services</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Fundamental Android OS services, licensing verification, and core updates.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Google Play Billing</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Handles in-app purchases and subscriptions securely. We do not store or process your credit card or financial credentials directly.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Firebase (Crashlytics & Analytics)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Collects anonymized crash logs and aggregated usage metrics to help us stabilize performance.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Ad Networks (e.g., Google AdMob)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">If an application displays ads, these networks may collect anonymous identifiers to serve contextual or personalized advertisements.</p>
              </div>
            </div>
            <p className="pt-2 text-xs sm:text-sm">
              Each third-party service processes information under its respective privacy terms:
            </p>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>Google Privacy Policy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Section 5 */}
        <section id="data-deletion" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">05.</span>
            <span>Data Retention and Deletion (Google Play Compliance)</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              We retain personal information only for as long as necessary to fulfill the operational purposes described in this policy, unless a longer retention period is mandated by law.
            </p>

            <div className="p-5 rounded-2xl bg-slate-200/60 dark:bg-navy-900 border border-slate-300/60 dark:border-slate-700/60 space-y-3">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-slate-100 font-bold text-base">
                <Trash2 className="w-5 h-5 text-rose-500" />
                <h3>How to Request Account and Data Deletion</h3>
              </div>
              <p className="text-xs sm:text-sm">
                In full compliance with Google Play&apos;s User Data deletion requirements:
              </p>
              <ul className="text-xs sm:text-sm space-y-2 pt-1 text-slate-600 dark:text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Email Request:</strong> You can request the permanent deletion of your account and all associated personal data by sending an email to <a href="mailto:embedologist@gmail.com?subject=Data%20Deletion%20Request" className="text-cyan-500 hover:underline font-mono font-bold">embedologist@gmail.com</a> with the subject line: <code>&quot;Data Deletion Request&quot;</code>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Details Needed:</strong> Include the name of the specific application and your registered email or user ID.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span><strong>Execution Timeline:</strong> Upon identity verification, all personal identifiers and user data associated with your profile will be permanently purged from our servers within <strong>30 days</strong>, except for records required to be retained by statutory or tax laws.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="children" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">06.</span>
            <span>Children’s Privacy (COPPA & GDPR-K Compliance)</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Our general-purpose applications are not targeted at or designed for children under the age of 13 (or under 16 in the European Union). We do not knowingly collect personal identifiable information from children.
            </p>
            <p>
              If an application published by Embedologist Lab is specifically intended for families or children, it complies with the Google Play Families Policy, does not use non-certified ad SDKs, and does not collect persistent identifiers without parental consent.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 text-xs sm:text-sm">
              If you believe a child has provided us with personal information without parental consent, please contact us immediately at <a href="mailto:embedologist@gmail.com" className="font-semibold underline">embedologist@gmail.com</a>, and we will delete the data promptly.
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="security" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">07.</span>
            <span>Security Measures</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
              <p>
                We maintain industry-standard physical, electronic, and procedural safeguards (including TLS/HTTPS encryption in transit) to protect your information against unauthorized access, loss, misuse, or alteration. However, no electronic transmission over the internet or wireless network is 100% secure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section id="changes" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">08.</span>
            <span>Changes to This Privacy Policy</span>
          </h2>
          <div className="glass-card p-6 rounded-2xl space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our applications or evolving legal and Google Play policy standards. Any updates will be posted directly to this URL with a revised &ldquo;Last Updated&rdquo; date. We encourage users to review this page regularly.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="contact" className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center space-x-3">
            <span className="text-cyan-500 font-mono text-lg">09.</span>
            <span>Contact Information</span>
          </h2>
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              If you have questions, feedback, or requests regarding this Privacy Policy, please contact us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40 space-y-1">
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Developer Name</p>
                <p className="font-semibold text-slate-900 dark:text-slate-100">Embedologist Lab</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-navy-800/60 border border-slate-300/40 dark:border-slate-700/40 space-y-1">
                <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400">Jurisdiction</p>
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
            <span className="font-semibold text-slate-700 dark:text-slate-300">Privacy Policy</span>
            <span>•</span>
            <Link href="/terms-of-service/" className="hover:text-cyan-500 transition-colors">
              Terms of Service
            </Link>
          </div>
          <p>© 2026 Embedologist Lab. All rights reserved.</p>
          <p>Published in accordance with Google Play Developer Policies.</p>
        </div>
      </footer>
    </div>
  );
}
