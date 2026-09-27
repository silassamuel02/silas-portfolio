import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, CheckCircle, Terminal, MapPin, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 border-t border-white/[0.06] relative" id="about">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-sm bg-emerald-400" />
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] font-semibold">
                  02 // STATEMENT
                </span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                SOFTWARE DEVELOPER
                <br />
                FOCUSED ON BUILDING
                <br />
                <span className="text-zinc-400">REAL THINGS.</span>
              </h2>
            </div>

            <div className="w-16 h-1 bg-emerald-400 rounded-full" />

            {/* Quick Facts Card */}
            <div className="p-6 rounded-xl bg-[#141418] border border-white/5 font-mono text-xs space-y-3.5 text-zinc-300">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-zinc-500">Degree</span>
                <span className="text-white font-medium">B.E. Computer Science (2026)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-zinc-500">Focus</span>
                <span className="text-emerald-400 font-medium">Full Stack &amp; Real-time APIs</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-zinc-500">Location</span>
                <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-zinc-500">Languages</span>
                <span className="text-white font-medium">JavaScript, Java, TypeScript, SQL</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-500">Availability</span>
                <span className="text-cyan-400 font-medium">Immediate / 2026 Grad</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Secondary Portrait Composition */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-zinc-400 text-base sm:text-lg leading-relaxed">
              <p className="text-zinc-200">
                Full Stack Developer with hands-on experience in MERN stack development, React.js, Node.js, Express.js, and MongoDB, with additional experience building robust enterprise backends using Java and Spring Boot.
              </p>
              <p>
                I enjoy turning ideas into complete applications, from responsive interfaces and REST APIs to authentication, databases, real-time communication, and payment workflows. Clean abstractions, deterministic state, and low-friction user experience define my daily engineering practice.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3.5 rounded-lg bg-[#141418] border border-white/5 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-zinc-300">React &amp; Node.js Full Stack</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#141418] border border-white/5 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-zinc-300">Java &amp; Spring Boot Backend</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#141418] border border-white/5 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-zinc-300">Real-Time Sockets &amp; Redis Pub/Sub</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#141418] border border-white/5 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-zinc-300">Razorpay API &amp; Webhook Integration</span>
              </div>
            </div>

            {/* Secondary Portrait Composition */}
            <div className="p-6 rounded-2xl bg-[#141418] border border-white/10 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/10 shadow-lg group">
                <img
                  src={PERSONAL_INFO.detailPortrait}
                  alt="Silas Stuart Samuel Detail Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-color" />
              </div>

              <div className="space-y-2 text-left">
                <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  Engineering Intent
                </p>
                <p className="font-sans text-sm sm:text-base text-zinc-200 italic leading-relaxed">
                  “I'm a Computer Science student who enjoys building complete web applications and learning by shipping real projects.”
                </p>
                <p className="font-mono text-[11px] text-zinc-500">
                  Ready for Full-time Roles &amp; High-Impact Product Teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
