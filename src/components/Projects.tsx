import React, { useState } from 'react';
import { ExternalLink, Github, Layers, FileSpreadsheet, Code2, Database, ChevronRight, CheckCircle2, Edit3, X } from 'lucide-react';
import { PortfolioData, ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  data: PortfolioData;
  onOpenEdit: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ data, onOpenEdit }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (category: string) => {
    if (category.toLowerCase().includes('excel')) {
      return <FileSpreadsheet className="w-4 h-4 text-emerald-400" />;
    }
    if (category.toLowerCase().includes('python')) {
      return <Code2 className="w-4 h-4 text-sky-400" />;
    }
    if (category.toLowerCase().includes('database') || category.toLowerCase().includes('sql')) {
      return <Database className="w-4 h-4 text-amber-400" />;
    }
    return <Layers className="w-4 h-4 text-indigo-400" />;
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-sky-400 uppercase mb-2">
              04. Practical Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Projects & Case Studies
            </h2>
            <div className="w-12 h-1 bg-sky-500 rounded mt-3" />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEdit}
              className="text-xs text-slate-400 hover:text-sky-400 flex items-center gap-1.5 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-900 border border-slate-800"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit / Add Projects</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-7 backdrop-blur-sm transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs text-sky-400 font-medium">
                    {getProjectIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {project.isPlaceholder ? (
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded">
                      Academic Framework
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      Completed Project
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies (Zero-Pill: clean text with dividers) */}
                <div className="pt-3 border-t border-slate-800/80 mb-6">
                  <p className="text-[11px] text-slate-500 mb-1.5 font-medium">Tools & Technologies</p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300">
                    {project.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300 font-medium">{tech}</span>
                        {tIdx < project.technologies.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Project Overview</span>
                  <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                    title="View Code on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 text-slate-400 hover:text-slate-200 bg-slate-800/40 border border-slate-800 rounded-lg transition-colors"
                    title="Code details"
                  >
                    <Code2 className="w-4 h-4" />
                  </button>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-sky-400 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Overview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-7 relative shadow-2xl">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wide">
                {selectedProject.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {selectedProject.description}
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                Key Accomplishments & Implementation
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-200 font-mono">
                {selectedProject.technologies.map((t) => (
                  <span key={t} className="bg-slate-800 border border-slate-700/80 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenEdit();
                }}
                className="px-4 py-2 text-xs font-medium text-sky-400 hover:text-sky-300 bg-sky-950/60 border border-sky-800/80 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Project Info</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
