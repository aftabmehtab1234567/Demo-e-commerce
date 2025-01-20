import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart Items: ", cartItems);
  const dispatch = useDispatch();

  const totalRevenue = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center my-4">Cart</h1>
      <div className="flex flex-col items-center">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center w-full p-4 border-b">
            <img className="w-24 h-24 object-cover mr-4" src={item.image} alt={item.title} />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity({ id: item.id }))}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold text-center my-4">Total Revenue: ${totalRevenue.toFixed(2)}</h2>

      {/* Checkout Button */}
      {cartItems.length > 0 && (
        <div className="flex justify-center my-4">
          <Link to="/checkout">
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Checkout
            </button>
          </Link>
        </div>
      )}

      {/* Message when cart is empty */}
      {cartItems.length === 0 && (
        <div className="text-center mt-4 text-gray-600">
          Your cart is empty. Add some items to proceed with checkout.
        </div>
      )}
    </div>
  );
};

export default Cart;
// hdfshkshfljskldsfk