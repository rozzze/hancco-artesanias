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
    name: "Chompa Andina Lila con Motivos de Alpacas",
    price: 40.00,
    category: "Chompas",
    image: "/productos/chompas/chompa1.jpg", // Asegúrate de usar el nombre correcto de tu archivo local
    description: "Chompa tejida con cierre frontal en hermosos tonos lila, morado y blanco. Destaca por su detallado tramado horizontal de iconografía andina, incluyendo encantadoras figuras de alpacas y delicadas secuencias geométricas. Con cuello redondo y prácticos bolsillos, es una prenda clásica y abrigadora que resalta la belleza de la artesanía local.",
  },
  {
    id: 3,
    name: "Chompa con Capucha a Rayas Rojo y Negro",
    price: 40.00,
    category: "Chompas con Capucha",
    image: "/productos/chompas_capucha/chompa_capucha2.jpg",
    description: "Diseño estructurado que alterna finas franjas verticales en rojo intenso y negro. Incorpora una cómoda capucha, bolsillos frontales y acabados con sutiles patrones geométricos andinos a lo largo del cierre, ribetes y el contorno de la capucha. Una opción versátil y de gran personalidad para el uso diario.",
  },
  {
    id: 4,
    name: "Casaca Negra con Rombos y Detalles Multicolor",
    price: 38.00,
    category: "Chompas con Capucha", // O podrías crear la categoría "Casacas"
    image: "/productos/chompas_capucha/chompa_capucha1.jpg",
    description: "Prenda de fondo negro que deslumbra por sus vibrantes patrones geométricos en forma de rombos multicolores con motivos andinos en su interior. Incluye una cálida capucha, bolsillos frontales y un cierre completo acentuado con ribetes a rayas con los colores del arcoíris. Una prenda funcional, abrigadora y sumamente llamativa.",
  },
  {
    id: 5, // O el número que corresponda en tu secuencia
    name: "Chompa Bicolor con Capucha y Motivos de Alpacas",
    price: 40.00, // Puedes ajustar el precio según tu margen
    category: "Chompas con Capucha",
    image: "/productos/chompas_capucha/chompa_capucha3.png", // Asegúrate de actualizar esto con la ruta final de tu imagen
    description: "Chompa de fondo negro que destaca por su franja superior en tonos blanco y gris claro, adornada con patrones geométricos y la clásica iconografía andina de alpacas. Cuenta con cierre frontal completo, capucha y prácticos bolsillos. Los ribetes y detalles a lo largo del cierre presentan finos acabados artesanales, logrando un estilo monocromático, elegante y versátil.",
  },
  {
    id: 6, // O el número que corresponda en tu secuencia
    name: "Poncho Rojo Andino con Cruz Andina y Capucha",
    price: 48.00, // Precio estimado para un poncho artesanal detallado
    category: "Ponchos", // Nueva categoría más específica
    image: "/productos/ponchos/poncho1.png", // Reemplaza con la ruta final de tu imagen
    description: "Imponente poncho de color rojo vibrante con capucha. Destaca por una gruesa franja diagonal que cruza el torso, protagonizada por motivos de la cruz andina (chakana) en blanco y negro sobre un fondo de cuadrados coloridos. Adornado con un borde inferior de complejos patrones andinos y un denso fleco multicolor que le aporta movimiento y autenticidad a esta cálida prenda.",
  },
  {
    id: 7, // Ajusta este número según el orden en tu base de datos
    name: "Chompa de Hilo Crema con Letras 'AREQUIPA'",
    price: 42.00, // Precio sugerido, puedes ajustarlo
    category: "Chompas",
    image: "/productos/chompas/chompa2.png", // Reemplaza con la ruta final de tu imagen
    description: "Chompa tejida de cuello redondo cerrado en un cálido tono blanco crema. Su diseño clásico resalta por llevar la palabra 'AREQUIPA' tejida en el pecho en un color camello suave, enmarcada sutilmente por líneas horizontales con motivos punteados. Sus acabados acanalados garantizan un ajuste perfecto. Una prenda versátil y atemporal, ideal como recuerdo de la Ciudad Blanca.",
  },
  {
    id: 8,
    name: "Chompa de Cuello Alto Negra con Franja 'AREQUIPA'",
    price: 42.00,
    category: "Chompas",
    image: "/productos/chompas/chompa3.png", // Asegúrate de poner la ruta correcta
    description: "Chompa tejida con elegante cuello alto en color negro profundo. Su diseño presenta un fuerte contraste gracias a una franja horizontal en tono crema a la altura del pecho, donde se lee la palabra 'AREQUIPA' en tono camello. Con pretina, puños y cuello acanalados para un ajuste estructurado y máximo abrigo. Perfecta para un estilo sobrio y moderno.",
  },
  {
    id: 9, // O el número que corresponda en tu secuencia
    name: "Chullo Crochet Multicolor con Orejeras y Pompones",
    price: 25.00,
    category: "Chullos",
    image: "/productos/chullos/chullo3.png", // Asegúrate de guardar la imagen generada con este nombre en tu carpeta de productos
    description: "Colorido chullo tejido a mano con técnica crochet, compuesto por vibrantes figuras geométricas en tonos fucsia, turquesa y rojo. Cuenta con orejeras largas que terminan en trenzas con pompones multicolores, además de un pompón azul en la cima. Una pieza auténtica y llena de alegría, ideal para protegerse del frío con mucho estilo.",
  },
  {
    id: 10, // O el número que corresponda en tu secuencia
    name: "Chullo Andino Fucsia con Copos de Nieve",
    price: 60.00,
    category: "Chullos", // Nueva categoría para mayor organización
    image: "/productos/chullos/chullo1.png", // Asegúrate de guardar la imagen generada con este nombre en tu carpeta de productos
    description: "Llamativo chullo de lana en color fucsia brillante, adornado con franjas horizontales de detallados patrones geométricos y motivos de copos de nieve o estrellas andinas en azul y blanco. Incluye clásicas orejeras y está rematado con grandes y vistosos pompones multicolores en la parte superior y en sus cordones. Un accesorio infaltable para el invierno.",
  },
  {
    id: 11, // O el número que corresponda en tu secuencia
    name: "Gorro Tejido Gris 'AREQUIPA' con Pompón",
    price: 12.00,
    category: "Chullos",
    image: "/productos/chullos/chullo2.png", // Asegúrate de guardar la imagen generada con este nombre en tu carpeta de productos
    description: "Cómodo y cálido gorro estilo beanie en tonos grises. Presenta la palabra 'AREQUIPA' tejida en letras blancas grandes sobre una banda frontal lisa, coronada por un diseño de panal geométrico en la parte superior. Culmina con un mullido pompón blanco y gris. Una opción moderna y urbana para llevar el recuerdo de Arequipa a todas partes.",
  },
  // Puedes seguir agregando el resto de tus productos aquí...

  {
    id: 12,
    name: "Poncho Café con Capucha y Calendario Inca",
    price: 150.00,
    category: "Ponchos",
    image: "/productos/ponchos/poncho2.jpg",
    description: "Poncho con capucha en un elegante color café o camello, que rinde homenaje a la herencia inca. Destaca por su majestuoso diseño tejido con figuras de deidades andinas y el calendario inca en tonos crudos. Incluye cordones con borlas en el cuello y flecos en la base, ofreciendo una combinación perfecta de abrigo, tradición y cultura viva."
  },
  {
    id: 13,
    name: "Poncho Blanco con Capucha y Franjas Laterales",
    price: 70.00,
    category: "Ponchos",
    image: "/productos/ponchos/poncho3.jpg",
    description: "Poncho con capucha de base blanca prístina que irradia elegancia y sencillez. Su diseño minimalista se ve realzado por finas franjas verticales tejidas con sutiles colores en los laterales. Cuenta con delicados cordones con borlas blancas en el cuello y flecos inferiores que añaden textura y movimiento a esta prenda sofisticada."
  },
  {
    id: 14,
    name: "Poncho Azul Jaspeado con Capucha y Motivos de Llama",
    price: 70.00,
    category: "Ponchos",
    image: "/productos/ponchos/poncho4.jpg",
    description: "Atractivo poncho azul jaspeado o gris azulado con capucha. Presenta como motivo principal grandes figuras de llamas enfrentadas en color blanco, acompañadas de patrones geométricos tipo zigzag y estrellas andinas en el pecho y hombros. Terminado con gruesos flecos blancos y cordones con borlas, es una pieza abrigadora y de gran presencia visual."
  },
  {
    id: 15,
    name: "Poncho Rosa Jaspeado con Capucha y Motivo Tumi",
    price: 70.00,
    category: "Ponchos",
    image: "/productos/ponchos/poncho5.jpg",
    description: "Poncho con capucha en una suave y cálida tonalidad rosa o salmón jaspeado. Su tejido revela complejos y elegantes motivos de iconografía andina precolombina en blanco, incluyendo deidades o el tradicional Tumi. Sus acabados incluyen cordones con borlas en la capucha y flecos blancos en el borde inferior, brindando un estilo femenino y culturalmente rico."
  },
  {
    id: 16,
    name: "Poncho Turquesa con Capucha, Tumi y Franjas Degradé",
    price: 200.00,
    category: "Ponchos",
    image: "/productos/ponchos/poncho6.jpg",
    description: "Vibrante poncho color turquesa intenso con capucha, protagonizado por la imponente figura de un Tumi o deidad inca en el centro. Flanqueado por hermosas franjas verticales con efecto degradé en tonos cálidos, rematadas con motivos de olas andinas. Decorado con cordones de borlas blancas y flecos multicolores, es una prenda que destaca por su riqueza cromática y simbólica."
  },
  {
    id: 17,
    name: "Poncho Artesanal Verde Menta con Mangas y Diseño de Picaflores",
    price: 40.00,
    category: "Ponchos Con Manga",
    image: "/productos/ponchos_manga/poncho_manga1.jpg",
    description: "Hermoso poncho tejido a mano que destaca por su delicado diseño primaveral de picaflores y flores rosadas sobre un fondo en tonos verde menta, blanco y gris. Cuenta con mangas para mayor comodidad y un cuello alto abrigador adornado con finas borlas y detalles de grecas en los bordes. Una prenda suave, detallada y perfecta para lucir un estilo andino moderno."
  },
  {
    id: 18,
    name: "Poncho Artesanal Turquesa con Mangas y Diseño de Picaflores",
    price: 40.00,
    category: "Ponchos",
    image: "/productos/ponchos/poncho7.jpg",
    description: "Hermoso poncho tejido a mano que destaca por su delicado diseño primaveral de picaflores y flores rosadas sobre un fondo en tonos verde menta, blanco y gris. Cuenta con mangas para mayor comodidad y un cuello alto abrigador adornado con finas borlas y detalles de grecas en los bordes. Una prenda suave, detallada y perfecta para lucir un estilo andino moderno."
  }
];