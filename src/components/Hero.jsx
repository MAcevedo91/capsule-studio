// src/components/Hero.jsx
import React from 'react';
import heroTech from '../assets/hero-tech.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden">

      {/* Resplandor de fondo ambiental */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-capsule-blue/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-akira-red/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Layout de dos columnas */}
      <div className="z-10 w-full max-w-7xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda — Contenido */}
        <div className="flex flex-col items-start text-left">
          {/* Eslogan Técnico */}
          <p className="font-mono text-capsule-blue mb-6 tracking-[0.3em] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] text-sm md:text-base animate-neon-pulse">
            // DIGITAL CONSTRUCTS
          </p>

          {/* Titular Principal */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-neo-light mb-6 leading-tight">
            Sistemas Digitales para{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-akira-red to-red-600 drop-shadow-[0_0_15px_rgba(227,36,43,0.4)]">
              Negocios Locales
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg font-light">
            Diseño web profesional, rápido y sin complicaciones. Transforma visitantes en clientes mientras tú te enfocas en operar tu negocio.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 bg-akira-red text-neo-light font-bold uppercase tracking-wider rounded-sm hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(227,36,43,0.4)] hover:shadow-[0_0_30px_rgba(227,36,43,0.6)] hover:-translate-y-1">
              Cotizar Ahora
            </button>
            <button className="px-8 py-4 border border-capsule-blue text-capsule-blue font-bold uppercase tracking-wider rounded-sm hover:bg-capsule-blue/10 transition-all hover:-translate-y-1">
              Ver Portafolio
            </button>
          </div>
        </div>

        {/* Columna derecha — Imagen tecnológica */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Glow detrás de la imagen */}
          <div className="absolute inset-0 rounded-2xl bg-capsule-blue/5 blur-2xl"></div>

          <img
            src={heroTech}
            alt="Formas tecnológicas digitales"
            className="relative w-full max-w-lg rounded-2xl border border-capsule-blue/20 shadow-[0_0_60px_rgba(0,212,255,0.15)] object-cover animate-float"
          />

          {/* Badge decorativo */}
          <div className="absolute -bottom-4 -left-4 bg-neo-dark border border-capsule-blue/30 rounded-lg px-4 py-3 shadow-[0_0_20px_rgba(0,212,255,0.2)]">
            <p className="font-mono text-capsule-blue text-xs tracking-widest">// WEB_READY</p>
            <p className="text-neo-light text-sm font-bold mt-1">Listos para lanzar</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;