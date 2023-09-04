const products = [
  { id: "1", name: "Dandadan", price: 15990, category:"shonen", image: "/img/shonen.jpg"},
  { id: "2", name: "Naruto", price: 12990, category:"shonen", image: "/img/shonen.jpg"  },
  { id: "3", name: "My hero Academy", price: 13990, category:"shonen", image: "/img/shonen.jpg" },
  { id: "4", name: "Chainsaw man", price: 11990, category:"shonen", image: "/img/shonen.jpg" },
  { id: "5", name: "Hajime no ippo", price: 9900, category:"deportes", image:"/img/deportes.jpg" },
  { id: "6", name: "Re-main", price: 8500, category:"deportes", image:"/img/deportes.jpg" },
  { id: "7", name: "Kuroko no Basket", price: 8500, category:"deportes", image:"/img/deportes.jpg" },
  { id: "8", name: "Slam-dunk", price: 10990, category:"deportes", image:"/img/deportes.jpg" },
  { id: "9", name: "One piece", price: 15990, category:"populares" , image: "/img/populares.jpg"},
  { id: "10", name: "Doraemon", price: 7990, category:"populares", image: "/img/populares.jpg"},
  { id: "11", name: "Dragonball", price: 9000, category:"populares", image: "/img/populares.jpg"},
  { id: "12", name: "Kimetsu No Yaiba", price: 9500, category:"populares", image: "/img/populares.jpg"},
];

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("No Tenemos Stock");
      }
    }, 1000);
  });
};


export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productsFiltered = category
        ? products.filter((product) => product.category === category)
        : products;

      resolve(productsFiltered);
    }, 1000);
  });
};