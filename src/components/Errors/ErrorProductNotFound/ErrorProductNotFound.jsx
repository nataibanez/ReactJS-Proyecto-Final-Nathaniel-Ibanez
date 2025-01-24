import {Link} from "react-router-dom";
import './errorproductnotfound.scss';


const ErrorProductNotFound = () => {
  return (
    <div className="error--not-found">
        <div className="error--not-found-text">
            Producto no encontrado
        </div>
        <div className="error--not-found-subtext">
            Hubo algún problema encontrando el producto
        </div>
        <Link to="/" className="error--not-found-back-button">Volver al inicio</Link>
        <img src="/img/underconstruction.jpg" className="error--not-found-image" />
    </div>
  )
}

export default ErrorProductNotFound