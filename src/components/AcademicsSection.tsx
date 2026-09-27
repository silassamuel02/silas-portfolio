import React from 'react';
import { PERSONAL_INFO, CERTIFICATIONS } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  ShieldCheck,
  Bookmark,
  BookOpen,
} from 'lucide-react';

export const AcademicsSection: React.FC = () => {
  const getCertIcon = (type: string) => {
    switch (type) {
      case 'verified':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
      case 'master':
        return <Award className="w-5 h-5 text-cyan-400 shrink-0" />;
      case 'gov':
        return <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />;
      case 'tech':
        return <Bookmark className="w-5 h-5 text-amber-400 shrink-0" />;
      default:
        return <Award className="w-5 h-5 text-emerald-400 shrink-0" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 border-t border-white/[0.06] bg-[#0C0C0E]" id="credentials">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Academic Foundation */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-sm bg-emerald-400" />
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">
                  05 // EDUCATION
                </span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Academic Foundation.
              </h2>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {PERSONAL_INFO.graduationYear}
                </span>
                <span className="text-white font-bold text-sm bg-white/5 px-3 py-1 rounded border border-white/5">
                  CGPA: {PERSONAL_INFO.cgpa}
                </span>
              </div>

              <div>
                <h3 className="font-sans text-xl font-bold text-white">
                  {PERSONAL_INFO.degree}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">{PERSONAL_INFO.university}</p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3 font-sans text-xs text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-mono text-sm leading-none mt-0.5">▪</span>
                  <span>
                    Core coursework: Data Structures, Algorithms, OS, DBMS, Networks and Distributed Systems.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-mono text-sm leading-none mt-0.5">▪</span>
                  <span>
                    Graduating June 2026 with ready-to-deploy industry internship experience.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-sm bg-cyan-400" />
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.25em] font-semibold">
                  06 // CREDENTIALS
                </span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Verified Certifications.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-panel rounded-xl p-5 space-y-2 hover:border-zinc-600 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {getCertIcon(cert.iconType)}
                      <div>
                        <h4 className="font-sans text-sm font-bold text-white leading-tight">
                          {cert.title}
                        </h4>
                        <p className="font-mono text-[10px] text-zinc-500 uppercase mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-xs leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>VERIFIED CREDENTIAL</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
