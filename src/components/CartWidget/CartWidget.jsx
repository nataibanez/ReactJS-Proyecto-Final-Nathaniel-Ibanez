import { BsCartCheck } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import '../Navbar/navbar.scss'


const CartWidget = () => {

  const {totalProductsQuantity} = useContext(CartContext);
  let cartQuantity = totalProductsQuantity();

  return (
    <Link to="/cart" className="cart-widget">
        <BsCartCheck size={30} color="white"/>
         <h2>
            {cartQuantity !== 0 
              ? cartQuantity 
              : ""
            }
          </h2>
    </Link>
  )
}

export default CartWidget