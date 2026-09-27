import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-white/[0.06] relative" id="experience">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-emerald-400" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">
              04 // EXPERIENCE
            </span>
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Work history.
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          {EXPERIENCES.map((exp, idx) => {
            const isInfotact = exp.company.includes('Infotact');
            return (
              <div
                key={exp.company}
                className="glass-panel rounded-2xl p-6 sm:p-10 transition-all hover:border-zinc-600"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-white/5">
                  <div className="space-y-1">
                    <span
                      className={`font-mono text-xs font-semibold uppercase tracking-wider block ${
                        isInfotact ? 'text-emerald-400' : 'text-cyan-400'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 font-mono text-sm text-zinc-400 pt-0.5">
                      <span className="text-zinc-200">{exp.company}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`px-3 py-1 rounded-full font-mono text-xs border ${
                        isInfotact
                          ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-400'
                          : 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      {exp.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#18181D] font-mono text-xs text-zinc-400 border border-white/5">
                      Internship
                    </span>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <p className="text-zinc-300 text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs text-zinc-400">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#16161B] border border-white/5 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
