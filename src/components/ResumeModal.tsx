import React, { useEffect, useState } from 'react';
import {
  X,
  Download,
  Mail,
  Printer,
  Copy,
  Check,
  CheckCircle2,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_GROUPS, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.title} · ${PERSONAL_INFO.secondaryTitle}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

## EDUCATION
${PERSONAL_INFO.degree}
${PERSONAL_INFO.university} (2022 - 2026) | CGPA: ${PERSONAL_INFO.cgpa}

## EXPERIENCE
${EXPERIENCES.map(
  (e) => `### ${e.role} - ${e.company}
${e.period} | ${e.location}
${e.description}
Tech: ${e.technologies.join(', ')}`
).join('\n\n')}

## FEATURED PROJECTS
${PROJECTS.map(
  (p) => `### ${p.title} (${p.category})
${p.description}
Technologies: ${p.tech.join(', ')}`
).join('\n\n')}

## CERTIFICATIONS
${CERTIFICATIONS.map((c) => `- ${c.title} (${c.issuer}): ${c.description}`).join('\n')}
`;

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#111116] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] flex flex-col justify-between overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Curriculum Vitae Snapshot
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-[#18181D] text-zinc-300 hover:text-white border border-white/5 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="p-2 rounded-lg bg-[#18181D] text-zinc-300 hover:text-white border border-white/5 text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              title="Copy Markdown Resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy MD'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#18181D] text-zinc-400 hover:text-white border border-white/5 cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div className="overflow-y-auto space-y-6 py-4 pr-1 text-left print:text-black">
          {/* Silas Identity Lockup */}
          <div className="space-y-1">
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
              {PERSONAL_INFO.name}
            </h2>
            <p className="font-mono text-xs text-emerald-400 font-semibold tracking-wide">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.secondaryTitle}
            </p>
            <p className="font-mono text-xs text-zinc-400 pt-1">
              {PERSONAL_INFO.email} · {PERSONAL_INFO.phone} · {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider pb-1 border-b border-white/5 font-semibold">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education</span>
            </div>
            <div className="flex justify-between items-start text-xs font-mono">
              <div>
                <p className="text-white font-semibold text-sm">{PERSONAL_INFO.degree}</p>
                <p className="text-zinc-400">{PERSONAL_INFO.university}</p>
              </div>
              <div className="text-right">
                <span className="text-emerald-400 font-bold">CGPA: {PERSONAL_INFO.cgpa}</span>
                <p className="text-zinc-500">{PERSONAL_INFO.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider pb-1 border-b border-white/5 font-semibold">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Professional Experience</span>
            </div>
            {EXPERIENCES.map((exp) => (
              <div key={exp.company} className="space-y-1">
                <div className="flex justify-between items-start text-xs font-mono">
                  <div>
                    <span className="text-white font-semibold">{exp.role}</span>
                    <span className="text-zinc-500"> — </span>
                    <span className="text-zinc-300">{exp.company}</span>
                  </div>
                  <span className="text-zinc-500">{exp.period}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Core Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider pb-1 border-b border-white/5 font-semibold">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Selected Engineered Projects</span>
            </div>
            {PROJECTS.slice(0, 4).map((p) => (
              <div key={p.id} className="space-y-0.5 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{p.title}</span>
                  <span className="text-zinc-500 text-[10px]">{p.category}</span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider pb-1 border-b border-white/5 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Certifications &amp; Accreditations</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {CERTIFICATIONS.map((c) => (
                <div key={c.title} className="p-2 rounded bg-[#18181D] border border-white/5">
                  <p className="text-white font-semibold">{c.title}</p>
                  <p className="text-zinc-500 text-[11px]">{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Silas%20Stuart%20Samuel%20-%20Resume%20Inquiry`}
            className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Request Full PDF / Hire Silas</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg bg-[#18181D] hover:bg-[#22222A] text-zinc-300 font-mono text-xs transition-colors border border-white/5 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
