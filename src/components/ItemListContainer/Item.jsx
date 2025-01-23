import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="item--card">
      <div className="card">
        <img src={product.image} className="card--image" alt={product.name} />
        <div className="card--details">
          <h3 className="card--title">{product.name}</h3>
          <p className="card--price">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;