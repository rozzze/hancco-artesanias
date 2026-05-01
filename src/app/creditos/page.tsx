"use client";
import { motion } from "framer-motion";
import { Code2, Laptop, Palette, Rocket, Mail, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CreditosPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] overflow-hidden pt-20">

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Texto Hero */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5EDD8] text-[#C07D2A] text-sm font-bold tracking-wide mb-6">
                <Code2 size={16} />
                <span>Sobre el Creador</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1208] mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: "'Georgia', serif" }}>
                ¿Te gustó cómo quedó <span className="text-[#C07D2A]">esta página?</span>
              </h1>
              <p className="text-lg md:text-xl text-[#6B5D4A] mb-8 leading-relaxed">
                Soy el desarrollador web detrás de este proyecto. Me especializo en crear plataformas digitales
                rápidas, modernas y atractivas que ayudan a emprendedores a destacar y vender más por internet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1A1208] text-[#F5EDD8] font-bold hover:bg-[#C07D2A] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Cotizar mi Proyecto</span>
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-[#9C8E7A] text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C07D2A]" />
                  <span>Diseño a medida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C07D2A]" />
                  <span>Alta velocidad</span>
                </div>
              </div>
            </motion.div>

            {/* Imagen Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Elementos decorativos */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F5EDD8] to-transparent opacity-50 rounded-[2rem] blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#C07D2A]/5 rounded-full blur-3xl"></div>

              {/* Contenedor de la imagen */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/portfolio-mockup.png"
                  alt="Portafolio de Desarrollo Web"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Tarjeta flotante */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#EDE8E0] flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Rocket size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#9C8E7A] font-medium">Optimizado para</p>
                  <p className="text-[#1A1208] font-bold">Ventas & SEO</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1208] mb-4" style={{ fontFamily: "'Georgia', serif" }}>
              ¿Por qué trabajar conmigo?
            </h2>
            <p className="text-[#6B5D4A] max-w-2xl mx-auto text-lg">
              Ofrezco un servicio integral para que no tengas que preocuparte por la tecnología.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="text-[#C07D2A]" size={28} />,
                title: "Desarrollo a Medida",
                desc: "Páginas únicas como esta, adaptadas a tu marca, con un panel administrador si lo necesitas."
              },
              {
                icon: <Palette className="text-[#C07D2A]" size={28} />,
                title: "Diseño Premium",
                desc: "Interfaces hermosas y fáciles de usar que capturan la atención de tus clientes."
              },
              {
                icon: <Rocket className="text-[#C07D2A]" size={28} />,
                title: "Rendimiento Superior",
                desc: "Sitios ultra rápidos, optimizados para Google y con diseño adaptable a celulares."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-[#FDFCF9] p-8 rounded-3xl border border-[#EDE8E0] hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F5EDD8] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1208] mb-3">{feature.title}</h3>
                <p className="text-[#6B5D4A] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A1208] rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C07D2A] opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5EDD8] opacity-10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#FDFCF9] mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                ¿Listo para crear tu página?
              </h2>
              <p className="text-[#D4C4A8] mb-10 max-w-2xl mx-auto text-lg md:text-xl">
                Envíame un mensaje y cuéntame sobre tu negocio. Te ayudaré a elegir
                la mejor solución digital para que empieces a vender más.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5">
                {/* Reemplaza con tu correo */}
                <a
                  href="mailto:hanccoismael07@gmail.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C07D2A] text-white font-bold text-lg hover:bg-[#A66920] transition-colors shadow-lg shadow-[#C07D2A]/20"
                >
                  <Mail size={22} />
                  <span>Enviar Correo</span>
                </a>

                {/* Reemplaza con tu número */}
                <a
                  href="https://wa.me/51978638917?text=Hola,%20vi%20tu%20trabajo%20y%20quisiera%20cotizar%20una%20página%20web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2A2218] text-[#F5EDD8] font-bold text-lg hover:bg-[#3A3028] transition-colors border border-[#4A3D2F]"
                >
                  <ExternalLink size={22} />
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
