// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      
      {/* Resplandor de fondo ambiental (Efecto visual) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-capsule-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="z-10 max-w-4xl mt-20">
        {/* Eslogan Técnico */}
        <p className="font-mono text-capsule-blue mb-6 tracking-[0.3em] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] text-sm md:text-base animate-neon-pulse">
          // DIGITAL CONSTRUCTS
        </p>

        {/* Titular Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-neo-light mb-6 leading-tight">
          Sistemas Digitales para <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-akira-red to-red-600 drop-shadow-[0_0_15px_rgba(227,36,43,0.4)]">
            Negocios Locales
          </span>
        </h1>

        {/* Subtítulo (La propuesta de valor) */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
          Diseño web profesional, rápido y sin complicaciones. Transforma visitantes en clientes mientras tú te enfocas en operar tu negocio.
        </p>
        
        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto px-8 py-4 bg-akira-red text-neo-light font-bold uppercase tracking-wider rounded-sm hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(227,36,43,0.4)] hover:shadow-[0_0_30px_rgba(227,36,43,0.6)] hover:-translate-y-1">
            Cotizar Ahora
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border border-capsule-blue text-capsule-blue font-bold uppercase tracking-wider rounded-sm hover:bg-capsule-blue/10 transition-all hover:-translate-y-1">
            Ver Portafolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;