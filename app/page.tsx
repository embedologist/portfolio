import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import CoreExpertise from '@/components/CoreExpertise';
import TechnicalSkills from '@/components/TechnicalSkills';
import FeaturedProjects from '@/components/FeaturedProjects';
import HuggingFaceShowcase from '@/components/HuggingFaceShowcase';
import EducationCertifications from '@/components/EducationCertifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <ExperienceTimeline />
      <CoreExpertise />
      <TechnicalSkills />
      <FeaturedProjects />
      <HuggingFaceShowcase />
      <EducationCertifications />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}