import React from 'react';
import { Reveal } from './ScrollReveal';

const Contact = () => {
    return (
        <section id="contacto" className="py-24 px-6 bg-neo-dark relative border-t border-neo-light/10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                
                {/* Columna Izquierda: El Pitch de Venta Final */}
                <Reveal dir="left">
                <h2 className="text-3xl md:text-5xl font-bold text-neo-light mb-4">
                    Inicia la <span className="text-transparent bg-clip-text bg-linear-to-r from-akira-red to-red-600">Actualización</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    ¿Listo para dejar atrás los procesos manuales y tener una presencia digital que realmente venda? Escríbeme y evaluemos el estado de tu negocio.
                </p>

                {/* Tarjeta de WhatsApp (La vía rápida) */}
                <div className="bg-[#0a0d16] border border-capsule-blue/20 p-6 rounded-xl relative overflow-hidden group hover:border-capsule-blue/50 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-capsule-blue/5 blur-3xl rounded-full pointer-events-none"></div>
                    <h3 className="text-xl font-bold text-neo-light mb-2 flex items-center gap-2">
                        Vía Rápida 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-capsule-blue">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.845L.057 23.5l5.803-1.522A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.869 9.869 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.867 9.867 0 012.118 12C2.118 6.534 6.534 2.118 12 2.118S21.882 6.534 21.882 12 17.466 21.882 12 21.882z"/>
                        </svg>
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">Respuesta directa. Sin formularios, sin correos automáticos.</p>
                    <a 
                    href="https://wa.me/56964991035"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-capsule-blue/10 border border-capsule-blue text-capsule-blue font-bold uppercase tracking-wider rounded-sm hover:bg-capsule-blue hover:text-neo-dark transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.15)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.3)]"
                    >
                    <span className="mr-2">❯</span> Abrir Chat
                    </a>
                </div>
                </Reveal>

                {/* Columna Derecha: El Formulario Formal */}
                <Reveal dir="right" delay={200} className="bg-[#0a0d16] border border-neo-light/10 p-8 rounded-xl">
                <p className="font-mono text-akira-red text-xs tracking-widest mb-6 uppercase">
                    // Vía correo electrónico
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
                </Reveal>
                
            </div>
        </  section>
    );
};

export default Contact;