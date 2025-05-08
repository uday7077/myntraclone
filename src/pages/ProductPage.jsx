import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="img-fluid"
          style={{ objectFit: "contain", height: "400px" }}
        />
      </div>
      <div className="col-md-6">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button
          className="btn btn-success"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
