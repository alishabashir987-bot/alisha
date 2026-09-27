import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, Edit3 } from 'lucide-react';
import { PortfolioData, EducationItem } from '../types/portfolio';

interface EducationProps {
  data: PortfolioData;
  onOpenEdit: () => void;
}

export const Education: React.FC<EducationProps> = ({ data, onOpenEdit }) => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              02. Academic Background
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Education
            </h2>
            <div className="w-12 h-1 bg-sky-500 rounded mt-3" />
          </div>

          <button
            onClick={onOpenEdit}
            className="self-start md:self-auto text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-900 border border-slate-800"
          >
            <Edit3 className="w-3 h-3" />
            <span>Edit Education Details</span>
          </button>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-10">
          
          {data.education.map((item: EducationItem, index: number) => {
            const isCurrent = index === 0;
            return (
              <div key={item.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-slate-950 border-sky-400 text-sky-400 shadow-md shadow-sky-500/20'
                      : 'bg-slate-950 border-slate-700 text-slate-400 group-hover:border-slate-500'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                </div>

                {/* Card Container */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm hover:border-slate-700 transition-all shadow-sm">
                  
                  {/* Top Row: Degree & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {item.degree}
                    </h3>
                    {item.cgpaOrGrade && (
                      <span className="self-start sm:self-auto text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md">
                        {item.cgpaOrGrade}
                      </span>
                    )}
                  </div>

                  {/* Institution & Metadata */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 mb-4">
                    <span className="font-semibold text-slate-200">{item.institution}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {item.period}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.location}
                    </span>
                  </div>

                  {/* Summary / Description */}
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Academic Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-4 border-t border-slate-800/80">
                      <p className="text-xs font-semibold text-slate-400 mb-2">Key Highlights & Focus</p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 ml-4 sm:ml-6 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
          <span>All academic credentials reflect verified coursework and enrollment at COMSATS University Islamabad.</span>
          <button
            onClick={onOpenEdit}
            className="text-sky-400 hover:underline shrink-0 ml-4 font-medium"
          >
            Update grades/dates
          </button>
        </div>

      </div>
    </section>
  );
};
