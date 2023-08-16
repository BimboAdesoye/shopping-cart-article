import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
// import products from "./components/DB";
import { useState, useEffect } from "react";

function App() {
  const cartItemsFromLocalStorage =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartItems, setCartItems] = useState(cartItemsFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((singleItem) => {
          return singleItem.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : singleItem;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(product);
  };

  // Increase item quantity function
  const handleIncrease = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity + 1 }
            : singleItem
        )
      );
    }
  };

  // Decrease item quantity function
  const handleDecrease = (product) => {
    const selectedItem = cartItems.find((item) => item.id === product.id);
    if (selectedItem.quantity === 1) {
      setCartItems(
        cartItems.filter((oneItem) => oneItem._id !== selectedItem._id)
      );
    } else {
      setCartItems(
        cartItems.map((singleItem) =>
          singleItem.id === product.id
            ? { ...selectedItem, quantity: selectedItem.quantity - 1 }
            : singleItem
        )
      );
    }
  };

  // Remove Item function
  const handleRemoveItem = (product) => {
    setCartItems(cartItems.filter((oneItem) => oneItem.id !== product.id));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<Home handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cartItems}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
