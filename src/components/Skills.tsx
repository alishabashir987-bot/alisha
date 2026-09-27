import React, { useState } from 'react';
import { Database, Code2, LineChart, Wrench, Layers, Users, Cpu, FileSpreadsheet, Check } from 'lucide-react';
import { PortfolioData, SkillItem } from '../types/portfolio';

interface SkillsProps {
  data: PortfolioData;
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'data' | 'tools' | 'dev' | 'soft'>('all');

  const filteredSkills = data.skills.filter((skill: SkillItem) => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'data':
        return <Database className="w-4 h-4 text-sky-400" />;
      case 'tools':
        return <FileSpreadsheet className="w-4 h-4 text-amber-400" />;
      case 'dev':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'soft':
        return <Users className="w-4 h-4 text-purple-400" />;
      default:
        return <Layers className="w-4 h-4 text-sky-400" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-sky-400';
      case 'Intermediate':
        return 'text-emerald-400';
      case 'Learning':
        return 'text-amber-400';
      default:
        return 'text-indigo-400';
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              03. Core Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Expertise
            </h2>
            <div className="w-12 h-1 bg-sky-500 rounded mt-3" />
          </div>

          <p className="text-sm text-slate-400 max-w-md">
            A balanced mix of quantitative data analysis, analytical database tools, business productivity, and continuous engineering learning.
          </p>
        </div>

        {/* Filter Segmented Control Tabs (Functional buttons with click handlers) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl mb-10 w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Skills ({data.skills.length})
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'data'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Data & Analytics
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'tools'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Productivity & Design
          </button>
          <button
            onClick={() => setActiveTab('dev')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'dev'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Web & App Development
          </button>
          <button
            onClick={() => setActiveTab('soft')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeTab === 'soft'
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Communication & Business
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 backdrop-blur-sm transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  
                  {/* Unboxed Status / Level Text */}
                  <span className={`text-[11px] font-mono font-medium ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                {skill.description && (
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Minimalist Progress Meter */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="capitalize">{skill.category === 'dev' ? 'Development' : skill.category}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Check className="w-3 h-3 text-sky-400" />
                  Coursework & Projects
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Specialized Stack Overview */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/70 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Continuous Growth & Emerging Tech</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Currently expanding knowledge in full-stack web and cross-platform app development to build end-to-end data analytics solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-sky-400 font-mono shrink-0">
            <span>HTML/CSS · JavaScript · UI Logic</span>
          </div>
        </div>

      </div>
    </section>
  );
};
