import React from 'react';
import { Reveal } from './ScrollReveal';

const Services = () => {
  const packages = [
    {
      name: "Terminal de Ventas",
      tag: "// ALTA CONVERSIÓN",
      description: "Despliegue rápido enfocado en maximizar conversiones y captar prospectos con la menor fricción posible.",
      features: [
        "Landing page de alto rendimiento",
        "Diseño UX optimizado para móvil",
        "Pipeline directo a WhatsApp",
        "Velocidad de carga milimétrica"
      ],
      highlight: false,
      cta: "Solicitar Diagnóstico"
    },
    {
      name: "Ecosistema de Negocio",
      tag: "// PRESENCIA INTEGRAL",
      description: "Arquitectura digital completa para estructurar la autoridad de tu marca y consolidar tu catálogo de servicios.",
      features: [
        "Desarrollo multi-sección",
        "Sistemas de contacto inteligentes",
        "Integración de Menú o Catálogo",
        "Optimización de presencia local (SEO)"
      ],
      highlight: true, 
      cta: "Evaluar Implementación"
    },
    {
      name: "Optimización de Flujo",
      tag: "// SOFTWARE A MEDIDA",
      description: "Soluciones de ingeniería diseñadas para automatizar cuellos de botella operativos y sustituir procesos manuales.",
      features: [
        "Análisis de cuellos de botella",
        "Desarrollo de herramientas internas",
        "Manejo de bases de datos",
        "Mantenimiento de infraestructura"
      ],
      highlight: false,
      cta: "Agendar Consultoría"
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-neo-dark border-t border-neo-light/5">
      <div className="max-w-6xl mx-auto">
        <Reveal dir="down" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neo-light mb-4">
            Modelos de <span className="text-capsule-blue">Implementación</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm animate-neon-pulse">// INGENIERÍA APLICADA AL CRECIMIENTO</p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Reveal
              key={index}
              dir="up"
              delay={index * 150}
              className={`p-8 bg-neo-dark border ${pkg.highlight ? 'border-akira-red shadow-[0_0_15px_rgba(227,36,43,0.2)]' : 'border-neo-light/10'} rounded-lg flex flex-col group hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="mb-6">
                <p className={`font-mono text-xs tracking-widest mb-3 ${pkg.highlight ? 'text-akira-red' : 'text-capsule-blue'}`}>
                  {pkg.tag}
                </p>
                <h3 className="text-2xl font-bold text-neo-light mb-3">{pkg.name}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{pkg.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8 grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm">
                    <span className={`mr-3 shrink-0 ${pkg.highlight ? 'text-akira-red' : 'text-capsule-blue'}`}>❯</span> 
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className={`block text-center w-full py-3 font-bold tracking-wider uppercase transition-colors rounded-sm ${pkg.highlight ? 'bg-akira-red text-neo-light hover:bg-red-600' : 'bg-transparent border border-capsule-blue text-capsule-blue hover:bg-capsule-blue hover:text-neo-dark'}`}>
                {pkg.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;