import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col-md-5">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>
      <div className="col-md-7">
        <h2>{product.title}</h2>
        <p className="text-muted">{product.category}</p>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
