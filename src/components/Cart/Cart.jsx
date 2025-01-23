import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './cart.scss';

const Cart = () => {
  const { cart, totalProductsPrice, deleteProductById, deleteEntireCart } = useContext(CartContext);

  // Early return
  if(cart.length === 0) {
    return (
      <div>
        <h1 className="empty-cart--main-text">¡Tu carro está vacío!</h1>
        <Link to="/" className="empty-cart--go-back">Volver al inicio</Link>
      </div>
    );
  }

  // Return normal
  return (
    <div className="cart--container">
      <ul className="cart--product-list">
        {cart.map((productCart) => (
          <li className="cart--product-card" key={productCart.id}>
            <img className="cart--image" src={productCart.image} alt={productCart.name} />
            <div className="cart--product-details">
              <p className="cart--product-name">{productCart.name}</p>
              <p className="cart--product-price">Precio unitario: ${productCart.price}</p>
              <p className="cart--product-quantity">Cantidad: {productCart.quantity}</p>
              <button className="cart--delete-product-button" onClick={() => deleteProductById(productCart.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart--total-products-price">
        <p>Precio total: ${totalProductsPrice()}</p>
      </div>
      <div className="cart--actions">
        <button className="cart--delete-entire-cart-button" onClick={() => deleteEntireCart()}>Eliminar todos los productos</button>
        <Link to="/checkout" className="cart--checkout-button">Terminar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
