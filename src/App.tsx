import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditModal } from './components/EditModal';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('alisha_malik_portfolio_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore JSON parse or storage errors
    }
    return initialPortfolioData;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem('alisha_malik_portfolio_v1', JSON.stringify(newData));
    } catch {
      // ignore storage errors
    }
  };

  const handleResetData = () => {
    if (window.confirm('Reset all details to the default verified portfolio information?')) {
      setData(initialPortfolioData);
      try {
        localStorage.removeItem('alisha_malik_portfolio_v1');
      } catch {
        // ignore
      }
    }
  };

  // Keyboard shortcut: Press Escape to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
        setIsEditModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/25 selection:text-sky-200">
      {/* Navigation */}
      <Navbar
        data={data}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenEdit={() => setIsEditModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero
          data={data}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenEdit={() => setIsEditModalOpen(true)}
        />

        {/* 2. About Me */}
        <About
          data={data}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 3. Education */}
        <Education
          data={data}
          onOpenEdit={() => setIsEditModalOpen(true)}
        />

        {/* 4. Skills */}
        <Skills data={data} />

        {/* 5. Projects */}
        <Projects
          data={data}
          onOpenEdit={() => setIsEditModalOpen(true)}
        />

        {/* Work Experience & Extracurriculars */}
        <Experience data={data} />

        {/* 8. Resume Section */}
        <ResumeSection
          data={data}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenEdit={() => setIsEditModalOpen(true)}
        />

        {/* 9. Contact */}
        <Contact data={data} />
      </main>

      {/* Footer */}
      <Footer data={data} />

      {/* Full Resume & PDF Modal */}
      <ResumeModal
        data={data}
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onOpenEdit={() => setIsEditModalOpen(true)}
      />

      {/* Live Customization Drawer / Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
}
