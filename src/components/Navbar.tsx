import React, { useState, useEffect } from 'react';
import { FileText, Linkedin, Menu, X, Edit3 } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface NavbarProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onOpenEdit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ data, onOpenResume, onOpenEdit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg font-bold tracking-tight text-white hover:text-sky-400 transition-colors flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-semibold text-xs flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              AM
            </span>
            <span className="tracking-tight">{data.name}</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-sky-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenEdit}
              title="Edit Profile Information"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors text-xs flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-xs">Customize</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm hover:border-slate-600"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>Resume</span>
            </button>

            {data.linkedInUrl && (
              <a
                href={data.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm shadow-sky-600/30"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-1.5 text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-lg text-xs flex items-center"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-sky-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 mt-2">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-300 hover:text-sky-400 text-sm font-medium py-2 px-3 rounded-lg hover:bg-slate-900/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Full Resume</span>
              </button>
              {data.linkedInUrl && (
                <a
                  href={data.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEdit();
                }}
                className="w-full py-2 text-xs font-medium text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Customize Profile Details</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
