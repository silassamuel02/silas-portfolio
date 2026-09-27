import React, { useState } from 'react';
import {
  Layout,
  Server,
  Database,
  Zap,
  Terminal,
  Search,
  Check,
  Code2,
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-emerald-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-cyan-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-amber-400" />;
      default:
        return <Code2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getHoverBorder = (category: string) => {
    switch (category) {
      case 'Frontend':
        return 'hover:border-emerald-500/40 hover:bg-emerald-950/20';
      case 'Backend':
        return 'hover:border-cyan-500/40 hover:bg-cyan-950/20';
      case 'Database':
        return 'hover:border-purple-500/40 hover:bg-purple-950/20';
      case 'Real-Time & Cache':
        return 'hover:border-emerald-500/40 hover:bg-emerald-950/20';
      case 'Tools & DevOps':
        return 'hover:border-amber-500/40 hover:bg-amber-950/20';
      default:
        return 'hover:border-emerald-500/40 hover:bg-emerald-950/20';
    }
  };

  return (
    <section className="py-24 lg:py-32 border-t border-white/[0.06] bg-[#0C0C0E]" id="skills">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-sm bg-emerald-400" />
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">
                03 // TOOLING
              </span>
            </div>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Technical Arsenal.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-mono text-xs text-zinc-500">Directly Applied In Shipped Software</p>

            {/* Quick Filter Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools or languages..."
                className="bg-[#141418] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/40 font-mono w-56 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs font-mono"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => {
            const filteredSkills = group.skills.filter((skill) =>
              skill.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            const isWide = group.category === 'Tools & DevOps';

            return (
              <div
                key={group.category}
                className={`glass-panel rounded-2xl p-6 space-y-4 transition-all ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    {getIcon(group.iconName)}
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      {group.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">{group.label}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {(searchQuery ? filteredSkills : group.skills).map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg bg-[#141418] border border-white/5 font-mono text-xs text-zinc-300 transition-all cursor-default select-none ${getHoverBorder(
                        group.category
                      )}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
