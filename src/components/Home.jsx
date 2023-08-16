import React from "react";
import products from "../components/DB";

const Home = ({ handleAddToCart }) => {
  return (
    <div className="container main">
      <h1>All Products</h1>
      <div className="products">
        {products.map((singleProduct) => {
          const { id, name, price, image } = singleProduct;
          return (
            <div key={id} className="product">
              <img src={image} alt="" />
              <p className="name">{name}</p>
              <p className="price">${price}</p>
              <button onClick={() => handleAddToCart(singleProduct)} className="btn">
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
