import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const navigate = useNavigate();

  console.log("cart in cart page", cart);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const checkoutHandler = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        fontFamily: "Arial",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ flex: 3 }}>
        <h2>Your Cart</h2>
        <hr />

        {cart.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                marginTop: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <Link
                to={`/products/${item.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "80px", borderRadius: "8px" }}
                  />
                  <h3>{item.title}</h3>
                </div>
              </Link>

              <div>
                <p>${item.price}</p>

                <div>
                  <button
                    onClick={() => {
                      decreaseQuantity(item.id);
                    }}
                  >
                    ➖
                  </button>

                  <span style={{ margin: "0 10px" }}>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => {
                      increaseQuantity(item.id);
                    }}
                  >
                    ➕
                  </button>
                </div>
              </div>

              <div>
                <p>Total: ${item.price * item.quantity}</p>

                <button
                  style={{
                    marginTop: "8px",
                    padding: "5px 10px",
                    background: "red",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "4px",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE = SUMMARY */}

      <div
        style={{
          flex: 1,
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          height: "fit-content",
        }}
      >
        <h2>Summary</h2>

        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          <span>Total Items</span>
          <span>{cart.length}</span>
        </div>

        <hr />

        <h3
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </h3>

        <button
          onClick={checkoutHandler}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "1rem",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}