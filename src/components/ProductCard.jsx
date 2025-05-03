import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card h-100">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
      </Link>
      <div className="card-body">
        <h6 className="card-title">{product.title.slice(0, 40)}...</h6>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-primary w-100"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
