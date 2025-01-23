// Función obsoleta por Firebase
// Sólo la mantengo para mostrar mi estructura de datos

const products = [
  {
    id: "Classic37",
    name: "Gin clásico 37°",
    alcoholContent: 37,
    category: "clasico",
    description: "Gin clásico con un perfil equilibrado de enebro y botánicos tradicionales, ideal para cócteles suaves y refrescantes.",
    price: 12000,
    stock: 12,
    image: "/img/Clasico-37.webp",
  },
  {
    id: "Classic47",
    name: "Gin clásico 47°",
    alcoholContent: 47,
    category: "clasico",
    description: "Gin clásico de alta graduación alcohólica, destacando sabores intensos de enebro y especias, perfecto para cócteles más robustos.",
    price: 14000,
    stock: 8,
    image: "/img/Clasico-47.webp",
  },
  {
    id: "Extra37",
    name: "Gin especiado 37°",
    alcoholContent: 37,
    category: "especiado",
    description: "Gin con un carácter especiado distintivo, suavemente equilibrado a 37°, perfecto para quienes buscan un toque de complejidad aromática.",
    price: 12500,
    stock: 5,
    image: "/img/Especiado-37.webp",
  },
  {
    id: "Extra47",
    name: "Gin especiado 47°",
    alcoholContent: 47,
    category: "especiado",
    description: "Gin especiado de alta graduación que resalta los sabores audaces de canela, cardamomo y otros botánicos intensos.",
    price: 14800,
    stock: 4,
    image: "/img/Especiado-47.webp",
  },
  {
    id: "Clear37",
    name: "Gin clear 37°",
    alcoholContent: 37,
    category: "clear",
    description: "Gin ultra puro con un perfil limpio y cristalino, diseñado para destacar botánicos sutiles y mezclarse perfectamente en cócteles ligeros.",
    price: 12000,
    stock: 8,
    image: "/img/Clear-37.webp",
  },
  {
    id: "Clear47",
    name: "Gin clear 47°",
    alcoholContent: 47,
    category: "clear",
    description: "Gin ultra puro de alta graduación, con un acabado cristalino y sabores refinados, ideal para cócteles minimalistas e intensos.",
    price: 14000,
    stock: 6,
    image: "/img/Clear-47.webp",
  },
]

// Simulación de promesa getproducts

const getProductsFromJson = () => {
  return new Promise( (resolve, reject) => {
     setTimeout(()=>{
       resolve(products)
     }, 1500)
   })
 }

export { getProductsFromJson }