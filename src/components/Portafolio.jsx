// src/components/Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Flowly Dashboard",
      category: "Aplicación de Gestión",
      description: "Panel de control moderno con autenticación segura y una interfaz fluida para la administración de datos.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Love Quiz",
      category: "Web App Interactiva",
      description: "Plataforma dinámica diseñada para alta interacción de usuarios con tiempos de carga optimizados.",
      tech: ["Next.js", "Supabase", "Tailwind"]
    },
    {
      title: "Eco-Alerta",
      category: "Sistema de Monitoreo",
      description: "Plataforma con arquitectura escalable enfocada en el rendimiento y la experiencia de usuario.",
      tech: ["Arquitectura Web", "BPMN"]
    }
  ];

  return (
    <section id="portafolio" className="py-24 px-6 bg-neo-dark/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-neo-light mb-4">
            Código en <span className="text-akira-red">Acción</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">// SISTEMAS CONSTRUIDOS PREVIAMENTE</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-neo-dark border border-neo-light/10 overflow-hidden hover:border-capsule-blue transition-colors duration-300 rounded-sm">
              {/* Espacio para la imagen del proyecto */}
              <div className="h-48 bg-neo-light/5 flex items-center justify-center border-b border-neo-light/10 relative overflow-hidden">
                <span className="font-mono text-capsule-blue/40 text-sm tracking-widest group-hover:scale-110 transition-transform duration-500">
                  // REQUERIMIENTOS_CARGADOS
                </span>
              </div>
              
              <div className="p-6">
                <p className="text-akira-red text-xs font-mono font-bold mb-1 tracking-wider uppercase">{project.category}</p>
                <h3 className="text-xl font-bold text-neo-light mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono bg-capsule-blue/10 text-capsule-blue px-2 py-1 rounded-sm border border-capsule-blue/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;