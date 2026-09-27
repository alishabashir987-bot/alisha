import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Linkedin, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ResumeModalProps {
  data: PortfolioData;
  isOpen: boolean;
  onClose: () => void;
  onOpenEdit: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ data, isOpen, onClose, onOpenEdit }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative my-auto">
        
        {/* Top Control Bar (Non-printing) */}
        <div className="p-4 sm:px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 rounded-t-2xl shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-semibold text-white">Curriculum Vitae — Alisha Malik</h3>
            <span className="hidden sm:inline text-xs text-slate-400 font-mono">· Print-Ready</span>
          </div>

          <div className="flex items-center gap-2">
            {data.resumePdfUrl && (
              <a
                href={data.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-semibold text-sky-400 hover:text-white bg-sky-950/50 hover:bg-sky-900/80 border border-sky-800/80 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>External PDF</span>
              </a>
            )}

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-sky-600/30 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-900 print:p-0 print:bg-white print:text-black">
          
          {/* Printable White Resume Sheet */}
          <div
            id="printable-resume"
            className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-lg max-w-3xl mx-auto border border-slate-200 print:border-none print:shadow-none print:p-0 print:rounded-none"
          >
            
            {/* Header: Name, Contact & Title */}
            <div className="border-b border-slate-300 pb-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 uppercase font-sans">
                    {data.name}
                  </h1>
                  <p className="text-base font-semibold text-slate-700 mt-1">
                    Business Data Analytics
                  </p>
                </div>
                
                <div className="text-xs text-slate-600 space-y-1 sm:text-right font-medium">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    <span>{data.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>{data.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{data.location}</span>
                  </div>
                  {data.linkedInUrl && (
                    <div className="flex items-center sm:justify-end gap-1.5 text-sky-700">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>linkedin.com/in/alisha-malik</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Resume Two-Column Grid Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column (5 cols): Summary & Skills */}
              <div className="md:col-span-5 space-y-6">
                
                {/* Summary */}
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2.5">
                    Summary
                  </h2>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {data.shortBio}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2.5">
                    Skills
                  </h2>
                  
                  <div className="space-y-3 text-xs text-slate-700">
                    <div>
                      <p className="font-bold text-slate-900">Data Analysis:</p>
                      <p className="text-slate-600">Excel, Python, SQL (Data Cleaning and Visualization)</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">Database & Modeling:</p>
                      <p className="text-slate-600">Oracle Database, Machine Learning basics, Statistics</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">MS Office & Creative:</p>
                      <p className="text-slate-600">Word, PowerPoint (Basic to Intermediate), Canva</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">Soft Skills:</p>
                      <p className="text-slate-600">Teamwork, Time Management, Communication Skill, Adaptability, Marketing</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">Continuous Learning:</p>
                      <p className="text-slate-600">Web Development & App Development fundamentals</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column (7 cols): Education, Work Experience, Projects */}
              <div className="md:col-span-7 space-y-6 border-l border-slate-200 md:pl-6">
                
                {/* Education */}
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2.5">
                    Education
                  </h2>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-slate-900">
                        <span>COMSATS UNIVERSITY ISLAMABAD</span>
                        <span className="font-mono text-emerald-700 text-[11px] font-bold">CGPA: 3.46</span>
                      </div>
                      <p className="font-semibold text-slate-700">BS Business Data Analytics</p>
                      <p className="text-slate-500 font-mono text-[11px]">2024 – Present (Expected Graduation: 2028 · 5th Semester)</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">FAUJI FOUNDATION COLLEGE</p>
                      <p className="font-medium text-slate-700">Intermediate in Computer Science (ICS)</p>
                      <p className="text-slate-500 text-[11px]">Completed</p>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">APS COBBELINES</p>
                      <p className="font-medium text-slate-700">Schooling in Computer Science</p>
                      <p className="text-slate-500 text-[11px]">Completed</p>
                    </div>
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2.5">
                    Work Experience
                  </h2>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                    <li>Worked in a team to complete presentations</li>
                    <li>Helped organize events and campus activities</li>
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b-2 border-slate-900 pb-1 mb-2.5">
                    Projects
                  </h2>

                  <div className="space-y-3 text-xs text-slate-700">
                    <div>
                      <p className="font-bold text-slate-900">Sales Data Dashboard (Excel)</p>
                      <ul className="list-disc list-inside text-slate-600 pl-1 space-y-0.5">
                        <li>Cleaned and analyzed sales data</li>
                        <li>Built dashboard using Pivot Tables & charts</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">Data Analysis Practice (Python)</p>
                      <ul className="list-disc list-inside text-slate-600 pl-1 space-y-0.5">
                        <li>Cleaned data using Pandas</li>
                        <li>Visualized trends using Matplotlib</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">Machine Learning & SQL Systems (Academic)</p>
                      <ul className="list-disc list-inside text-slate-600 pl-1 space-y-0.5">
                        <li>Supervised predictive models and relational schema queries</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer (Non-printing) */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/70 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 print:hidden shrink-0">
          <span>Need to update phone, email, or add custom PDF link?</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenEdit();
              }}
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Configure Resume Link
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print to PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
