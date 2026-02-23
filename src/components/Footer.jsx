// src/components/Footer.jsx
import React from 'react';
import footerLogo from '../assets/img/complete-logo.png';

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

const Footer = () => {
  return (
    <footer className="bg-neo-dark border-t border-neo-light/10">

      {/* CTA strip */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-neo-light/60 text-sm font-mono tracking-widest uppercase">
          ¿Listo para tu próximo proyecto?
        </p>
        <a
          href="https://wa.me/56900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 border border-capsule-blue text-capsule-blue text-sm font-mono tracking-wider rounded-sm hover:bg-capsule-blue hover:text-neo-dark transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.5l5.803-1.522A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.867 9.867 0 012.118 12C2.118 6.534 6.534 2.118 12 2.118S21.882 6.534 21.882 12 17.466 21.882 12 21.882z"/>
          </svg>
          Hablemos
        </a>
      </div>

      {/* Línea separadora */}
      <div className="border-t border-neo-light/5" />

      {/* Barra inferior */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

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

      </div>
    </footer>
  );
};

export default Footer;