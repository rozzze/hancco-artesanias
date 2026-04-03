"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/plaza-noche.jpeg"
        alt="Plaza de Armas Arequipa Noche"
        fill
        className="object-cover brightness-[0.45]"
        priority
      />

      {/* Gradiente multicapa para mejor legibilidad y atmósfera */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge ubicación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase"
          >
            <MapPin className="w-3 h-3 text-[#F5C842]" />
            Plaza de Armas · Arequipa
          </motion.div>

          {/* Título */}
          <h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            El abrigo de la{" "}
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C842] via-[#E8A830] to-[#F5C842]">
                tradición alpaca
              </span>
              {/* Línea subrayado decorativa */}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#F5C842]/60 to-transparent rounded-full" />
            </span>
          </h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-[16px] md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed font-light"
          >
            Chompas, chullos y artesanías hechas con el corazón.
            Encuéntranos cada noche bajo los portales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Link
              href="/catalogo"
              className="group bg-white text-[#1A1208] px-7 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#F5EDD8] transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-black/20"
            >
              Ver Catálogo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contacto"
              className="text-white/90 border border-white/25 px-7 py-3.5 rounded-xl font-medium text-[15px] hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              Ubicación Actual
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#F9F6F1] to-transparent pointer-events-none" />
    </section>
  );
}