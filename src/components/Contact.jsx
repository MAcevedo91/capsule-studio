// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 px-6 bg-neo-dark relative border-t border-neo-light/10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                
                {/* Columna Izquierda: El Pitch de Venta Final */}
                <div>
                <h2 className="text-3xl md:text-5xl font-bold text-neo-light mb-4">
                    Inicia la <span className="text-transparent bg-clip-text bg-linear-to-r from-akira-red to-red-600">Actualización</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    ¿Listo para dejar atrás los procesos manuales y tener una presencia digital que realmente venda? Escríbeme y evaluemos el estado de tu negocio.
                </p>

                {/* Tarjeta de WhatsApp (La vía rápida) */}
                <div className="bg-[#0a0d16] border border-capsule-blue/20 p-6 rounded-xl relative overflow-hidden group hover:border-capsule-blue/50 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-capsule-blue/5 blur-3xl rounded-full pointer-events-none"></div>
                    <h3 className="text-xl font-bold text-neo-light mb-2">Vía Rápida (Recomendado)</h3>
                    <p className="text-gray-400 text-sm mb-6">Respuesta directa. Sin formularios, sin correos automáticos.</p>
                    <a 
                    href="https://wa.me/56964991035" /* REEMPLAZA CON TU NÚMERO */
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-capsule-blue/10 border border-capsule-blue text-capsule-blue font-bold uppercase tracking-wider rounded-sm hover:bg-capsule-blue hover:text-neo-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.15)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
                    >
                    <span className="mr-2">❯</span> Abrir Chat
                    </a>
                </div>
                </div>

                {/* Columna Derecha: El Formulario Formal */}
                <div className="bg-[#0a0d16] border border-neo-light/10 p-8 rounded-xl">
                <p className="font-mono text-akira-red text-xs tracking-widest mb-6">
                    // TRANSMISIÓN_ENCRIPTADA
                </p>
                
                {/* Nota: Más adelante puedes poner la URL de Formspree en el 'action' 
                    Ejemplo: action="https://formspree.io/f/tu-codigo" 
                */}
                <form className="space-y-4" action="#" method="POST">
                    <div>
                    <label className="block text-gray-400 text-sm mb-1 font-mono">Nombre o Empresa</label>
                    <input 
                        type="text" 
                        required
                        className="w-full bg-neo-dark border border-neo-light/10 rounded-sm px-4 py-3 text-neo-light focus:outline-none focus:border-capsule-blue focus:ring-1 focus:ring-capsule-blue transition-colors"
                        placeholder="Ej. Restaurante El Sabor"
                    />
                    </div>
                    
                    <div>
                    <label className="block text-gray-400 text-sm mb-1 font-mono">Correo Electrónico</label>
                    <input 
                        type="email" 
                        required
                        className="w-full bg-neo-dark border border-neo-light/10 rounded-sm px-4 py-3 text-neo-light focus:outline-none focus:border-capsule-blue focus:ring-1 focus:ring-capsule-blue transition-colors"
                        placeholder="correo@empresa.com"
                    />
                    </div>
                
                    <div>
                    <label className="block text-gray-400 text-sm mb-1 font-mono">¿Qué necesitas?</label>
                    <textarea 
                        rows="4"
                        required
                        className="w-full bg-neo-dark border border-neo-light/10 rounded-sm px-4 py-3 text-neo-light focus:outline-none focus:border-capsule-blue focus:ring-1 focus:ring-capsule-blue transition-colors resize-none"
                        placeholder="Cuéntame un poco sobre tu local y qué te gustaría mejorar..."
                    ></textarea>
                    </div>
                
                    <button 
                    type="submit"
                    className="w-full mt-2 px-6 py-4 bg-akira-red text-neo-light font-bold uppercase tracking-wider rounded-sm hover:bg-red-600 transition-all shadow-[0_0_20px_rgba(227,36,43,0.3)] hover:shadow-[0_0_30px_rgba(227,36,43,0.5)]"
                    >
                    Enviar
                    </button>
                </form>
                </div>
                
            </div>
        </  section>
    );
};

export default Contact;