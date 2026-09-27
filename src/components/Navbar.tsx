import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Academics', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Zone */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-mono text-sm tracking-wider font-bold text-white hover:text-[#10B981] transition-colors flex items-center gap-2 group"
          >
            <span className="w-2 h-2 rounded-sm bg-[#10B981] group-hover:scale-125 transition-transform" />
            <span>{PERSONAL_INFO.name}</span>
          </a>

          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
              {PERSONAL_INFO.availability}
            </span>
          </div>
        </div>

        {/* Center Nav Zone */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141418]/70 px-2 py-1.5 rounded-full border border-white/[0.06] backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-zinc-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#10B981] transition-colors flex items-center gap-0.5"
            >
              <span>GH</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
            <span className="text-zinc-700">/</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#06B6D4] transition-colors flex items-center gap-0.5"
            >
              <span>LI</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

          <button
            onClick={onOpenResume}
            className="text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981] hover:text-[#0A0A0C] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.06]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0E0E12] px-6 py-6 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 font-mono text-[11px] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04] text-sm text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
