import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AcademicsSection } from './components/AcademicsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyDrawer } from './components/CaseStudyDrawer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#EDEDEF] selection:bg-emerald-500/25 selection:text-emerald-400 font-sans relative">
      {/* Subtle Ambient Background Grain & Glow */}
      <div className="fixed inset-0 bg-grain pointer-events-none opacity-40 z-0" />

      {/* Top Persistent Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full pt-16 sm:pt-20">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <AboutSection />
        <TechStackSection />
        <ExperienceSection />
        <AcademicsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Slide-Over Case Study Drawer */}
      <CaseStudyDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
