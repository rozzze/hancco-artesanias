"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Catálogo", href: "/catalogo" },
    { name: "Creador de la página", href: "/creditos" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FDFCF9]/90 backdrop-blur-xl border-b border-[#EDE8E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Ícono decorativo */}
            <div className="w-7 h-7 rounded-lg bg-[#1A1208] flex items-center justify-center shrink-0 group-hover:bg-[#C07D2A] transition-colors duration-300">
              <span className="text-[#F5EDD8] text-xs font-black">H</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[18px] font-black text-[#1A1208] tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Hancco
              </span>
              <span className="text-[13px] text-[#9C8E7A] font-medium tracking-wide">Artesanías</span>
            </div>
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-medium text-[#6B5D4A] hover:text-[#1A1208] transition-colors duration-200 rounded-xl hover:bg-[#F5EDD8]/60 group"
              >
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-[#D4C4A8] mx-2" />
            <Link
              href="/contacto"
              className="bg-[#1A1208] text-[#F5EDD8] px-5 py-2 rounded-xl text-[13px] font-bold hover:bg-[#C07D2A] transition-colors duration-300 tracking-wide"
            >
              Contacto
            </Link>
          </div>

          {/* Hamburguesa móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-9 h-9 rounded-xl bg-[#F5EDD8] flex items-center justify-center text-[#1A1208] hover:bg-[#E8D8B8] transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFCF9] border-b border-[#EDE8E0] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-[14px] font-medium text-[#3A3028] hover:bg-[#F5EDD8] rounded-xl transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4C4A8]" />
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  href="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#1A1208] text-[#F5EDD8] px-4 py-3 rounded-xl text-[14px] font-bold hover:bg-[#C07D2A] transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}