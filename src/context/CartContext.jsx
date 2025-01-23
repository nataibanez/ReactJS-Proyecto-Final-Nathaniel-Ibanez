import { useState, useEffect, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

  // Zona de datos y carga de localStorage

  const cartLocalStorage = JSON.parse(localStorage.getItem("cart--products"))
  const [cart, setCart] = useState(
    cartLocalStorage
      ? cartLocalStorage
      : []
  );

  // Seteo de localStorage

  useEffect (()=> {
    localStorage.setItem("cart--products", JSON.stringify(cart))
  }, [cart])
  
  // Deduplicación de productos añadidos en diferentes instancias 
  const addProductToCart = (newProduct) => {
    const cartIndex = cart.findIndex((product) => 
      product.id === newProduct.id
    )

    if (cartIndex === -1){
      setCart([...cart, newProduct]);      
    }
    else {
      const newCart = [...cart]
      newCart[cartIndex].quantity += newProduct.quantity;
      setCart(newCart);
    }
  }
  
  // Cálculo de precio y cantidad totales

  const totalProductsQuantity = () => {
    const productsQuantity = cart.reduce((total, productCart) => total + productCart.quantity, 0 )
    return productsQuantity;
  }

  const totalProductsPrice = () => {
    const totalPrice = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
    return totalPrice;
  }

  // Función para eliminar elementos del carro

  const deleteProductById = (productId) => {
    const filteredProducts = cart.filter((productCart) => productCart.id !== productId );
    setCart(filteredProducts);
  }

  const deleteEntireCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addProductToCart, totalProductsQuantity, totalProductsPrice, deleteProductById, deleteEntireCart}} >
      {children}
    </CartContext.Provider>
    
  )
}

export {CartContext, CartProvider} 