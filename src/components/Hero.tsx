import React from 'react';
import { FileText, Mail, Linkedin, MapPin, Sparkles, ArrowDown, ChevronRight, GraduationCap } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onOpenEdit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenResume, onOpenEdit }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      const topOffset = 80;
      const elementPosition = contactElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background glow effect (no images, pure CSS gradients) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Col 7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-4 tracking-wide">
              <span className="flex items-center gap-1 text-sky-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Internships
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                5th Semester
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {data.location}
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 text-balance">
              {data.name}
            </h1>

            {/* Professional Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-400 mb-6 tracking-tight">
              {data.headline}
            </h2>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {data.shortBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Action 1: View Resume */}
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-all shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-100 group-hover:scale-110 transition-transform" />
                <span>View My Resume</span>
              </button>

              {/* Primary Action 2: Contact Me */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              {/* Primary Action 3: LinkedIn */}
              {data.linkedInUrl && (
                <a
                  href={data.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/90 border border-slate-800 hover:border-sky-500/50 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>

            {/* Key Academic & Technical Quick Indicators */}
            <div className="mt-10 pt-8 border-t border-slate-800/70 w-full grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
                  3.46
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Cumulative GPA</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-sky-400 font-mono tabular-nums">
                  5th
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Academic Semester</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
                  COMSATS
                </p>
                <p className="text-xs text-slate-400 mt-0.5">University Islamabad</p>
              </div>
            </div>

          </div>

          {/* Profile Representation Card (Col 5 on desktop) */}
          {/* Strictly follows: "pls dont add any image pls dont add any ai generated pic i dont want any pic" */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm relative">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-teal-500/20 rounded-3xl blur-xl opacity-75" />

              {/* Main Card Surface */}
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center">
                
                {/* Typographic Monogram Avatar (NO AI generated or stock photo) */}
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 p-1 flex items-center justify-center shadow-inner mb-5 group">
                  {data.customAvatarUrl ? (
                    <img
                      src={data.customAvatarUrl}
                      alt={data.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="w-full h-full rounded-xl bg-slate-950/80 flex flex-col items-center justify-center relative overflow-hidden border border-slate-800">
                      {/* Geometric Data Lines Background */}
                      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
                      <span className="text-4xl font-extrabold tracking-tight bg-gradient-to-br from-white via-sky-200 to-sky-500 bg-clip-text text-transparent relative z-10 font-sans">
                        AM
                      </span>
                      <span className="text-[10px] tracking-widest uppercase font-mono text-sky-400/80 mt-1 relative z-10">
                        ANALYTICS
                      </span>
                    </div>
                  )}

                  {/* Corner Accent Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 rounded-lg p-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                </div>

                {/* Candidate Name & Field */}
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {data.name}
                </h3>
                <p className="text-xs text-sky-400 font-medium mt-0.5">
                  Business Data Analytics
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  COMSATS University Islamabad
                </p>

                {/* Focus Badges in Zero-Pill Unboxed Text */}
                <div className="my-5 w-full pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col gap-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Core Focus</span>
                    <span className="text-slate-200 font-medium">Data Analysis & Insights</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Primary Stack</span>
                    <span className="text-slate-200 font-medium">Python · SQL · Excel</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">Current CGPA</span>
                    <span className="text-emerald-400 font-mono font-semibold">3.46 / 4.00</span>
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Read Academic Profile</span>
                  <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
