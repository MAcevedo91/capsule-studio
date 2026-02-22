// src/components/CyberpunkAnimation.jsx
import React from 'react';

const CyberpunkAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center select-none overflow-hidden rounded-2xl">
      <style>{`
        /* Grid background scroll */
        @keyframes gridScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(40px); }
        }

        /* Scanline */
        @keyframes scanline {
          0%   { top: -2%; opacity: 0.8; }
          100% { top: 102%; opacity: 0.2; }
        }

        /* Scanline flicker */
        @keyframes flicker {
          0%,100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.4; } 94% { opacity: 1; }
        }

        /* Floating cards */
        @keyframes cardFloat1 {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-10px); }
        }
        @keyframes cardFloat2 {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-7px);  }
        }

        /* Bar chart grow */
        @keyframes barGrow1 { 0%,100% { height: 28px; } 50% { height: 40px; } }
        @keyframes barGrow2 { 0%,100% { height: 40px; } 50% { height: 22px; } }
        @keyframes barGrow3 { 0%,100% { height: 34px; } 50% { height: 50px; } }
        @keyframes barGrow4 { 0%,100% { height: 20px; } 50% { height: 36px; } }
        @keyframes barGrow5 { 0%,100% { height: 44px; } 50% { height: 28px; } }

        /* Pulse dot */
        @keyframes pulseDot {
          0%,100% { r: 3; opacity: 1; }
          50%      { r: 5; opacity: 0.5; }
        }

        /* Data packet travel along path */
        @keyframes packetA {
          0%   { offset-distance: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes packetB {
          0%   { offset-distance: 0%;   opacity: 0; }
          5%   { opacity: 1; }
          95%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }

        /* City building glow */
        @keyframes cityGlow {
          0%,100% { filter: drop-shadow(0 0 4px rgba(0,212,255,0.3)); }
          50%      { filter: drop-shadow(0 0 10px rgba(0,212,255,0.7)); }
        }

        /* Window blink in buildings */
        @keyframes winBlink {
          0%,100% { opacity: 1; }
          30%      { opacity: 0.2; }
          31%      { opacity: 1; }
          60%      { opacity: 1; }
          61%      { opacity: 0.3; }
          62%      { opacity: 1; }
        }

        /* Counter count-up effect via opacity/transform */
        @keyframes countUp {
          0%   { opacity: 0; transform: translateY(6px); }
          20%  { opacity: 1; transform: translateY(0); }
          80%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }

        /* Neon label blink */
        @keyframes neonBlink {
          0%,100% { opacity: 1; } 49% { opacity: 1; } 50% { opacity: 0; } 99% { opacity: 0; }
        }

        /* Network node pulse */
        @keyframes nodePulse {
          0%,100% { stroke-width: 1.5; stroke-opacity: 0.7; }
          50%      { stroke-width: 3;   stroke-opacity: 1;   }
        }

        /* ── Apply ── */
        .cb-scanline   { animation: scanline 4s linear infinite; }
        .cb-flicker    { animation: flicker 8s linear infinite; }
        .cb-card1      { animation: cardFloat1 5s ease-in-out infinite; }
        .cb-card2      { animation: cardFloat2 6s ease-in-out infinite 1s; }
        .cb-bar1       { animation: barGrow1 2.4s ease-in-out infinite 0.0s; }
        .cb-bar2       { animation: barGrow2 2.4s ease-in-out infinite 0.3s; }
        .cb-bar3       { animation: barGrow3 2.4s ease-in-out infinite 0.6s; }
        .cb-bar4       { animation: barGrow4 2.4s ease-in-out infinite 0.9s; }
        .cb-bar5       { animation: barGrow5 2.4s ease-in-out infinite 1.2s; }
        .cb-pdot       { animation: pulseDot 2s ease-in-out infinite; }
        .cb-pkt1       { animation: packetA 2.6s linear infinite 0.0s; }
        .cb-pkt2       { animation: packetB 2.6s linear infinite 1.3s; }
        .cb-pkt3       { animation: packetA 3.2s linear infinite 0.5s; }
        .cb-pkt4       { animation: packetB 3.2s linear infinite 2.0s; }
        .cb-city       { animation: cityGlow 3s ease-in-out infinite; }
        .cb-win        { animation: winBlink 5s step-start infinite; }
        .cb-win2       { animation: winBlink 5s step-start infinite 1.8s; }
        .cb-count      { animation: countUp 3s ease-in-out infinite; }
        .cb-live       { animation: neonBlink 1.4s step-start infinite; }
        .cb-node       { animation: nodePulse 2s ease-in-out infinite; }
        .cb-node2      { animation: nodePulse 2s ease-in-out infinite 0.7s; }
        .cb-node3      { animation: nodePulse 2s ease-in-out infinite 1.4s; }
      `}</style>

      {/* ── Dark background ── */}
      <div className="absolute inset-0 bg-[#080a12]" />

      {/* ── Scrolling grid ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="cb-flicker absolute"
          style={{
            top: '-40px', left: 0, right: 0, bottom: 0,
            backgroundImage: `linear-gradient(rgba(0,212,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.07) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            animation: 'gridScroll 3s linear infinite',
          }}
        />
      </div>

      {/* ── Scanline ── */}
      <div
        className="cb-scanline absolute left-0 right-0 h-[2px] pointer-events-none z-30"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)' }}
      />

      {/* ── Main SVG ── */}
      <svg viewBox="0 0 420 500" className="relative w-full h-full z-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="gBlue" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gRed" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gSoft" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="12"/>
          </filter>
          <filter id="gCard" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#00d4ff" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#080a12" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="buildGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#0d1a2a"/>
            <stop offset="100%" stopColor="#060810"/>
          </linearGradient>
          <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#0a1628" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#06101e" stopOpacity="0.95"/>
          </linearGradient>
          <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#1a0a10" stopOpacity="0.95"/>
            <stop offset="100%" stopColor="#0e0609" stopOpacity="0.95"/>
          </linearGradient>

          {/* Data packet paths */}
          <path id="pathA" d="M210,330 Q100,280 60,200"/>
          <path id="pathB" d="M210,330 Q320,270 360,180"/>
          <path id="pathC" d="M60,200 Q40,140 80,90"/>
          <path id="pathD" d="M360,180 Q380,120 340,80"/>
        </defs>

        {/* ── Ambient glow ── */}
        <ellipse cx="210" cy="320" rx="160" ry="80" fill="#00d4ff" opacity="0.04" filter="url(#gSoft)"/>
        <ellipse cx="210" cy="200" rx="200" ry="120" fill="url(#skyGrad)"/>

        {/* ═══════════════════════════════════════
            CITY SKYLINE
        ═══════════════════════════════════════ */}
        <g className="cb-city">
          {/* Building 1 — far left */}
          <rect x="0"   y="340" width="35" height="160" fill="url(#buildGrad)" rx="1"/>
          <rect x="5"   y="310" width="25" height="35"  fill="url(#buildGrad)" rx="1"/>
          {/* windows */}
          <rect className="cb-win"  x="8"  y="318" width="5" height="4" fill="#00d4ff" fillOpacity="0.6"/>
          <rect className="cb-win2" x="17" y="318" width="5" height="4" fill="#00d4ff" fillOpacity="0.4"/>
          <rect x="8"  y="350" width="5" height="4" fill="#00d4ff" fillOpacity="0.3"/>
          <rect x="17" y="350" width="5" height="4" fill="#00d4ff" fillOpacity="0.5"/>
          <rect className="cb-win"  x="8"  y="365" width="5" height="4" fill="#00d4ff" fillOpacity="0.3"/>
          <rect x="17" y="365" width="5" height="4" fill="#e3242b" fillOpacity="0.4"/>

          {/* Building 2 */}
          <rect x="40"  y="290" width="45" height="210" fill="url(#buildGrad)" rx="1"/>
          <rect x="47"  y="270" width="30" height="25"  fill="url(#buildGrad)" rx="1"/>
          <line x1="62" y1="270" x2="62" y2="262" stroke="#e3242b" strokeWidth="1.5" strokeOpacity="0.8"/>
          <circle cx="62" cy="261" r="2.5" fill="#e3242b" filter="url(#gRed)"/>
          {/* windows grid */}
          {[295, 310, 325, 340, 355, 370, 385].map((y, i) => (
            <g key={i}>
              <rect x="47" y={y} width="6" height="5" fill="#00d4ff" fillOpacity={i % 2 ? 0.5 : 0.2}/>
              <rect x="57" y={y} width="6" height="5" fill="#00d4ff" fillOpacity={i % 3 ? 0.3 : 0.6}/>
              <rect x="67" y={y} width="6" height="5" fill="#e3242b" fillOpacity={i % 2 ? 0.2 : 0.5}/>
            </g>
          ))}

          {/* Building 3 — center-left tall */}
          <rect x="95"  y="240" width="55" height="260" fill="url(#buildGrad)" rx="1"/>
          <rect x="105" y="220" width="35" height="25"  fill="url(#buildGrad)" rx="1"/>
          <line x1="122" y1="220" x2="122" y2="210" stroke="#00d4ff" strokeWidth="2" strokeOpacity="0.9"/>
          <circle cx="122" cy="209" r="3" fill="#00d4ff" filter="url(#gBlue)"/>
          {[248, 264, 280, 296, 312, 328, 344, 360, 376, 392].map((y, i) => (
            <g key={i}>
              <rect x="100" y={y} width="7" height="6" fill="#00d4ff" fillOpacity={0.2 + (i%3)*0.2}/>
              <rect x="112" y={y} width="7" height="6" fill="#00d4ff" fillOpacity={0.3 + (i%2)*0.2}/>
              <rect x="124" y={y} width="7" height="6" fill="#e3242b" fillOpacity={0.1 + (i%4)*0.15}/>
              <rect x="136" y={y} width="7" height="6" fill="#00d4ff" fillOpacity={0.4 - (i%3)*0.1}/>
            </g>
          ))}

          {/* Building 4 — center-right */}
          <rect x="260" y="270" width="50" height="230" fill="url(#buildGrad)" rx="1"/>
          <rect x="268" y="252" width="34" height="22"  fill="url(#buildGrad)" rx="1"/>
          <line x1="285" y1="252" x2="285" y2="242" stroke="#e3242b" strokeWidth="1.5" strokeOpacity="0.8"/>
          <circle cx="285" cy="241" r="2.5" fill="#e3242b" filter="url(#gRed)"/>
          {[278, 294, 310, 326, 342, 358, 374, 390].map((y, i) => (
            <g key={i}>
              <rect x="265" y={y} width="6" height="5" fill="#00d4ff" fillOpacity={0.3+(i%3)*0.15}/>
              <rect x="275" y={y} width="6" height="5" fill="#e3242b" fillOpacity={0.2+(i%2)*0.2}/>
              <rect x="285" y={y} width="6" height="5" fill="#00d4ff" fillOpacity={0.4-(i%4)*0.1}/>
              <rect x="295" y={y} width="6" height="5" fill="#00d4ff" fillOpacity={0.2+(i%3)*0.1}/>
            </g>
          ))}

          {/* Building 5 — right */}
          <rect x="320" y="310" width="40" height="190" fill="url(#buildGrad)" rx="1"/>
          {[318, 334, 350, 366, 382, 398].map((y, i) => (
            <g key={i}>
              <rect x="325" y={y} width="5" height="5" fill="#00d4ff" fillOpacity={0.4-(i%3)*0.1}/>
              <rect x="334" y={y} width="5" height="5" fill="#e3242b" fillOpacity={0.2+(i%2)*0.2}/>
              <rect className="cb-win2" x="343" y={y} width="5" height="5" fill="#00d4ff" fillOpacity={0.3}/>
            </g>
          ))}

          {/* Building 6 — far right */}
          <rect x="370" y="330" width="50" height="170" fill="url(#buildGrad)" rx="1"/>
          <rect x="378" y="310" width="33" height="24"  fill="url(#buildGrad)" rx="1"/>
          {[338, 354, 370, 386].map((y, i) => (
            <g key={i}>
              <rect className="cb-win" x="378" y={y} width="5" height="5" fill="#00d4ff" fillOpacity={0.5}/>
              <rect x="387" y={y} width="5" height="5" fill="#e3242b" fillOpacity={0.3}/>
              <rect x="396" y={y} width="5" height="5" fill="#00d4ff" fillOpacity={0.4}/>
            </g>
          ))}
        </g>

        {/* Ground line */}
        <line x1="0" y1="500" x2="420" y2="500" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.3"/>
        {/* Horizon glow */}
        <rect x="0" y="495" width="420" height="5" fill="#00d4ff" fillOpacity="0.15" filter="url(#gBlue)"/>

        {/* ═══════════════════════════════════════
            NETWORK — Nodes + connections
        ═══════════════════════════════════════ */}
        {/* Connections */}
        <line x1="60"  y1="200"  x2="210" y2="330" stroke="#00d4ff" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 5"/>
        <line x1="360" y1="180"  x2="210" y2="330" stroke="#00d4ff" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="4 5"/>
        <line x1="60"  y1="200"  x2="80"  y2="90"  stroke="#00d4ff" strokeWidth="0.8" strokeOpacity="0.2"  strokeDasharray="3 6"/>
        <line x1="360" y1="180"  x2="340" y2="80"  stroke="#e3242b" strokeWidth="0.8" strokeOpacity="0.2"  strokeDasharray="3 6"/>
        <line x1="60"  y1="200"  x2="360" y2="180" stroke="#00d4ff" strokeWidth="0.6" strokeOpacity="0.15" strokeDasharray="2 8"/>

        {/* Data packets moving along paths */}
        <circle className="cb-pkt1" r="4" fill="#00d4ff" filter="url(#gBlue)"
          style={{ offsetPath: "path('M210,330 Q100,280 60,200')" }}/>
        <circle className="cb-pkt2" r="3" fill="#00d4ff" filter="url(#gBlue)"
          style={{ offsetPath: "path('M210,330 Q100,280 60,200')" }}/>
        <circle className="cb-pkt3" r="4" fill="#e3242b" filter="url(#gRed)"
          style={{ offsetPath: "path('M210,330 Q320,270 360,180')" }}/>
        <circle className="cb-pkt4" r="3" fill="#e3242b" filter="url(#gRed)"
          style={{ offsetPath: "path('M210,330 Q320,270 360,180')" }}/>

        {/* Hub node — center */}
        <circle cx="210" cy="330" r="10" fill="#0d0e15" stroke="#00d4ff" strokeWidth="2" filter="url(#gBlue)"/>
        <circle cx="210" cy="330" r="4"  fill="#00d4ff" filter="url(#gBlue)"/>
        <circle className="cb-pdot" cx="210" cy="330" r="3" fill="#00d4ff"/>

        {/* Left node */}
        <circle className="cb-node"  cx="60"  cy="200" r="7"  fill="#0d0e15" stroke="#00d4ff" strokeWidth="1.5" filter="url(#gBlue)"/>
        <circle cx="60"  cy="200" r="2.5" fill="#00d4ff" filter="url(#gBlue)"/>

        {/* Right node */}
        <circle className="cb-node2" cx="360" cy="180" r="7"  fill="#0d0e15" stroke="#e3242b" strokeWidth="1.5" filter="url(#gRed)"/>
        <circle cx="360" cy="180" r="2.5" fill="#e3242b" filter="url(#gRed)"/>

        {/* Top-left node */}
        <circle className="cb-node3" cx="80"  cy="90"  r="6"  fill="#0d0e15" stroke="#00d4ff" strokeWidth="1.5" filter="url(#gBlue)"/>
        <circle cx="80"  cy="90"  r="2"   fill="#00d4ff" filter="url(#gBlue)"/>

        {/* Top-right node */}
        <circle className="cb-node"  cx="340" cy="80"  r="6"  fill="#0d0e15" stroke="#e3242b" strokeWidth="1.5" filter="url(#gRed)"/>
        <circle cx="340" cy="80"  r="2"   fill="#e3242b" filter="url(#gRed)"/>

        {/* ═══════════════════════════════════════
            FLOATING UI CARD 1 — Sales chart (left)
        ═══════════════════════════════════════ */}
        <g className="cb-card1" style={{ transformOrigin: '75px 160px' }}>
          <rect x="10" y="120" width="130" height="80" rx="4" fill="url(#cardGrad1)"
            stroke="#00d4ff" strokeWidth="0.8" strokeOpacity="0.5" filter="url(#gCard)"/>
          {/* Header */}
          <text x="18" y="134" fontFamily="'Fira Code',monospace" fontSize="7" fill="#00d4ff" fillOpacity="0.7">VENTAS · REAL TIME</text>
          <circle className="cb-live" cx="128" cy="131" r="3" fill="#00d4ff" filter="url(#gBlue)"/>
          {/* Bar chart */}
          <g transform="translate(18, 190)">
            <rect className="cb-bar1" x="0"  y="-28" width="14" height="28" fill="#00d4ff" fillOpacity="0.6" rx="1"/>
            <rect className="cb-bar2" x="18" y="-40" width="14" height="40" fill="#00d4ff" fillOpacity="0.8" rx="1"/>
            <rect className="cb-bar3" x="36" y="-34" width="14" height="34" fill="#00d4ff" fillOpacity="0.6" rx="1"/>
            <rect className="cb-bar4" x="54" y="-20" width="14" height="20" fill="#e3242b" fillOpacity="0.7" rx="1"/>
            <rect className="cb-bar5" x="72" y="-44" width="14" height="44" fill="#00d4ff" fillOpacity="0.9" rx="1" filter="url(#gBlue)"/>
            <rect className="cb-bar1" x="90" y="-34" width="14" height="34" fill="#00d4ff" fillOpacity="0.7" rx="1"/>
          </g>
          {/* Counter */}
          <g className="cb-count" style={{ transformOrigin: '75px 145px' }}>
            <text x="18" y="147" fontFamily="'Fira Code',monospace" fontSize="9" fill="#00d4ff" fontWeight="bold">+$12.4K</text>
          </g>
        </g>

        {/* ═══════════════════════════════════════
            FLOATING UI CARD 2 — Metrics (right)
        ═══════════════════════════════════════ */}
        <g className="cb-card2" style={{ transformOrigin: '345px 145px' }}>
          <rect x="280" y="100" width="130" height="90" rx="4" fill="url(#cardGrad2)"
            stroke="#e3242b" strokeWidth="0.8" strokeOpacity="0.5" filter="url(#gCard)"/>
          {/* Header */}
          <text x="288" y="114" fontFamily="'Fira Code',monospace" fontSize="7" fill="#e3242b" fillOpacity="0.7">CLIENTES · ACTIVOS</text>
          <circle className="cb-live" cx="398" cy="111" r="3" fill="#e3242b" filter="url(#gRed)"/>
          {/* Metric rows */}
          <text x="288" y="132" fontFamily="'Fira Code',monospace" fontSize="8"  fill="#f8f9fa" fillOpacity="0.9">Nuevos usuarios</text>
          <text x="288" y="145" fontFamily="'Fira Code',monospace" fontSize="11" fill="#00d4ff" fontWeight="bold" filter="url(#gBlue)">+247</text>
          <line x1="288" y1="152" x2="400" y2="152" stroke="#e3242b" strokeWidth="0.5" strokeOpacity="0.4"/>
          <text x="288" y="165" fontFamily="'Fira Code',monospace" fontSize="8"  fill="#f8f9fa" fillOpacity="0.9">Conversión web</text>
          <text x="288" y="178" fontFamily="'Fira Code',monospace" fontSize="11" fill="#e3242b" fontWeight="bold" filter="url(#gRed)">68.3%</text>
        </g>

        {/* ═══════════════════════════════════════
            HUD corner labels
        ═══════════════════════════════════════ */}
        <text x="8"   y="16"  fontFamily="'Fira Code',monospace" fontSize="8" fill="#00d4ff" fillOpacity="0.6">SYS:ONLINE</text>
        <text className="cb-live" x="336" y="16" fontFamily="'Fira Code',monospace" fontSize="8" fill="#e3242b">▮ LIVE</text>
        <text x="8"   y="494" fontFamily="'Fira Code',monospace" fontSize="7" fill="#00d4ff" fillOpacity="0.4">CAPSULE_STUDIO v4.2</text>
        <text x="294" y="494" fontFamily="'Fira Code',monospace" fontSize="7" fill="#00d4ff" fillOpacity="0.4">NET:SECURED</text>

        {/* Corner brackets */}
        <polyline points="6,26 6,6 26,6"     stroke="#00d4ff" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
        <polyline points="394,6 414,6 414,26" stroke="#e3242b" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
        <polyline points="6,474 6,494 26,494" stroke="#e3242b" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
        <polyline points="394,494 414,494 414,474" stroke="#00d4ff" strokeWidth="1.5" fill="none" strokeOpacity="0.6"/>
      </svg>
    </div>
  );
};

export default CyberpunkAnimation;
