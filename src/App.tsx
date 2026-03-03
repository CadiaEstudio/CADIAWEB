import React, { useEffect, useState } from 'react';
import { FileText, MessageSquare, FolderKanban, UserX, FileSpreadsheet, Users, HeadphonesIcon, FileArchive, AtSign, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" stroke="#C1121F" strokeWidth="2"/>
    <path d="M16 9L22 12.5V19.5L16 23L10 19.5V12.5L16 9Z" fill="white"/>
  </svg>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#C1121F] selection:text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Logo />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
            <a href="#problema" className="hover:text-white transition-colors">Problema</a>
            <a href="#solucion" className="hover:text-white transition-colors">Solución</a>
            <a href="#casos" className="hover:text-white transition-colors">Casos</a>
            <a href="#contacto" className="bg-[#C1121F] text-white px-6 py-3 rounded-sm hover:bg-[#A00F1A] transition-colors">Solicitar Diagnóstico</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="flex flex-col items-center py-8 gap-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
                <a href="#problema" className="hover:text-white transition-colors w-full text-center py-2">Problema</a>
                <a href="#solucion" className="hover:text-white transition-colors w-full text-center py-2">Solución</a>
                <a href="#casos" className="hover:text-white transition-colors w-full text-center py-2">Casos</a>
                <a href="#contacto" className="bg-[#C1121F] text-white px-8 py-4 rounded-sm hover:bg-[#A00F1A] transition-colors mt-4">Solicitar Diagnóstico</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.85] mb-8">
            Diseño de<br/>
            Automatizaciones<br/>
            Con IA Aplicada
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed">
            Diseñamos sistemas con IA que eliminan tareas repetitivas y convierten procesos manuales en flujos automáticos de alto rendimiento.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contacto" className="bg-[#C1121F] text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-[#A00F1A] transition-colors">
              Solicitar diagnóstico gratuito
            </a>
            <a href="#casos" className="border border-white/20 text-white px-8 py-4 text-sm font-bold tracking-wider uppercase hover:bg-white/5 transition-colors">
              Ver ejemplos
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section id="problema" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Tu equipo pierde tiempo en tareas que una máquina puede hacer mejor
            </h2>
            <div className="w-12 h-[2px] bg-[#C1121F] mb-6"></div>
            <p className="text-neutral-400 text-lg border-l border-white/20 pl-6">
              Cada minuto invertido en tareas repetitivas es un minuto que no se dedica a crecer.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { icon: FileText, text: "Presupuestos manuales" },
              { icon: MessageSquare, text: "Respuestas técnicas repetitivas" },
              { icon: FolderKanban, text: "Gestión de documentación dispersa" },
              { icon: UserX, text: "Procesos que dependen de una sola persona" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
                <item.icon className="w-6 h-6 text-[#C1121F] shrink-0" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solución */}
      <section id="solucion" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10 flex flex-col items-center text-center">
        <div className="text-[#C1121F] text-[10px] font-bold tracking-[0.3em] uppercase border border-[#C1121F]/30 px-4 py-1.5 mb-8">
          El Método Cadia
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8 max-w-4xl">
          Convertimos procesos en sistemas
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mb-16 leading-relaxed">
          La inteligencia artificial no es solo un chat. Es la arquitectura que conecta tus datos, tus herramientas y tu conocimiento técnico en un solo flujo autónomo.
        </p>
        
        <div className="bg-[#1A0505] border border-[#C1121F]/20 p-12 md:p-16 max-w-4xl w-full">
          <p className="text-2xl md:text-3xl font-bold italic leading-tight">
            "No implementamos herramientas.<br/>Diseñamos sistemas que trabajan por ti."
          </p>
        </div>
      </section>

      {/* Capacidades */}
      <section id="casos" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-black tracking-tighter uppercase">Capacidades</h2>
          <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            {
              icon: FileSpreadsheet,
              title: "Automatización de presupuestos",
              desc: "Generación instantánea de cotizaciones complejas basadas en especificaciones técnicas."
            },
            {
              icon: Users,
              title: "Asistentes técnicos internos",
              desc: "IA entrenada con tus manuales y normativas para soporte inmediato a operarios."
            },
            {
              icon: HeadphonesIcon,
              title: "Atención al cliente inteligente",
              desc: "Resolución de dudas técnicas y gestión de citas sin intervención humana 24/7."
            },
            {
              icon: FileArchive,
              title: "Gestión documental automatizada",
              desc: "Clasificación, extracción de datos y archivo inteligente de planos y facturas."
            }
          ].map((item, i) => (
            <div key={i} className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors flex flex-col h-full">
              <item.icon className="w-8 h-8 text-[#C1121F] mb-8" />
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mt-auto">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#C1121F]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-white">
            Empieza a recuperar<br/>tiempo
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Una conversación es suficiente para detectar oportunidades de automatización en tu empresa.
          </p>
          <a href="#contacto" className="inline-block bg-white text-[#C1121F] px-10 py-5 text-sm font-bold tracking-wider uppercase hover:bg-neutral-100 transition-colors">
            Agendar reunión
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-4xl font-black tracking-tighter uppercase">Escríbenos</h2>
          <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>
        
        <div className="max-w-3xl">
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            ¿Tienes un proceso que necesita ser optimizado?<br/>
            Hablemos de cómo la IA puede transformar tu operación técnica.
          </p>
          
          <a href="mailto:cadia.estudio@gmail.com" className="flex items-center gap-6 group w-fit">
            <div className="w-16 h-16 shrink-0 rounded-full border border-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] transition-colors">
              <AtSign className="w-8 h-8 text-[#C1121F] group-hover:text-white transition-colors" />
            </div>
            <span className="text-3xl md:text-5xl font-bold tracking-tight group-hover:text-[#C1121F] transition-colors break-all">
              cadia.estudio@gmail.com
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo size={20} />
            <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">Cadia © 2024</span>
          </div>
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
