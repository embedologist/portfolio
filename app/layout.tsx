import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Tushar Patil | Executive AI & Health-Tech Technology Leader',
  description: '15+ Years Experience as CTO, AI Healthcare Engineer, and Medical Device Product Leader. 0-to-1 Product Scaling, Wearable Diagnostics & Embedded Architecture.',
  keywords: ['CTO', 'AI Healthcare', 'Medical Devices', 'Embedded Systems', 'Digital Therapeutics', 'Tushar Patil'],
  openGraph: {
    title: 'Tushar Patil | CTO & AI Health-Tech Product Leader',
    description: 'Executive portfolio of Tushar Patil featuring AI platforms, wearable devices, and healthcare innovation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}