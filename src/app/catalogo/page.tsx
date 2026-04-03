// /src/app/catalogo/page.tsx

"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";

// Obtenemos las categorías únicas de los productos (para los botones de filtro)
const categories = ["Todos", ...new Set(products.map((p) => p.category))];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filtramos los productos según el botón seleccionado
  const filteredProducts = activeCategory === "Todos"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-32 pb-24 font-sans">
      
      {/* 1. ENCABEZADO DEL CATÁLOGO PREMIUM */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 text-orange-600 font-medium text-xs tracking-[0.2em] uppercase mb-6 inline-block">
            Catálogo Exclusivo
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Nuestra <span className="text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Colección</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Explora todas nuestras prendas. Calidad, tradición y abrigo para llevarte un pedacito del sur a donde vayas.
          </p>

          {/* 2. BARRA DE FILTROS ESTILO PÍLDORAS */}
          <div className="flex flex-wrap justify-center gap-3 overflow-x-auto pb-4 no-scrollbar px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                  ${activeCategory === category
                    ? "bg-orange-600 text-white shadow-md shadow-orange-200 scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:bg-orange-50"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. GRID DE PRODUCTOS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              >
                {/* Asegúrate de que ProductCard use Next/Image correctamente */}
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MENSAJE SI NO HAY PRODUCTOS */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8"
          >
            <p className="text-gray-500 text-lg">Aún no hay productos disponibles en esta categoría.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}