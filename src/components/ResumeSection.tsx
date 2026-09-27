import React from 'react';
import { Download, FileText, Printer, ExternalLink, CheckCircle2, Eye, Edit3 } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ResumeSectionProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onOpenEdit: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ data, onOpenResume, onOpenEdit }) => {
  const handleDownloadClick = () => {
    if (data.resumePdfUrl && data.resumePdfUrl.trim() !== '') {
      window.open(data.resumePdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Open the interactive printable modal where user can print to PDF directly
      onOpenResume();
    }
  };

  return (
    <section id="resume" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            06. Professional Documentation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Curriculum Vitae / Resume
          </h2>
          <p className="text-sm text-slate-400">
            A comprehensive overview of academic coursework, analytics skills, verified university projects, and contact credentials.
          </p>
        </div>

        {/* Feature Resume Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-3">
                <FileText className="w-4 h-4" />
                <span>ALISHA_MALIK_RESUME.PDF · UPDATED 2026</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 tracking-tight">
                Ready to review my background for your team?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                Download my resume to inspect detailed university coursework in Business Data Analytics, 
                hands-on projects in Python & SQL, and leadership contributions in presentation design and event logistics.
              </p>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>COMSATS University Islamabad (CGPA 3.46)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Python (Pandas, Matplotlib) & SQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Excel Pivot Tables & Analytical Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Available for immediate internship roles</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Prominent Download Button */}
                <button
                  onClick={handleDownloadClick}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-lg shadow-sky-600/30 flex items-center gap-2 group cursor-pointer"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Download Resume / CV</span>
                </button>

                {/* View / Print in Browser */}
                <button
                  onClick={onOpenResume}
                  className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-sky-400" />
                  <span>View Online & Print</span>
                </button>

                {/* Editable Link Indicator */}
                <button
                  onClick={onOpenEdit}
                  className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors ml-auto sm:ml-0"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{data.resumePdfUrl ? 'Edit PDF URL' : 'Set custom PDF URL'}</span>
                </button>
              </div>

            </div>

            {/* Document Preview Snippet (Minimalist graphic preview, NO photo) */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenResume}
                className="w-full max-w-xs bg-slate-950 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-5 shadow-2xl cursor-pointer group transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                  <span className="font-mono text-sky-400">CV PREVIEW</span>
                  <span className="text-slate-500">1 Page</span>
                </div>

                <div className="py-4 space-y-2">
                  <div className="h-3 w-3/4 bg-slate-800 rounded group-hover:bg-slate-700 transition-colors" />
                  <div className="h-2 w-1/2 bg-sky-500/40 rounded" />
                  <div className="h-2 w-full bg-slate-800/60 rounded mt-3" />
                  <div className="h-2 w-5/6 bg-slate-800/60 rounded" />
                  <div className="h-2 w-4/6 bg-slate-800/60 rounded" />
                  
                  <div className="pt-3 flex gap-2">
                    <div className="h-4 w-12 bg-slate-800 rounded" />
                    <div className="h-4 w-12 bg-slate-800 rounded" />
                    <div className="h-4 w-12 bg-slate-800 rounded" />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white">
                  <span>Click to inspect CV</span>
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
