import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './itemdetail.scss';

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true);
  const { addProductToCart } = useContext(CartContext);

  const handleAddProductsToCart = (count) => {
    const productsToCart = { ...product, quantity: count };
    console.log(productsToCart);
    addProductToCart(productsToCart);
    setShowItemCount(false);
  };

  return (
    <div className="item-detail--container">
      <div className="item-image--main">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="item-detail--text">
        <h3 className="item-detail--title">{product.name}</h3>

        <p className="item-detail--description">{product.description}</p>

        <p className="item-detail--price">Precio: ${product.price}</p>

        <p className="item-detail--stock">Stock disponible: {product.stock}</p>

        {showItemCount ? (
          <ItemCount stock={product.stock} handleAddProductsToCart={handleAddProductsToCart} />
        ) : (
          <Link to="/cart" className="item-detail--finish-purchase">
            Terminar la compra
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
