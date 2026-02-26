// src/components/Process.jsx
import React from 'react';

const Process = () => {
    const steps = [
        {
        number: "01",
        title: "Extracción de Datos",
        description: "Analizamos el flujo actual de tu local. Entendemos qué ofreces, quién te compra y dónde estás perdiendo clientes por no estar digitalizado."
        },
        {
        number: "02",
        title: "Construcción Digital",
        description: "Diseñamos y programamos tu plataforma usando tecnología de punta. Nada de plantillas lentas; código limpio, rápido y optimizado."
        },
        {
        number: "03",
        title: "Despliegue y Operación",
        description: "Lanzamos tu sitio a internet y lo conectamos a tus canales de venta (como WhatsApp). Te entregamos la llave de un sistema listo para funcionar."
        }
    ];

    return (
        <section className="py-24 px-6 bg-neo-dark relative border-t border-neo-light/5">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-neo-light mb-4">
                Secuencia de <span className="text-capsule-blue">Iniciación</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">// CÓMO TRANSFORMAMOS TU NEGOCIO</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Línea conectora de fondo (solo visible en escritorio) */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-px bg-neo-light/10 z-0"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative z-10 bg-neo-dark p-6 border border-neo-light/10 rounded-sm hover:border-capsule-blue transition-colors duration-300">
                <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-b from-neo-light/20 to-transparent mb-4">
                    {step.number}
                </div>
                <h3 className="text-xl font-bold text-neo-light mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-akira-red animate-neon-pulse"></span>
                    {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Process;