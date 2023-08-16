import React from "react";
import products from "../components/DB";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Home = ({ handleAddToCart }) => {
  const notify = () => {
    toast.success("An item has been added !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
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
              <button
                onClick={() => {
                  handleAddToCart(singleProduct);
                  notify();
                }}
                className="btn"
              >
                Add To Cart
              </button>
              <ToastContainer/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
