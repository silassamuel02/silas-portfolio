import React, { useState } from 'react';
import {
  Lock,
  ExternalLink,
  Github,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Shield,
  Activity,
  Code2,
  Terminal,
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import {
  TeamSyncMockup,
  WaxWireMockup,
  ICRSMockup,
  GidyMockup,
} from './ProjectMockups';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'backend' | 'frontend'>('all');

  const teamsync = PROJECTS.find((p) => p.id === 'teamsync')!;
  const waxwire = PROJECTS.find((p) => p.id === 'waxwire')!;
  const icrs = PROJECTS.find((p) => p.id === 'icrs')!;
  const gidy = PROJECTS.find((p) => p.id === 'gidy')!;
  const secondaryProjects = PROJECTS.filter((p) => !p.isFeatured);

  const filterTabs = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'flagship', label: 'Flagship Systems (2)' },
    { id: 'backend', label: 'Full Stack & APIs (4)' },
    { id: 'frontend', label: 'Frontend & Systems (3)' },
  ];

  const showFlagship = activeFilter === 'all' || activeFilter === 'flagship' || activeFilter === 'backend';
  const showIcrs = activeFilter === 'all' || activeFilter === 'backend';
  const showGidy = activeFilter === 'all' || activeFilter === 'backend' || activeFilter === 'frontend';
  const showSecondary = activeFilter === 'all' || activeFilter === 'frontend';

  return (
    <section className="py-24 lg:py-32 border-t border-white/[0.06] relative" id="work">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-400" />
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">
                01 // SELECTED WORK
              </span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Things I've built.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-mono text-xs text-zinc-500">7 Selected Systems &amp; Deployments</p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-[#141418] rounded-lg border border-white/5">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Space */}
        <div className="space-y-12">
          {/* PROJECT 01: TEAMSYNC */}
          {showFlagship && (
            <div className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 relative group transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
                      Flagship System
                    </span>
                    <span className="px-3 py-1 rounded bg-white/[0.04] text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
                      MERN · Real-Time · Collaboration
                    </span>
                    <span className="px-3 py-1 rounded bg-red-950/40 border border-red-500/20 text-red-300 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <Lock className="w-3 h-3 text-red-400" />
                      <span>Private Project</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {teamsync.title} — {teamsync.subtitle}
                    </h3>
                    <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
                      {teamsync.description}
                    </p>
                  </div>

                  {/* Verified Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-zinc-300">
                    {teamsync.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded border ${
                          t === 'Socket.IO'
                            ? 'bg-emerald-950/50 border-emerald-500/30 text-emerald-400'
                            : 'bg-[#18181D] border-white/5 text-zinc-300'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onSelectProject(teamsync)}
                      className="px-5 py-2.5 rounded-lg bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-emerald-400 hover:text-black transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-black/30"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Verified Production Code
                    </span>
                  </div>
                </div>

                {/* Realistic Dark UI Workspace Mockup */}
                <div className="lg:col-span-6">
                  <TeamSyncMockup onClick={() => onSelectProject(teamsync)} />
                </div>
              </div>
            </div>
          )}

          {/* PROJECT 02: WAX & WIRE */}
          {showFlagship && (
            <div className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 relative group transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Mockup Left */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <WaxWireMockup onClick={() => onSelectProject(waxwire)} />
                </div>

                {/* Narrative Right */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] font-semibold uppercase tracking-wider">
                      E-Commerce Architecture
                    </span>
                    <span className="px-3 py-1 rounded bg-white/[0.04] text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
                      MERN · Payment Gateway · REST
                    </span>
                    <span className="px-3 py-1 rounded bg-red-950/40 border border-red-500/20 text-red-300 font-mono text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <Lock className="w-3 h-3 text-red-400" />
                      <span>Private Project</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {waxwire.title} — {waxwire.subtitle}
                    </h3>
                    <p className="text-zinc-400 text-base sm:text-lg mt-3 leading-relaxed">
                      {waxwire.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-zinc-300">
                    {waxwire.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded border ${
                          t === 'Razorpay API'
                            ? 'bg-cyan-950/50 border-cyan-500/30 text-cyan-400'
                            : 'bg-[#18181D] border-white/5 text-zinc-300'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onSelectProject(waxwire)}
                      className="px-5 py-2.5 rounded-lg bg-white text-black font-mono text-xs font-semibold uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-black/30"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Secure Webhook Handshake
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MEDIUM PROJECTS: ICRS & GIDY AUDIT DASHBOARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 03: ICRS */}
            {showIcrs && (
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-purple-950/50 border border-purple-500/30 text-purple-300 font-mono text-[11px] uppercase tracking-wider font-semibold">
                      AI · Full Stack · NLP
                    </span>
                    <span className="font-mono text-xs text-zinc-500">Spring Boot · React</span>
                  </div>

                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {icrs.title}
                    </h3>
                    <p className="font-mono text-xs text-purple-300/80 mt-1">{icrs.subtitle}</p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">{icrs.description}</p>

                  {/* UI Preview */}
                  <ICRSMockup />

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-zinc-300 pt-1">
                    {icrs.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-6">
                  {icrs.githubUrl && (
                    <a
                      href={icrs.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:text-purple-300 font-mono text-xs transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="font-semibold truncate max-w-[200px] sm:max-w-none">
                        github.com/silassamuel02/ICRS
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(icrs)}
                    className="text-xs font-mono text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            )}

            {/* 04: GIDY AUDIT DASHBOARD */}
            {showGidy && (
              <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between group transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] uppercase tracking-wider font-semibold">
                      Enterprise Dashboard
                    </span>
                    <span className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {gidy.title}
                    </h3>
                    <p className="font-mono text-xs text-emerald-400/80 mt-1">{gidy.subtitle}</p>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">{gidy.description}</p>

                  {/* UI Preview */}
                  <GidyMockup />

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs text-zinc-300 pt-1">
                    {gidy.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-[#18181D] border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 mt-6">
                  <div className="flex items-center gap-4 font-mono text-xs">
                    {gidy.liveDemoUrl && (
                      <a
                        href={gidy.liveDemoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-emerald-400 flex items-center gap-1 font-semibold transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3 text-emerald-400" />
                      </a>
                    )}
                    <span className="text-zinc-700">/</span>
                    {gidy.githubUrl && (
                      <a
                        href={gidy.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(gidy)}
                    className="text-xs font-mono text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* SECONDARY PROJECTS: 05, 06, 07 */}
          {showSecondary && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {secondaryProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onSelectProject(p)}
                  className="glass-panel rounded-xl p-6 flex flex-col justify-between group transition-all hover:border-zinc-600 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase">
                      <span>{p.category.split('·')[0]}</span>
                      <span>{p.number}</span>
                    </div>

                    <h4 className="font-sans text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h4>

                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1 font-mono text-[10px] text-zinc-400 pt-1">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between font-mono text-xs">
                    {p.githubUrl ? (
                      <span className="text-zinc-400 group-hover:text-white flex items-center gap-1 transition-colors truncate">
                        <Github className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{p.githubUrl.replace('https://', '')}</span>
                      </span>
                    ) : (
                      <span className="text-zinc-500">Private Codebase</span>
                    )}
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
