"use client";

import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

interface WhatsAppButtonProps {
  productName: string;
  productImage: string;
}

export default function WhatsAppButton({ productName, productImage }: WhatsAppButtonProps) {
  const [currentOrigin, setCurrentOrigin] = useState("");

  useEffect(() => {
    setCurrentOrigin(window.location.origin);
  }, []);

  // Construimos el link de la imagen usando el origin actual para que sea un enlace absoluto
  const imageUrl = currentOrigin ? `${currentOrigin}${productImage}` : "";

  // Mensaje codificado para la URL, incluyendo el salto de línea (%0A)
  const text = `Hola, me interesa el producto: ${productName}.%0A%0AImagen del producto: ${imageUrl}`;
  const whatsappUrl = `https://wa.me/51982287068?text=${text}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-[#1A1208] text-[#F5EDD8] py-4 px-6 rounded-2xl font-bold text-[15px] hover:bg-[#C07D2A] transition-colors duration-400 flex items-center justify-center gap-3 shadow-md group"
    >
      <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <ShoppingBag className="h-4 w-4" />
      </div>
      Pedir por WhatsApp
    </a>
  );
}
