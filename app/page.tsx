import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreExpertise from '@/components/CoreExpertise';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TechnicalSkills from '@/components/TechnicalSkills';
import EducationCertifications from '@/components/EducationCertifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 text-slate-900 dark:bg-navy-950 dark:text-slate-100 transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <CoreExpertise />
      <FeaturedProjects />
      <ExperienceTimeline />
      <TechnicalSkills />
      <EducationCertifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}