import React from 'react';
import { Database, TrendingUp, Users, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface AboutProps {
  data: PortfolioData;
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ data, onOpenResume }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
            01. Background & Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-12 h-1 bg-sky-500 rounded mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Story & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                Hello! I am <strong className="text-white font-semibold">{data.name}</strong>, a 5th-semester 
                <span className="text-sky-400 font-medium"> Business Data Analytics</span> student at COMSATS University Islamabad. 
                My academic journey is centered around understanding data architecture, computational analysis, and strategic business decision-making.
              </p>
              
              <p>
                Through my university coursework and independent project practice, I have gained practical, hands-on experience working with 
                <strong className="text-slate-100 font-semibold"> Python, SQL, and Microsoft Excel</strong>. I specialize in the foundational stages 
                of data analytics: data cleaning, exploratory data analysis (EDA), and transforming raw numbers into clear, accessible dashboards and visualizations.
              </p>

              <p>
                In addition to analytical capabilities, I place great value on active teamwork, clear presentation, and time management. 
                Whether collaborating in groups to produce polished executive presentations or volunteering to coordinate campus events, 
                I bring an organized and adaptable approach to every challenge.
              </p>

              <p className="text-slate-300">
                I am actively seeking an <strong className="text-sky-400 font-medium">internship opportunity</strong> where I can contribute my analytical skills 
                in a professional environment, learn from industry mentors, and help teams make informed, data-driven decisions.
              </p>
            </div>

            {/* Core Value Pillars */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
                  <Database className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Data Foundations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Careful data cleaning, structured SQL querying, and anomaly handling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Business Impact</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Translating statistical patterns into executive-ready recommendations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Collaborative Mindset</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proven teamwork, event organization, and strong communication skills.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-sm sticky top-28">
              
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-400" />
                <span>At a Glance</span>
              </h3>

              <div className="divide-y divide-slate-800/80 text-sm">
                
                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">University</span>
                  <span className="text-white font-medium text-right text-xs">COMSATS University Islamabad</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">Degree Program</span>
                  <span className="text-sky-400 font-medium text-right text-xs">BS Business Data Analytics</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">Current Semester</span>
                  <span className="text-white font-mono font-medium text-xs">5th Semester (Expected: 2028)</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">Cumulative GPA</span>
                  <span className="text-emerald-400 font-mono font-bold text-xs">3.46 / 4.00</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">Prior Education</span>
                  <span className="text-slate-300 text-right text-xs">ICS (Fauji Foundation) · APS</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">Location</span>
                  <span className="text-slate-300 text-xs">{data.location}</span>
                </div>

                <div className="py-3 flex justify-between items-center">
                  <span className="text-slate-400 text-xs">Seeking</span>
                  <span className="text-sky-400 font-medium text-xs">Data Analytics Internship</span>
                </div>

              </div>

              {/* Verified Competencies */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <p className="text-xs font-semibold text-slate-300 mb-3">Core Strengths</p>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Data Cleaning & Transformation with Python (Pandas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Database Querying & Relational Analysis with SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Executive Reporting with Excel Pivot Tables & Charts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Teamwork, Presentations & Event Organization</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  <span>View Full Curriculum & Vitae</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
