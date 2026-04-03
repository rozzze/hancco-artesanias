// /src/app/producto/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ArrowLeft, Check, Star } from "lucide-react";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F9F6F1] pt-28 pb-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Botón Volver */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-[#7A6A52] hover:text-[#C07D2A] mb-10 transition-colors font-medium text-sm tracking-wide group"
        >
          <div className="w-7 h-7 rounded-full border border-[#D4C4A8] flex items-center justify-center group-hover:border-[#C07D2A] group-hover:bg-[#FFF8EC] transition-all duration-300">
            <ArrowLeft className="h-3.5 w-3.5" />
          </div>
          Volver al catálogo
        </Link>

        {/* Contenedor Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Imagen */}
          <div className="relative">
            {/* Decoración de fondo */}
            <div className="absolute -inset-3 bg-gradient-to-br from-[#E8DCC8] to-[#F5EDD8] rounded-[3rem] -z-10" />
            <div className="relative aspect-square bg-[#F0EAE0] rounded-[2.5rem] overflow-hidden border border-[#E0D4BC]/60 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                unoptimized
                className="object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
              {/* Shimmer overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Badge artesanal flotante */}
            <div className="absolute -bottom-4 -right-2 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#EDE8E0] flex items-center gap-2">
              <Star className="w-3.5 h-3.5 text-[#C07D2A] fill-[#C07D2A]" />
              <span className="text-[11px] font-bold text-[#2C2418] tracking-wide uppercase">Artesanal</span>
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col py-2">

            {/* Categoría */}
            <div className="mb-5">
              <span className="inline-block text-[#C07D2A] font-bold tracking-[0.15em] text-[10px] uppercase bg-[#FFF3DC] px-4 py-1.5 rounded-full border border-[#E8C87A]/40">
                {product.category}
              </span>
            </div>

            {/* Nombre */}
            <h1
              className="text-4xl md:text-[2.8rem] font-black text-[#1E1810] mb-4 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {product.name}
            </h1>

            {/* Separador decorativo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4C4A8] to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C07D2A]" />
            </div>

            {/* Precio */}
            <div className="flex items-baseline gap-2 mb-7">
              <span className="text-[15px] text-[#9C8E7A] font-medium">S/</span>
              <span className="text-5xl font-black text-[#1E1810] tracking-tight">
                {product.price.toFixed(2)}
              </span>
            </div>

            {/* Descripción */}
            <div className="text-[#6B5D4A] mb-8 leading-relaxed text-[15px] font-light">
              <p>{product.description}</p>
            </div>

            {/* Características */}
            <div className="bg-white rounded-2xl border border-[#EDE8E0] p-5 mb-8 space-y-3.5 shadow-sm">
              {[
                "100% Hecho a mano",
                "Material de alta calidad",
                "Entregas a coordinar en Arequipa",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 list-none">
                  <div className="w-6 h-6 rounded-full bg-[#F0FBF0] border border-[#A8DBA8] flex items-center justify-center shrink-0">
                    <Check className="text-[#3A8C3A] h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[14px] font-semibold text-[#3A3028]">{feature}</span>
                </li>
              ))}
            </div>

            {/* CTA WhatsApp */}
            <WhatsAppButton
              productName={product.name}
              productImage={product.image}
            />

            {/* Nota de confianza */}
            <p className="text-center text-[11px] text-[#A09080] mt-4 tracking-wide">
              Respuesta en menos de 24 horas · Envío coordinado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}