// /src/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string; // <--- Nuevo campo añadido
}

export const products: Product[] = [
  // --- CHOMPAS ---
  {
    id: 1,
    name: "Chompa Andina Tradicional Lila",
    price: 120.00,
    category: "Chompas",
    image: "/productos/chompa1.jpg", // Asegúrate de usar el nombre correcto de tu archivo local
    description: "Chompa con cierre frontal en tonos lila y blanco. Destaca por su detallado tramado de iconografía andina, incluyendo figuras de alpacas y secuencias geométricas tradicionales. Una prenda clásica y representativa de la artesanía local.",
  },
  {
    id: 3,
    name: "Casaca Listada Rojo y Negro con Capucha",
    price: 110.00,
    category: "Chompas con Capucha",
    image: "/productos/chompa_capucha2.jpg",
    description: "Diseño estructurado que alterna franjas verticales en rojo intenso y negro. Incorpora una cómoda capucha, bolsillos frontales y acabados con sutiles patrones andinos a lo largo del cierre y ribetes. Una opción versátil para el uso regular.",
  },
  {
    id: 4,
    name: "Casaca Geométrica Multicolor con Capucha",
    price: 95.00,
    category: "Chompas con Capucha", // O podrías crear la categoría "Casacas"
    image: "/productos/chompa_capucha1.jpg",
    description: "Prenda de fondo oscuro que resalta por sus vibrantes patrones geométricos en forma de rombo con detalles en tonos cálidos y fríos. Incluye capucha, bolsillos frontales y cierre completo, ofreciendo una combinación funcional y llamativa.",
  },
  {
    id: 5, // O el número que corresponda en tu secuencia
    name: "Chompa Andina Negra y Gris con Capucha",
    price: 115.00, // Puedes ajustar el precio según tu margen
    category: "Chompas con Capucha",
    image: "/productos/chompa_capucha3.png", // Asegúrate de actualizar esto con la ruta final de tu imagen
    description: "Chompa de fondo negro que destaca por sus patrones geométricos y clásica iconografía andina de alpacas en tonos blanco y gris. Cuenta con cierre frontal completo, una cómoda capucha y prácticos bolsillos delanteros. Los ribetes, puños y el borde del cierre presentan finos detalles artesanales, ofreciendo una prenda abrigadora con un diseño monocromático, elegante y versátil.",
  },
  {
    id: 6, // O el número que corresponda en tu secuencia
    name: "Poncho Rojo con Capucha y Franja Diagonal Geométrica",
    price: 180.00, // Precio estimado para un poncho artesanal detallado
    category: "Ponchos", // Nueva categoría más específica
    image: "/productos/poncho1.png", // Reemplaza con la ruta final de tu imagen
    description: "Poncho con capucha de lana en un vibrante tono rojo. Destaca por una prominente franja diagonal que cruza el torso, adornada con coloridos motivos geométricos andinos sobre cuadrados blancos y una banda de grecas texturizadas en rojo oscuro. Incorpora un cuello de capucha integrado con forro interior de patrón colorido. El borde inferior presenta una detallada banda de iconografía negra y un denso fleco multicolor, ofreciendo una prenda abrigadora y llena de simbolismo artesanal.",
  },
  {
    id: 7, // Ajusta este número según el orden en tu base de datos
    name: "Chompa Tejida Blanca 'Arequipa'",
    price: 95.00, // Precio sugerido, puedes ajustarlo
    category: "Chompas", 
    image: "/productos/chompa2.png", // Reemplaza con la ruta final de tu imagen
    description: "Chompa tejida de cuello redondo en un tono blanco crema. Destaca por llevar la palabra 'AREQUIPA' en el centro del pecho en un cálido color camello, enmarcada por franjas horizontales con sutiles detalles geométricos que se extienden hacia las mangas. Cuenta con pretina, puños y cuello acanalados para un ajuste cómodo y abrigador. Una prenda clásica, versátil y perfecta como recuerdo de la Ciudad Blanca.",
  },
  {
    id: 8, 
    name: "Chompa Tejida Negra 'Arequipa'",
    price: 95.00, 
    category: "Chompas", 
    image: "/productos/chompa3.png", // Asegúrate de poner la ruta correcta
    description: "Chompa tejida de cuello alto en color negro profundo. Resalta por una franja horizontal en tono crema a la altura del pecho, donde lleva tejida la palabra 'AREQUIPA' en color camello, delimitada por un sutil patrón de líneas verticales cortas. Sus acabados acanalados en el cuello, puños y pretina aseguran un ajuste estructurado y cálido. Un diseño de gran contraste, ideal para un estilo sobrio y tradicional.",
  },
  {
  id: 9, // O el número que corresponda en tu secuencia
  name: "Chullo Artesanal de Retazos Geométricos Multicolor'",
  price: 65.00,
  category: "Chullos",
  image: "/productos/chullo3.png", // Asegúrate de guardar la imagen generada con este nombre en tu carpeta de productos
  description: "Este vibrante chullo presenta un diseño de retazos de diamantes multicolores con bordes texturizados. Las acogedoras orejeras se extienden en largas trenzas con divertidos pompones esponjosos en los extremos, ofreciendo un estilo folclórico y cálido.",
},
{
  id: 10, // O el número que corresponda en tu secuencia
  name: "Chullo Tradicional Fucsia con Motivos Geométricos",
  price: 70.00,
  category: "Chullos", // Nueva categoría para mayor organización
  image: "/productos/chullo1.png", // Asegúrate de guardar la imagen generada con este nombre en tu carpeta de productos
  description: "Este llamativo chullo tejido destaca por su vibrante color fucsia base y sus detalladas franjas horizontales con figuras geométricas y estrellas andinas. Cuenta con orejeras clásicas y está adornado con vistosos pompones multicolores en la punta y en los cordones, perfecto para un estilo auténtico y abrigador.",
},
{
  id: 11, // O el número que corresponda en tu secuencia
  name: "Gorro Tejido Gris 'Arequipa' con Pompón",
  price: 60.00,
  category: "Chullos",
  image: "/productos/chullo2.png", // Asegúrate de guardar la imagen generada con este nombre en tu carpeta de productos
  description: "Este cómodo gorro en tonos grises presenta la palabra 'AREQUIPA' tejida en contraste sobre la banda frontal. Su diseño se complementa con un llamativo patrón geométrico tipo panal en la parte superior y está coronado por un clásico pompón bicolor, ofreciendo una opción sobria, moderna y muy abrigadora.",
},
  // Puedes seguir agregando el resto de tus productos aquí...
];