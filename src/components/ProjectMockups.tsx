import React, { useState } from 'react';
import {
  Lock,
  Globe,
  CheckCircle2,
  Zap,
  Activity,
  CreditCard,
  FileSpreadsheet,
  AlertTriangle,
  ArrowUpRight,
  Send,
  MessageSquare,
  Users,
} from 'lucide-react';

export const TeamSyncMockup: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'Silas Stuart',
      role: 'Lead',
      time: '14:23:08 UTC',
      text: 'Hotfix 2.14 merged to staging. Redis pub/sub queue synchronized across cluster nodes.',
      isLead: true,
    },
    {
      sender: 'Elena Rostova',
      role: 'Dev',
      time: '14:23:41 UTC',
      text: 'Confirmed. Client heartbeat verified with 0 dropped sockets.',
      isLead: false,
    },
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const now = new Date();
    const timeStr = `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}:${String(now.getUTCSeconds()).padStart(2, '0')} UTC`;
    setMessages((prev) => [
      ...prev,
      {
        sender: 'You (Visitor)',
        role: 'Client',
        time: timeStr,
        text: inputVal.trim(),
        isLead: false,
      },
    ]);
    setInputVal('');
  };

  return (
    <div
      onClick={onClick}
      className="rounded-xl overflow-hidden bg-[#0C0C0F] border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01] cursor-pointer text-left"
    >
      {/* Window Header */}
      <div className="h-9 bg-[#141418] border-b border-white/5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-[11px] text-zinc-400">TeamSync Desktop // org_enterprise_prod</span>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
          <Activity className="w-3 h-3 animate-pulse" />
          &lt;18ms LATENCY
        </span>
      </div>

      {/* Screen Body */}
      <div className="grid grid-cols-12 min-h-[310px] text-xs">
        {/* Left Sidebar */}
        <div className="col-span-12 sm:col-span-4 bg-[#111116] border-r border-b sm:border-b-0 border-white/5 p-3 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              <span>Channels</span>
            </div>
            <div className="space-y-1 font-mono text-[11px]">
              <div className="px-2 py-1 rounded bg-white/5 text-emerald-400 flex items-center justify-between">
                <span># production-release</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
              </div>
              <div className="px-2 py-1 rounded text-zinc-400 hover:text-zinc-200"># engineering</div>
              <div className="px-2 py-1 rounded text-zinc-400 hover:text-zinc-200"># design-system</div>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 pt-2 flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>Presence (6)</span>
            </div>
            <div className="space-y-1.5 font-mono text-[11px] text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-white font-medium">Silas Stuart (Lead)</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Elena Rostova</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Marcus Bell (Idle)</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 font-mono text-[10px] text-zinc-500 flex items-center justify-between">
            <span>Socket.IO Engine</span>
            <span className="text-emerald-400 font-semibold">CONNECTED</span>
          </div>
        </div>

        {/* Right Chat Stream */}
        <div className="col-span-12 sm:col-span-8 bg-[#0C0C0F] p-4 flex flex-col justify-between space-y-3">
          <div className="space-y-2.5 overflow-y-auto max-h-[200px]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-lg bg-[#16161B] border border-white/5 font-mono text-[11px]"
              >
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className={`font-semibold ${m.isLead ? 'text-white' : 'text-cyan-400'}`}>
                    {m.sender}
                  </span>
                  <span className="text-[10px] text-zinc-500">{m.time}</span>
                </div>
                <p className="text-zinc-300 font-sans text-xs">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {/* Interactive message simulator */}
            <form
              onSubmit={handleSend}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Test Socket.IO broadcast..."
                className="flex-1 bg-[#16161B] border border-white/10 rounded px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
              />
              <button
                type="submit"
                className="px-2.5 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded hover:bg-emerald-500/30 transition-colors text-xs font-mono"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>

            <div className="p-2 rounded bg-[#16161B] border border-emerald-500/20 font-mono text-[10px] text-emerald-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-emerald-400" />
                Event payload broadcasted via Redis bus
              </span>
              <span className="text-zinc-400">0.014s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WaxWireMockup: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="rounded-xl overflow-hidden bg-[#0C0C0F] border border-white/10 shadow-2xl p-4 sm:p-6 space-y-4 hover:scale-[1.01] transition-transform duration-500 cursor-pointer text-left"
    >
      <div className="flex items-center justify-between pb-3 border-b border-white/5 font-mono text-xs text-zinc-400">
        <span className="text-white font-bold tracking-wider">WAX &amp; WIRE · CATALOG</span>
        <span className="text-cyan-400 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          RAZORPAY VERIFIED 200 OK
        </span>
      </div>

      {/* Product Highlight Card */}
      <div className="p-4 rounded-lg bg-[#141418] border border-white/5 flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:w-28 h-24 rounded-lg bg-[#1C1C22] border border-white/5 flex flex-col items-center justify-center text-zinc-400 relative overflow-hidden group">
          <span className="font-mono text-2xl font-bold text-cyan-400">1974</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500">Rhodes Mk I</span>
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent pointer-events-none" />
        </div>

        <div className="flex-1 space-y-1 w-full">
          <div className="flex items-center justify-between">
            <h4 className="font-sans font-bold text-white text-sm">Fender Rhodes Mark I (1974)</h4>
            <span className="font-mono text-xs text-cyan-400 font-semibold">₹1,85,000</span>
          </div>
          <p className="font-mono text-[11px] text-zinc-400">
            Fully serviced, original tines, stereo preamp stage.
          </p>
          <div className="pt-2 flex items-center justify-between font-mono text-[10px]">
            <span className="text-emerald-400">In Stock: 1 unit available</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white font-semibold">
              CART TOTAL: ₹1,85,000
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Telemetry Flow */}
      <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
        <div className="p-2.5 rounded bg-[#141418] border border-white/5 text-center">
          <div className="text-zinc-500">Address Step</div>
          <div className="text-white font-medium mt-0.5">Valid (Chennai)</div>
        </div>
        <div className="p-2.5 rounded bg-[#141418] border border-white/5 text-center">
          <div className="text-zinc-500">Razorpay Signature</div>
          <div className="text-emerald-400 font-medium mt-0.5">HMAC-SHA256 Match</div>
        </div>
        <div className="p-2.5 rounded bg-[#141418] border border-white/5 text-center">
          <div className="text-zinc-500">Webhook Dispatch</div>
          <div className="text-cyan-400 font-medium mt-0.5">Order Indexed</div>
        </div>
      </div>
    </div>
  );
};

export const ICRSMockup: React.FC = () => {
  return (
    <div className="p-3.5 rounded-lg bg-[#0C0C0F] border border-white/5 font-mono text-[11px] space-y-2 text-left">
      <div className="flex items-center justify-between text-zinc-400">
        <span className="text-white font-medium">Ticket #4092: Network Gateway Outage</span>
        <span className="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-500/30 text-[10px] font-semibold">
          CRITICAL
        </span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] text-zinc-500 gap-1">
        <span>NLP Sentiment: -0.84 (Urgent Distress)</span>
        <span className="text-purple-300">Auto-routed: Infrastructure Team</span>
      </div>
    </div>
  );
};

export const GidyMockup: React.FC = () => {
  return (
    <div className="p-3.5 rounded-lg bg-[#0C0C0F] border border-white/5 font-mono text-[11px] space-y-2 text-left">
      <div className="flex items-center justify-between text-zinc-400">
        <span className="text-white font-medium">Audit Index // 100,000+ Records</span>
        <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
          <FileSpreadsheet className="w-3 h-3" />
          CSV Stream Ready
        </span>
      </div>
      <div className="text-[10px] text-zinc-500 flex justify-between">
        <span>Index Query: execution_time &lt; 12ms</span>
        <span>Server Pagination: 25 / page</span>
      </div>
    </div>
  );
};
