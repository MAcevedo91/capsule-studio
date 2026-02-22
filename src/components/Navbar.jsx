// src/components/Navbar.jsx
import React from 'react';
import navbarLogo from '../assets/img/complete-logo.png'

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 bg-neo-dark/80 backdrop-blur-md border-b border-neo-light/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo Textual */}
        <div className="text-2xl font-bold tracking-tighter cursor-pointer flex flex-row">
          <a href="/">
            <img 
              src={navbarLogo} 
              alt="CapsuleLogo" 
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] hover:brightness-125"
            />
          </a>
        </div>

        {/* Enlaces de Navegación (Ocultos en móvil por ahora) */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-capsule-blue">
          <a href="#servicios" className="hover:text-neo-light transition-colors duration-300">/ SERVICIOS</a>
          <a href="#portafolio" className="hover:text-neo-light transition-colors duration-300">/ PORTAFOLIO</a>
          <a href="#contacto" className="hover:text-neo-light transition-colors duration-300">/ CONTACTO</a>
        </div>

        {/* Botón CTA (Call to Action) */}
        <button className="hidden md:block px-6 py-2 bg-akira-red text-neo-light font-bold uppercase tracking-wider rounded-sm hover:bg-red-600 transition-colors shadow-[0_0_15px_rgba(227,36,43,0.3)] hover:shadow-[0_0_25px_rgba(227,36,43,0.5)]">
          Iniciar Proyecto
        </button>

      </div>
    </nav>
  );
};

export default Navbar;