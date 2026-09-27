import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  MapPin,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');
  const [inquiryBody, setInquiryBody] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquirySubject.trim() && !inquiryBody.trim()) {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Software%20Engineering%20Opportunity`;
      return;
    }
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      inquirySubject || 'Opportunity with Silas'
    )}&body=${encodeURIComponent(inquiryBody)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative" id="contact">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-emerald-400" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">
              07 // INITIATE CONTACT
            </span>
          </div>

          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Have something
            <br />
            worth building?
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Let's build something useful. I am actively seeking full-time software engineering
            opportunities, product teams, and high-impact engineering projects.
          </p>

          {/* Interactive Direct Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 max-w-xl mx-auto text-left">
            {/* Email Card with 1-click Copy */}
            <div className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-emerald-500/50 transition-all">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 min-w-0 flex-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[#18181D] flex items-center justify-center text-emerald-400 shrink-0 border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    Email Address
                  </p>
                  <p className="font-mono text-xs text-white truncate font-medium">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#18181D] hover:bg-white hover:text-black text-zinc-400 transition-colors shrink-0 ml-2 cursor-pointer border border-white/5"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Direct Card */}
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#18181D] flex items-center justify-center text-cyan-400 shrink-0 border border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    Direct Phone
                  </p>
                  <p className="font-mono text-xs text-white truncate font-medium">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Copy Toast */}
          {copied && (
            <div className="font-mono text-xs text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 animate-fadeIn">
              <Check className="w-3.5 h-3.5" />
              <span>Copied {PERSONAL_INFO.email} to clipboard</span>
            </div>
          )}

          {/* Interactive Quick Note / Inquiry Composer */}
          <div className="max-w-xl mx-auto pt-6 text-left">
            <div className="p-6 rounded-2xl bg-[#141418] border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  Quick Project or Role Inquiry
                </span>
                <span className="font-mono text-[10px] text-zinc-500">Direct to Silas</span>
              </div>

              <form onSubmit={handleSendInquiry} className="space-y-3">
                <input
                  type="text"
                  value={inquirySubject}
                  onChange={(e) => setInquirySubject(e.target.value)}
                  placeholder="Subject: e.g. Full Stack Role / Product Project"
                  className="w-full bg-[#18181D] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 font-mono"
                />
                <textarea
                  rows={3}
                  value={inquiryBody}
                  onChange={(e) => setInquiryBody(e.target.value)}
                  placeholder="Tell me about what you're building or the role you are looking to fill..."
                  className="w-full bg-[#18181D] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 resize-none font-sans"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0A0A0C] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-emerald-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </button>
              </form>

              {formSent && (
                <p className="font-mono text-xs text-emerald-400 text-center animate-fadeIn">
                  Opening your email client with prefilled details...
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-8 py-4 rounded-xl bg-emerald-500 text-[#0A0A0C] font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl bg-[#141418] border border-white/10 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#1E1E24] hover:border-white/20 transition-all flex items-center gap-2"
            >
              <span className="font-bold">GH</span>
              <span>VIEW GITHUB REPOS</span>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Chennai, India [{PERSONAL_INFO.coordinates}]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
