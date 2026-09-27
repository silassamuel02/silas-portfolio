import React, { useEffect } from 'react';
import { Project } from '../types';
import {
  X,
  Lock,
  Globe,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Code2,
  CheckCircle,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

interface CaseStudyDrawerProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fadeIn"
      />

      {/* Slide-Over Panel */}
      <div className="absolute inset-y-0 right-0 max-w-2xl w-full bg-[#111116] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-slideLeft">
        <div className="space-y-6">
          {/* Top Bar with Category & Close */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              {project.category}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#18181D] text-zinc-400 hover:text-white hover:bg-[#22222A] transition-colors border border-white/5 cursor-pointer"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Subtitle */}
          <div>
            <div className="font-mono text-xs text-zinc-500 mb-1">PROJECT {project.number}</div>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-zinc-400 mt-1">{project.subtitle}</p>
          </div>

          {/* Repository Status */}
          <div>
            {project.isPrivate ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 font-mono text-xs">
                <Lock className="w-3.5 h-3.5 text-red-400" />
                <span>PRIVATE REPOSITORY (Enterprise / Client Work)</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>PUBLIC OPEN-SOURCE WORKSPACE</span>
              </div>
            )}
          </div>

          {/* Verified Tech Stack */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Verified Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-[#18181D] border border-white/5 font-mono text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* What I Built */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              What I Built
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">{project.overview}</p>
          </div>

          {/* Key Architecture & Features */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Key Architecture &amp; Features
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {project.architecturePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Actions & Pagination */}
        <div className="pt-8 border-t border-white/5 mt-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#18181D] text-white border border-white/10 font-mono text-xs hover:bg-[#24242C] transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                </a>
              )}

              {project.isPrivate && (
                <span className="font-mono text-xs text-zinc-500 italic">
                  Codebase restricted under client NDA
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#18181D] text-white font-mono text-xs hover:bg-[#24242C] transition-colors border border-white/5 cursor-pointer"
            >
              Close (Esc)
            </button>
          </div>

          {/* Project Carousel Switcher */}
          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
            {prevProject ? (
              <button
                onClick={() => onSelectProject(prevProject)}
                className="hover:text-emerald-400 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev: {prevProject.title}</span>
              </button>
            ) : (
              <span className="text-zinc-600">Start of Projects</span>
            )}

            {nextProject ? (
              <button
                onClick={() => onSelectProject(nextProject)}
                className="hover:text-emerald-400 flex items-center gap-1 cursor-pointer transition-colors"
              >
                <span>Next: {nextProject.title}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="text-zinc-600">End of Projects</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
