import React from 'react';
import { ArrowDown, Download, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center max-w-[1360px] mx-auto px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute -top-24 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Typography & Action System */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 z-10">
          {/* Eyebrow & Status */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-zinc-700">|</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>
          </div>

          {/* Large Headline */}
          <div className="space-y-1">
            <h1 className="font-sans font-extrabold text-5xl sm:text-7xl lg:text-[5.25rem] xl:text-[6.25rem] tracking-[-0.04em] leading-[0.92] text-white">
              BUILDING
              <br />
              USEFUL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                SOFTWARE.
              </span>
            </h1>
          </div>

          {/* Subtitle & Supporting Text */}
          <div className="space-y-2 max-w-xl">
            <p className="font-mono text-xs sm:text-sm text-emerald-400 font-medium tracking-wide uppercase">
              Full Stack Developer · MERN · Java
            </p>
            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              Full Stack Developer building modern web applications with React, Node.js, Java and Spring Boot.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-7 py-3.5 rounded-xl bg-white text-[#0A0A0C] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#10B981] hover:text-[#0A0A0C] transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-black/40 group cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-xl bg-[#141418] border border-white/10 text-white font-mono text-xs uppercase tracking-wider hover:bg-[#1E1E24] hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>DOWNLOAD RESUME</span>
            </button>
          </div>

          {/* Social Links & Geographic Coordinates */}
          <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-y-3 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                <span>GITHUB</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                <span>LINKEDIN</span>
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-emerald-300 transition-colors"
              >
                EMAIL
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span>CHENNAI, INDIA [{PERSONAL_INFO.coordinates}]</span>
            </div>
          </div>
        </div>

        {/* Right Column: Prominent Vertical Portrait with Large Editorial Crop */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[430px] aspect-[3/4] min-h-[480px] lg:min-h-[530px] group">
            {/* Ambient Glow Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/25 via-emerald-500/5 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Outer Frame with Charcoal Border & Shadow */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0C] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2.5">
              {/* Inner Portrait Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#141418]">
                <img
                  src={PERSONAL_INFO.heroPortrait}
                  alt="Silas Stuart Samuel Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Micro Film Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C]/30 opacity-80 pointer-events-none" />

                {/* Top Monospace Watermark Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#0A0A0C]/80 backdrop-blur-md border border-white/10">
                  <span className="font-mono text-[10px] text-emerald-400 tracking-widest uppercase">
                    ID // STUART.SILAS.26
                  </span>
                </div>

                {/* Floating Stack Tags on Portrait */}
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                  <span className="px-2 py-0.5 rounded bg-[#0A0A0C]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-zinc-300 tracking-wider">
                    MERN
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0A0A0C]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-cyan-400 tracking-wider">
                    JAVA
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0A0A0C]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-emerald-400 tracking-wider">
                    REACT
                  </span>
                </div>

                {/* Technical Bottom Strip */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0A0A0C]/90 backdrop-blur-lg border border-white/10 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <div>
                      <p className="font-sans text-xs font-semibold text-white leading-none">
                        Full Stack Engineer
                      </p>
                      <p className="font-mono text-[10px] text-zinc-400 mt-0.5">
                        B.E. Computer Science 2026
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
