"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-[#FDFCFB] rounded-3xl overflow-hidden border border-[#EDE8E0] hover:border-[#D4A853]/40 hover:shadow-[0_20px_60px_-12px_rgba(180,130,60,0.18)] transition-all duration-500"
    >
      {/* Imagen */}
      <div className="relative h-72 w-full overflow-hidden bg-[#F5F0E8]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-[1.07] transition-transform duration-700 ease-out"
        />

        {/* Gradiente sutil al fondo de la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Categoría */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.12em] uppercase text-[#7A6A52] shadow-sm border border-white/60">
          {product.category}
        </span>

        {/* Botón rápido de ver detalle esquina superior derecha */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md border border-white/60">
            <ArrowUpRight className="w-4 h-4 text-[#7A6A52]" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 pb-6">
        {/* Nombre y precio */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[15px] font-bold text-[#2C2418] leading-snug line-clamp-2 flex-1" style={{ fontFamily: "'Georgia', serif" }}>
            {product.name}
          </h3>
          <div className="shrink-0 text-right">
            <span className="block text-[13px] text-[#A08050] font-medium leading-none mb-0.5">S/</span>
            <span className="text-[22px] font-black text-[#2C2418] leading-none">
              {product.price.toFixed(2)}
            </span>
          </div>
        </div>

        <p className="text-[13px] text-[#9C8E7A] mb-5 leading-relaxed">
          Hecho a mano con materiales de primera calidad.
        </p>

        {/* Botón */}
        <Link
          href={`/producto/${product.id}`}
          className="w-full bg-[#2C2418] text-[#F5EDD8] py-3 px-5 rounded-2xl font-semibold text-[13px] tracking-wide flex items-center justify-center gap-2 group-hover:bg-[#C07D2A] transition-colors duration-400 relative overflow-hidden"
        >
          <span>Ver Detalle</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}