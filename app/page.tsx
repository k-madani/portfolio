import Hero from '@/app/components/Hero';
import Timeline from '@/app/components/Timeline';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Timeline />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}