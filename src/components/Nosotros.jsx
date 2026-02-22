// src/components/Nosotros.jsx
import React, { useEffect, useRef, useState } from 'react';

/* ── Hook: fires once when element enters viewport ── */
const useVisible = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ── Animated wrapper: Tailwind transitions + staggered delay ── */
const Reveal = ({ children, delay = 0, dir = 'up', className = '' }) => {
  const [ref, visible] = useVisible();
  const base = 'transition-all duration-500 ease-out';
  const dirs = {
    up:    { from: 'opacity-0 translate-y-6',  to: 'opacity-100 translate-y-0' },
    left:  { from: 'opacity-0 -translate-x-8', to: 'opacity-100 translate-x-0' },
    right: { from: 'opacity-0 translate-x-8',  to: 'opacity-100 translate-x-0' },
    down:  { from: 'opacity-0 -translate-y-6', to: 'opacity-100 translate-y-0' },
  };
  const { from, to } = dirs[dir] || dirs.up;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${visible ? to : from} ${className}`}
    >
      {children}
    </div>
  );
};

/* ── Data ── */
const misionPoints = [
  'Los negocios locales merecen presencia digital de primer nivel.',
  'Combinamos diseño de vanguardia con tecnología moderna.',
  'Llevamos tu negocio al siguiente nivel, sin burocracia de grandes agencias.',
  'Construimos contigo, no solo para ti.',
];

const MisionList = () => {
  const [ref, visible] = useVisible(0.3);
  return (
    <ul ref={ref} className="space-y-3 mt-3">
      {misionPoints.map((point, i) => (
        <li
          key={i}
          className="flex items-start gap-3 transition-all duration-500 ease-out"
          style={{
            transitionDelay: `${i * 150}ms`,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-16px)',
          }}
        >
          <span className="mt-[6px] shrink-0 w-2 h-2 rounded-full bg-capsule-blue shadow-[0_0_6px_rgba(0,212,255,0.8)]" />
          <span className="text-gray-400 leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>
  );
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.3 24.3 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.572 1.572A6.75 6.75 0 0 1 12 18.75a6.75 6.75 0 0 1-6.228-2.178L4.2 15m15.6 0-1.5 1.5M4.2 15l1.5 1.5" />
      </svg>
    ),
    label: 'Resultados reales',
    desc: 'Cada proyecto está diseñado para generar impacto medible en tu negocio.',
    color: 'text-capsule-blue', border: 'border-capsule-blue/20', glow: 'rgba(0,212,255,0.15)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    label: 'Velocidad de entrega',
    desc: 'Lanzamos sitios funcionales y optimizados en tiempos que sorprenden.',
    color: 'text-akira-red', border: 'border-akira-red/20', glow: 'rgba(227,36,43,0.15)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    label: 'Tecnología de punta',
    desc: 'Usamos las herramientas más modernas para construir presencias digitales robustas.',
    color: 'text-capsule-blue', border: 'border-capsule-blue/20', glow: 'rgba(0,212,255,0.15)',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    label: 'Soporte continuo',
    desc: 'No desaparecemos al entregar: somos tu aliado digital a largo plazo.',
    color: 'text-akira-red', border: 'border-akira-red/20', glow: 'rgba(227,36,43,0.15)',
  },
];

const stats = [
  { value: '+50', label: 'Proyectos completados' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '+3',  label: 'Años de experiencia' },
  { value: '24h', label: 'Tiempo de respuesta' },
];

const Nosotros = () => {
  return (
    <section id="nosotros" className="relative py-28 px-6 md:px-16 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-capsule-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-akira-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <Reveal dir="down" delay={0} className="mb-16 text-center">
          <p className="font-mono text-capsule-blue tracking-[0.3em] text-sm mb-4 drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]">
            // QUIÉNES SOMOS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neo-light mb-4">
            Construimos el futuro{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-akira-red to-red-600">
              digital de tu negocio
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Somos un estudio de desarrollo web especializado en transformar negocios locales
            en marcas digitales sólidas, ágiles y preparadas para competir.
          </p>
        </Reveal>

        {/* ── Main content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — Story */}
          <div className="space-y-6">
            {/* Mission */}
            <Reveal dir="left" delay={100}>
              <div className="border-l-2 border-capsule-blue pl-6">
                <h3 className="text-2xl font-bold text-neo-light mb-3">Nuestra misión</h3>
                <MisionList />
              </div>
            </Reveal>

            {/* Focus */}
            <Reveal dir="left" delay={200}>
              <div className="border-l-2 border-akira-red pl-6">
                <h3 className="text-2xl font-bold text-neo-light mb-3">Nuestro enfoque</h3>
                <p className="text-gray-400 leading-relaxed">
                  Cada proyecto arranca con un diagnóstico real. Escuchamos, analizamos
                  y ejecutamos con precisión quirúrgica. No vendemos plantillas —
                  construimos soluciones digitales a medida que convierten visitantes en clientes.
                </p>
              </div>
            </Reveal>

            {/* Terminal */}
            <Reveal dir="left" delay={300}>
              <div className="bg-[#0a0d16] border border-capsule-blue/20 rounded-lg p-5 font-mono text-sm">
                <p className="text-capsule-blue/60 mb-1">{'// filosofia.js'}</p>
                <p className="text-gray-500">{'const mision = () => {'}</p>
                <p className="text-neo-light ml-4">
                  return{' '}
                  <span className="text-akira-red">"</span>
                  <span className="text-capsule-blue">Código limpio,</span>
                  {' '}
                  <span className="text-neo-light">resultados reales</span>
                  <span className="text-akira-red">"</span>;
                </p>
                <p className="text-gray-500">{'};'}</p>
              </div>
            </Reveal>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={i} dir="right" delay={i * 100}>
                <div
                  className="bg-[#0a0d16] border border-capsule-blue/15 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-capsule-blue/40 transition-all duration-300"
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                >
                  <span
                    className="text-4xl font-extrabold font-mono mb-2 text-transparent bg-clip-text"
                    style={{ backgroundImage: i % 2 ? 'linear-gradient(to right, #e3242b, #ff6b6b)' : 'linear-gradient(to right, #00d4ff, #0088cc)' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-gray-400 text-sm leading-tight">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Values label ── */}
        <Reveal dir="up" delay={0}>
          <p className="font-mono text-capsule-blue/60 text-xs tracking-widest text-center mb-8">
            // NUESTROS_VALORES
          </p>
        </Reveal>

        {/* ── Values grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <Reveal key={i} dir="up" delay={i * 100}>
              <div
                className={`h-full bg-[#0a0d16] border ${v.border} rounded-xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-all duration-300`}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 24px ${v.glow}`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <span className={v.color}>{v.icon}</span>
                <div>
                  <p className="text-neo-light font-bold mb-1">{v.label}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Nosotros;
