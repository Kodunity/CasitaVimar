const productos = [
  {
    id: 1,
    nombre: "Meal Preps",
    descripcion: "5 platos *No incluyen meriendas*.",
    img: (src = "..//Imagenes/IMG-20220528-WA0046-removebg-preview.png"),
    cantidad: 1,

    precio: [48,78,112],
    
  },
  {
    id: 2,
    nombre: "Catering",
    descripcion:
      "Ofrecemos nuestro servicio de catering para todo tipo de actividad y evento siendo confeccionado por nuestra chef. Las ordenes deben de ser con 2 a 4 semanas con anticipación y requiere deposito el cual depende de la cantidad de comensales y este no es reembolsable, para más información favor de comunicarse con nosotros al (787) 604-0764",
    img: (src = "../Imagenes/IMG-20220809-WA0013.jpg"),
    cantidad: 1,

    precio: [50,100,150],
  
  },
  {
    id: 3,
    nombre: "Bandeja Clásica",
    descripcion:
      "Frutas frescas, frutos secos, nueces, variedad de quesos, variedad de jamones, pretzels/nueces chocolate o compitadas",
    img: (src = "..//Imagenes/Bandejaclasica.jpg"),
    cantidad: 1,

    precio: [50,65,80],
    
  },

  {
    id: 4,
    nombre: "Bandeja Contemporánea",
    descripcion:
      "Vegetales, nueces, variedad de quesos, variedad de jamones, aceitunas rellenas, mini dips: humus pimientos asados, habichuelas, cielito lindo, pollo y queso crema, 2 dips.",
    img: (src = "..//Imagenes/Bandejacontemporanea.jpg"),
    cantidad: 1,

    precio: [55,70,85],
    
  },
  {
    id: 5,
    nombre: "Bandeja Divertida",
    descripcion:
      "Frutas frescas, fresas con chocolate, variedad de quesos, variedad de jamones, dulces variados, chocolates variados y nueces.",
    img: (src = "..//Imagenes/bandejadivertida.jpg"),
    cantidad: 1,

    precio: [45,60,70],
  },
  {
    id: 6,
    nombre: "Bandeja Sutil",
    descripcion:
      "Mini quesitos, mini pastelillos de guayaba, boli donas, nutella flower, palitos de dulce de leche, strudel manzana, salsa de chocolate, salsa guayaba, salsa de dulce de leche.",
    img: (src = "..//Imagenes/Bandejasutil.jpg"),
    cantidad: 1,

    precio: [45,60,75],

  },
  {
    id: 7,
    nombre: "Bandeja Endulzante",
    descripcion:
      "Mini quesitos, mini pastelillos de guayaba, nueces, nueces confitadas, nueces con chocolate, cinamon rolls, nutella flower, strudel manzana, bocadillos de limón,IVU, inluido.",
    img: "..//Imagenes/BandejaEndulzante.jpg",
    cantidad: 1,

    precio: [50,65,80],
  },
  {
    id: 8,
    nombre: "Mini Charcutería Bandeja Rectangualar",
    descripcion:
      "Mini crossant con jamón queso y ensalada, frutas frescas, frutos secos, mini cupcakes, salami, galletas gourmet, *MINIMO de 12* IVU, inluido.",
    img: "..//Imagenes/Minicharcuteria.jpg",
    cantidad: 1,
    precio: [10],
  },
  {
    id: 9,
    nombre: "Mini Charcutería Bandeja Cuadrado",
    descripcion:
      "Mini crossant con jamón queso y ensalada, frutas frescas, frutos secos, mini cupcakes, salami, galletas gourmet, *MINIMO de 12*.",
    precio: [12],
    img: (src = "..//Imagenes/Minicharcuteria.jpg"),
    cantidad: 1,
  },
  {
    id: 10,
    nombre: "Mini Charcutería Fries Recipe",
    descripcion:
      "Nueces, mini pincho de quesos y jamones, mini pincho de frutas frescas, mini pincho de vegetales, boli donas o macarón,  *MINIMO de 12*.",
    precio: [10],
    img: (src = "..//Imagenes/Minicharcuteria.jpg"),
    cantidad: 1,
  },
  {
    id: 11,
    nombre: "Bizcocho de Zanahoria",
    precio: [40],
    img: (src = "..//Imagenes/Bizcochozanahoria.png"),
    cantidad: 1,
  },
  {
    id: 12,
    nombre: "Bizcocho Mojadito",
    precio: [30],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 13,
    nombre: "Bizcocho de Calabaza",
    precio: [40],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 14,
    nombre: "Bizcocho Bananas y Nueces",
    precio: [40],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 15,
    nombre: "Bizcocho Tres Leches",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [10,20,40],
    
  },
  {
    id: 16,
    nombre: "Bizcocho Tres Leches Tamaño Individual 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 17,
    nombre: "Bizcocho Tres Leches Tamaño Individual 1 docena",
    precio: [27],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 18,
    nombre: "Cup Cakes Vainilla 1 docena",
    precio: [15],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 19,
    nombre: "Cup Cakes Vainilla 1/2 docena",
    precio: [8],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 20,
    nombre: "Cup Cakes Chocolate 1 docena",
    precio: [15],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 21,
    nombre: "Cup Cakes Chocolate 1/2 docena",
    precio: [8],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 22,
    nombre: "Cup Cakes Red Velvet 1 docena",
    precio: [15],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 23,
    nombre: "Cup Cakes Red Velvet 1/2 docena",
    precio: [8],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 24,
    nombre: "Muffins Zanahoria 1 docena",
    precio: [24],
    img: (src = "..//Imagenes/Menumuffins.jpg"),
    cantidad: 1,
  },
  {
    id: 25,
    nombre: "Muffins Zanahoria 1/2 docena",
    precio: [12],
    img: (src = "..//Imagenes/Menumuffins.jpg"),
    cantidad: 1,
  },
  {
    id: 26,
    nombre: "Muffins Banana Nuts 1 docena",
    precio: [24],
    img: (src = "..//Imagenes/Menumuffins.jpg"),
    cantidad: 1,
  },
  {
    id: 27,
    nombre: "Muffins Banana Nuts 1/2 docena",
    precio: [12],
    img: (src = "..//Imagenes/Menumuffins.jpg"),
    cantidad: 1,
  },
  {
    id: 28,
    nombre: "Muffins Napoleón 1 docena",
    precio: [27],
    img: (src = "..//Imagenes/Menumuffins.jpg"),
    cantidad: 1,
  },
  {
    id: 29,
    nombre: "Muffins Napoleón 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/Menumuffins.jpg"),
    cantidad: 1,
  },
  {
    id: 30,
    nombre: "Muffins Cream Cheese/ Fresas 1 docena",
    precio: [27],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 31,
    nombre: "Muffins Cream Cheese/ Fresas 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 32,
    nombre: "Tembleque",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [5,10,15],
  },
  {
    id: 33,
    nombre: "Tembleque Individual 1/2 docena",
    precio: [8],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 34,
    nombre: "Flan Vainilla",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [5,10,18],
  },

  {
    id: 35,
    nombre: "Flan Queso",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [5,10,18],
  },
  {
    id: 36,
    nombre: "Flan Calabaza",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [7,12,20],
  },
  {
    id: 37,
    nombre: "Flan Pistacho",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [7,12,20],
  },
  {
    id: 38,
    nombre: "Flan Almendra Pequeño",
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,

    precio: [7,12,20],
  },
  {
    id: 39,
    nombre: "Strudel Guayaba 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 40,
    nombre: "Strudel Guayaba 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 41,
    nombre: "Strudel Guayaba y Queso 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 42,
    nombre: "Strudel Guayaba y Queso 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 43,
    nombre: "Strudel Nutella 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 44,
    nombre: "Strudel Nutella 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 45,
    nombre: "Strudel Oreo 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 46,
    nombre: "Strudel Oreo 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 47,
    nombre: "Strudel Limón 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 48,
    nombre: "Strudel Limón 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 49,
    nombre: "Strudel Manzana 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 50,
    nombre: "Strudel Manzana 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 51,
    nombre: "Strudel Fresa 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 52,
    nombre: "Strudel Fresa 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 53,
    nombre: "Strudel Bavarian 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 54,
    nombre: "Strudel Bavarian 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/charcuteria3n.png"),
    cantidad: 1,
  },
  {
    id: 55,
    nombre: "Brownies Choco Chips 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/Brownies.jpg"),
    cantidad: 1,
  },
  {
    id: 56,
    nombre: "Brownies Choco Chips 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/Brownies.jpg"),
    cantidad: 1,
  },
  {
    id: 57,
    nombre: "Brownies White Chips 1 docena",
    precio: [22],
    img: (src = "..//Imagenes/Brownies.jpg"),
    cantidad: 1,
  },
  {
    id: 58,
    nombre: "Brownies White Chips 1/2 docena",
    precio: [14],
    img: (src = "..//Imagenes/Brownies.jpg"),
    cantidad: 1,
  },
  {
    id: 59,
    nombre: "Tartitas de Frutas Mixtas Coco 1 docena",
    precio: [30],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 60,
    nombre: "Tartitas de Frutas Mixtas Coco 1/2 docena",
    precio: [18],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 61,
    nombre: "Tartitas de Frutas Mixtas Almendras 1 docena",
    precio: [30],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 62,
    nombre: "Tartitas de Frutas Mixtas Almendras 1/2 docena",
    precio: [18],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 63,
    nombre: "Tartitas de Frutas Mixtas Maní 1 docena",
    precio: [30],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 64,
    nombre: "Tartitas de Frutas Mixtas Maní 1/2 docena",
    precio: [18],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 65,
    nombre: "Tartitas de Frutas Mixtas Fresas  1 docena",
    precio: [30],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
  {
    id: 66,
    nombre: "Tartitas de Frutas Mixtas Fresas 1/2 docena",
    precio: [18],
    img: (src = "..//Imagenes/IMG-20211206-WA0008.jpg"),
    cantidad: 1,
  },
];


