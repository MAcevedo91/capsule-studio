// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const packages = [
    {
      name: "Landing Page",
      price: "Desde $150.000",
      description: "Ideal para negocios que ofrecen un servicio específico y buscan captar clientes rápido.",
      features: [
        "Página única (One-Pager)",
        "Diseño adaptado a celulares",
        "Botón directo a WhatsApp",
        "Optimización de velocidad"
      ],
      highlight: false
    },
    {
      name: "Sitio Corporativo",
      price: "Desde $250.000",
      description: "Presencia digital completa y estructurada para establecer autoridad en tu rubro.",
      features: [
        "Hasta 5 secciones",
        "Formulario de contacto",
        "Galería o Catálogo",
        "Integración con Google Maps"
      ],
      highlight: true // Usaremos esto para destacar el paquete intermedio
    },
    {
      name: "Mantenimiento",
      price: "$20.000 / mes",
      description: "Tú operas tu negocio, yo me encargo de que tu web sea rápida y nunca se caiga.",
      features: [
        "Hosting de alta velocidad",
        "Dominio .cl incluido",
        "Certificado de Seguridad SSL",
        "Actualizaciones menores"
      ],
      highlight: false
    }
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-neo-dark border-t border-neo-light/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neo-light mb-4">
            Soluciones a tu <span className="text-capsule-blue">Medida</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm animate-neon-pulse">// PRECIOS CLAROS, SIN SORPRESAS</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-blurred-fade-in">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`p-8 bg-neo-dark border ${pkg.highlight ? 'border-akira-red shadow-[0_0_15px_rgba(227,36,43,0.2)]' : 'border-neo-light/10'} rounded-sm flex flex-col`}
            >
              <h3 className="text-2xl font-bold text-neo-light mb-2">{pkg.name}</h3>
              <p className="text-3xl font-mono text-capsule-blue mb-4">{pkg.price}</p>
              <p className="text-gray-400 mb-8 grow">{pkg.description}</p>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <span className="text-akira-red mr-2">❯</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 font-bold tracking-wider uppercase transition-colors ${pkg.highlight ? 'bg-akira-red text-neo-light hover:bg-red-600' : 'bg-transparent border border-capsule-blue text-capsule-blue hover:bg-capsule-blue/10'}`}>
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;