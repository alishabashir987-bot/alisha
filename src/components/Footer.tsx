import React from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface FooterProps {
  data: PortfolioData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative print:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Academic Status */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                AM
              </span>
              <span className="text-sm font-bold text-white tracking-tight">{data.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              BS Business Data Analytics · COMSATS University Islamabad
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            {data.linkedInUrl && (
              <a
                href={data.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            )}

            {data.gitHubUrl && (
              <a
                href={data.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}

            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{data.email}</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Quiet Subtext */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {data.name}. Personal Portfolio & Academic Record.</span>
          <span>Designed for university student internship & career opportunities.</span>
        </div>
      </div>
    </footer>
  );
};
