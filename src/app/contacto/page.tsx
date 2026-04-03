"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, CreditCard, Droplets, HelpCircle, Sparkles, MessageCircle, Ruler } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-32 pb-24 font-sans">
      
      {/* 1. ENCABEZADO PREMIUM */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-medium text-xs tracking-[0.2em] uppercase mb-6 inline-block">
            Atención Personalizada
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Estamos para <span className="text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">ayudarte</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            Conoce nuestras colecciones en persona, o escríbenos directamente para cualquier consulta sobre nuestras prendas de alpaca.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. GRID DE INFORMACIÓN CON IMÁGENES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Tarjeta 1: Ubicación Física (Taller/Referencia) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[2rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="relative h-48 w-full bg-gray-200">
              <Image 
                src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop" 
                alt="Calles de Arequipa" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="p-8 pt-0 flex flex-col items-center text-center relative">
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 text-orange-600 -mt-8 shadow-lg border-4 border-white relative z-10">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Encuéntranos</h3>
              <p className="text-gray-900 font-medium text-lg">Plaza de armas</p>
              <p className="text-gray-500 text-sm font-light mt-1">Arequipa</p>
            </div>
          </motion.div>

          {/* Tarjeta 2: WhatsApp (Destacada) */}
          <motion.a
            href="https://wa.me/51982287068" 
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-[2rem] shadow-lg shadow-green-200 text-white flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden group h-full min-h-[320px]"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 text-white shadow-inner">
              <MessageCircle size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Escríbenos ahora</h3>
            <p className="text-green-50 text-base font-light mb-6 opacity-90">Respondemos al instante</p>
            <div className="bg-black/10 px-6 py-3 rounded-2xl backdrop-blur-md border border-white/10">
              <p className="font-mono text-3xl font-bold tracking-widest drop-shadow-sm">
                982 287 068
              </p>
            </div>
          </motion.a>

          {/* Tarjeta 3: Horarios y Pagos (Actualizada a Horario Flexible) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[2rem] shadow-sm border border-gray-100 flex flex-col overflow-hidden relative"
          >
            {/* Imagen de textura sutil en el fondo superior */}
            <div className="absolute top-0 left-0 w-full h-32 opacity-10">
              <Image 
                src="https://images.unsplash.com/photo-1528543045988-5a084c0e09cf?q=80&w=1000&auto=format&fit=crop" 
                alt="Textura" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
            </div>

            <div className="p-8 relative z-10 flex-grow flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <Clock className="text-gray-600" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Horario de Atención</h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Manejamos un horario flexible. Te sugerimos enviarnos un mensaje rápido por WhatsApp para confirmarte nuestra disponibilidad del día o coordinar una visita a medida.
                </p>

                <div className="bg-orange-50 text-orange-700 text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-3 border border-orange-100">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                  </span>
                  ¡Pregúntanos por WhatsApp!
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <CreditCard className="text-gray-600" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Medios de Pago</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-[#52297A]/10 text-[#52297A] rounded-lg font-bold text-xs tracking-wide">YAPE</span>
                  <span className="px-3 py-1.5 bg-[#000000]/5 text-gray-700 rounded-lg font-bold text-xs tracking-wide">PLIN</span>
                  <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg font-bold text-xs tracking-wide">EFECTIVO</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. SECCIÓN FAQ (Diseño Minimalista) */}
        <div className="mt-12 bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
          
          {/* Decoración geométrica sutil */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Resolvemos tus dudas principales para que tu experiencia con nuestras artesanías sea perfecta.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                q: "¿Cómo cuido mis prendas de alpaca?", 
                a: "Recomendamos lavar a mano con agua fría y champú de bebé o detergente suave. Secar extendido en plano a la sombra para mantener su forma y suavidad original.", 
                icon: Droplets 
              },
              { 
                q: "¿Qué materiales utilizan?", 
                a: "Trabajamos con hilados seleccionados de Baby Alpaca y mezclas de alta calidad, garantizando durabilidad y un tacto excepcionalmente suave.", 
                icon: Sparkles 
              },
              { 
                q: "¿Realizan trabajos a medida?", 
                a: "Sí, tejemos pedidos especiales. Tenemos desde tallas infantiles hasta XXL para adultos. Escríbenos con tus medidas para cotizarlo.", 
                icon: Ruler 
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-3xl bg-[#FAFAF9] hover:bg-orange-50/50 transition-all duration-300 border border-transparent hover:border-orange-100 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-50">
                  <item.icon className="w-7 h-7 text-orange-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}