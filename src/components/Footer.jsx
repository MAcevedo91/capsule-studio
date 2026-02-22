// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-neo-dark border-t border-neo-light/10 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
        
        {/* Columna 1: Marca */}
        <div>
          <div className="text-2xl font-bold tracking-tighter mb-4">
            <span className="text-neo-light">CAPSULE</span>
            <span className="text-akira-red">STUDIO</span>
          </div>
          <p className="text-gray-400 text-sm">
            Diseño y desarrollo web de alto rendimiento para negocios locales que buscan destacar.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="flex flex-col space-y-2 font-mono text-sm">
          <h4 className="text-neo-light font-bold font-sans mb-2 tracking-widest">NAVEGACIÓN</h4>
          <a href="#" className="text-capsule-blue hover:text-neo-light transition-colors">/ INICIO</a>
          <a href="#servicios" className="text-capsule-blue hover:text-neo-light transition-colors">/ SERVICIOS</a>
          <a href="#portafolio" className="text-capsule-blue hover:text-neo-light transition-colors">/ PORTAFOLIO</a>
        </div>

        {/* Columna 3: Contacto Directo */}
        <div>
          <h4 className="text-neo-light font-bold mb-4 tracking-widest">INICIA TU PROYECTO</h4>
          {/* Aquí puedes poner tu número real después */}
          <a 
            href="https://wa.me/56900000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-akira-red/10 border border-akira-red text-akira-red font-bold uppercase tracking-wider rounded-sm hover:bg-akira-red hover:text-neo-light transition-all duration-300"
          >
            Contactar por WhatsApp
          </a>
          <p className="text-gray-500 text-xs mt-4 text-center">
            Respuesta en menos de 24 horas.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-neo-light/5 pt-8">
        <p className="text-gray-500 text-xs font-mono">
          &copy; {new Date().getFullYear()} Capsule Studio. Digital Constructs. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;