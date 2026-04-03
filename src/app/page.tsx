import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products"; // Importamos los datos falsos

export default function Home() {
  return (
    <div className="bg-gray-50 pb-20">
      <Hero />
      
      {/* Sección de Destacados */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* Título de sección */}
        <div className="text-center mb-12 pt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Favoritos de los Turistas 
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estas son las prendas mas populares de nuestra colección. <br />
            Ideales para combatir el frío de la noche arequipeña.
          </p>
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>
    </div>
  );
}