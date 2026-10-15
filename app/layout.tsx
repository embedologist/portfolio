import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Tushar Patil | Technology & Product Leader | Cloud & Edge AI Systems Architect',
  description: '15+ Years Experience as CTO and Lead Device Engineer. Strong expertise in Edge AI, on-device SLMs/LLMs (Google LiteRT), TinyML, biosensors, and regulated medical devices.',
  keywords: ['Tushar Patil', 'Edge AI', 'LiteRT', 'Small Language Models', 'SLM', 'TinyML', 'CTO', 'Wearable Devices', 'Medical Devices', 'Digital Therapeutics', 'WIPO Patent'],
  openGraph: {
    title: 'Tushar Patil | Technology & Product Leader | Cloud & Edge AI Systems Architect',
    description: 'Executive portfolio featuring Edge AI platforms, on-device SLMs, wearable diagnostic devices, and regulated healthcare innovations.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}