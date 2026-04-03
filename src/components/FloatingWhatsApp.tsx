"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phoneNumber = "51982287068";
  const message = "Hola, estoy viendo la web de Hancco Artesanías y tengo una consulta...";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1FAD59] text-white pl-4 pr-5 py-3.5 rounded-2xl shadow-xl shadow-green-900/25 hover:bg-[#17963F] hover:shadow-2xl hover:shadow-green-900/30 transition-all duration-300 cursor-pointer group"
    >
      {/* Ícono */}
      <div className="relative shrink-0">
        <MessageCircle size={22} fill="white" className="text-white" />
        {/* Ping */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white/90 border border-[#1FAD59]" />
        </span>
      </div>

      {/* Texto (solo desktop) */}
      <div className="hidden md:block leading-tight">
        <p className="text-[12px] font-black tracking-wide leading-none mb-0.5">¿Consultas?</p>
        <p className="text-[10px] text-white/70 font-medium leading-none">Respondemos al instante</p>
      </div>
    </motion.a>
  );
}