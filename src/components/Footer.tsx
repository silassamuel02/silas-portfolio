import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  return (
    <footer className="w-full bg-[#08080A] border-t border-white/[0.06] py-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-xs text-zinc-500 text-center sm:text-left">
          <span className="text-white font-semibold tracking-wider">{PERSONAL_INFO.name}</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>Designed &amp; built with code</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>Chennai, India</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-emerald-400 transition-colors uppercase tracking-wider"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-cyan-400 transition-colors uppercase tracking-wider"
          >
            LinkedIn
          </a>
          <button
            onClick={onOpenResume}
            className="text-zinc-400 hover:text-emerald-400 transition-colors uppercase tracking-wider cursor-pointer"
          >
            Resume
          </button>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
