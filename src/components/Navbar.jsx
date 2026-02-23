// src/components/Navbar.jsx
import React, { useState } from 'react';
import navbarLogo from '../assets/img/complete-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#servicios', label: '/ SERVICIOS' },
    { href: '#portafolio', label: '/ PORTAFOLIO' },
    { href: '#contacto', label: '/ CONTACTO' },
    { href: '#nosotros', label: '/ NOSOTROS' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 px-6 py-4 bg-neo-dark/80 backdrop-blur-md border-b border-neo-light/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter cursor-pointer flex flex-row">
          <a href="/">
            <img
              src={navbarLogo}
              alt="CapsuleLogo"
              className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.8)] hover:brightness-125"
            />
          </a>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-8 text-sm font-mono text-capsule-blue">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-neo-light transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-6 bg-capsule-blue transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-capsule-blue transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-capsule-blue transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 pt-4 pb-2 text-sm font-mono text-capsule-blue">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-neo-light transition-colors duration-300 pl-1"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;