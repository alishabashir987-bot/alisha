import React from 'react';
import { Briefcase, Users, Calendar, CheckCircle2, Award } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ExperienceProps {
  data: PortfolioData;
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            05. Teamwork & Extracurriculars
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience & Collaboration
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 text-xs text-sky-400 font-semibold mb-2">
                  <Briefcase className="w-4 h-4 text-sky-400" />
                  <span>{exp.organization}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-slate-400 font-mono font-normal">{exp.period}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {exp.role}
                </h3>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {exp.points.map((point, pIndex) => (
                    <li key={pIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                <span>Verified university participation</span>
                <span className="text-slate-400 font-medium">Teamwork & Leadership</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
