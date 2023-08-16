import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleDecrease,
  handleIncrease,
  handleRemoveItem,
  //   itemsPrice,
}) => {
  const itemsPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice < 80000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="container cart">
      <h1>My Cart</h1>
      {cartItems.length === 0 && (
        <div className="empty-cart">
          <h1>Cart is Empty</h1>
          <Link to={"/"}>
            <button className="empty-btn">Continue Shopping</button>
          </Link>
        </div>
      )}
      <div>
        {cartItems.length >= 1 && (
          <div className="basket">
            <div className="cart-items">
              <div className="headlines">
                <p className="">Product</p>
                <p className="">Quantity</p>
                <p className="">Price</p>
              </div>
              <div>
                {cartItems.map((cartItem) => {
                  const { image, name, price, id, quantity } = cartItem;
                  return (
                    <div key={id} className="cart-item">
                      <div className="item">
                        <img className="cart-img" src={image} alt="" />
                        <p className="cart-img-title">{name}</p>
                      </div>
                      <div className="">
                        <div className="cart-math">
                          <button
                            onClick={() => handleDecrease(cartItem)}
                            className="item-decrease"
                          >
                            -
                          </button>
                          <p className=" cart-math-number">{quantity}</p>
                          <button
                            onClick={() => handleIncrease(cartItem)}
                            className="item-increase"
                          >
                            +
                          </button>
                        </div>
                        <p
                          onClick={() => handleRemoveItem(cartItem)}
                          className="remove-btn"
                        >
                          Remove
                        </p>
                      </div>
                      <p className="cart-item-price">${price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="subtotal">
              <div className="div">
                <div>Items Price</div>
                <div>${itemsPrice}</div>
              </div>
              <div className="div">
                <div>Tax Price</div>
                <div>${taxPrice.toFixed(2)}</div>
              </div>
              <div className="div">
                <div>Shipping Price</div>
                <div>${shippingPrice}</div>
              </div>
              <hr />
              <div className="div">
                <div>
                  <strong>Total Price</strong>
                </div>
                <div>
                  <strong>${totalPrice}</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
