// src/components/Footer.jsx
import React from 'react';
import footerLogo from '../assets/img/complete-logo.png';
import { Reveal } from './ScrollReveal';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#contacto', label: 'Contacto' },
];

const Footer = () => {
  return (
    <footer className="bg-neo-dark border-t border-neo-light/10">

      {/* CTA strip */}
      <Reveal dir="up" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-neo-light/60 text-sm font-mono tracking-widest uppercase">
          Síguenos en nuestras redes
        </p>
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-sm border border-capsule-blue text-capsule-blue hover:bg-capsule-blue hover:text-neo-dark transition-all duration-300"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-sm border border-capsule-blue text-capsule-blue hover:bg-capsule-blue hover:text-neo-dark transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-sm border border-capsule-blue text-capsule-blue hover:bg-capsule-blue hover:text-neo-dark transition-all duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </Reveal>

      {/* Línea separadora */}
      <div className="border-t border-neo-light/5" />

      {/* Barra inferior */}
      <Reveal dir="up" delay={200} className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src={footerLogo}
            alt="Capsule Studio"
            className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </a>

        {/* Links */}
        <nav className="flex gap-6 flex-wrap justify-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs font-mono text-gray-500 hover:text-capsule-blue transition-colors duration-300 tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs font-mono text-gray-600 shrink-0">
          &copy; {new Date().getFullYear()} Capsule Studio
        </p>

      </Reveal>
    </footer>
  );
};

export default Footer;