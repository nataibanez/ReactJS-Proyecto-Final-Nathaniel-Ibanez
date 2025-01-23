import { useState } from 'react';
import './itemcount.scss';

const ItemCount = ({ stock, handleAddProductsToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRemoveQuantity = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const handleClickAddQuantity = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count--container">
      <div className="item-count--controls">
        <button className="item-count--button" onClick={handleClickRemoveQuantity}>
          -1
        </button>
      <p className="item-count--quantity">{count}</p>
        <button className="item-count--button" onClick={handleClickAddQuantity}>
          +1
        </button>
    </div>

    <button
      className="item-count--add-to-cart"
      onClick={() => handleAddProductsToCart(count)}
      >
        Agregar al carrito
    </button>
    </div>
  );
};

export default ItemCount;