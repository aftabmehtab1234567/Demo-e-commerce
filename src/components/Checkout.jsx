import React, { useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
const Checkout = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  // State for handling payment completion and pop-up slip visibility
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  
  // State to store form input values
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
    paymentMethod: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleCompleteOrder = (e) => {
    e.preventDefault();
    setIsOrderCompleted(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center my-4">Checkout</h1>

      {/* Display Product Details */}
      <div className="border-b pb-4">
        <h2 className="text-xl font-semibold mb-4">Product Details</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.title} (x{item.quantity})</span>
            <span>{item.price}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4">
          <span>Total Amount:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form className="space-y-4 mt-6" onSubmit={handleCompleteOrder}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="w-full px-4 py-2 border rounded"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          className="w-full px-4 py-2 border rounded"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          className="w-full px-4 py-2 border rounded"
          value={formData.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Postal Code"
          name="postalCode"
          className="w-full px-4 py-2 border rounded"
          value={formData.postalCode}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="w-full px-4 py-2 border rounded"
          value={formData.email}
          onChange={handleInputChange}
        />

        {/* Payment Options */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                className="mr-2"
                onChange={handleInputChange}
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                className="mr-2"
                onChange={handleInputChange}
              />
              PayPal
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                className="mr-2"
                onChange={handleInputChange}
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 w-full mt-6">
          Complete Order
        </button>
      </form>

      {/* Pop-up Slip with Full Details */}
      {isOrderCompleted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/2 max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Order Confirmation</h2>
            
            {/* Customer Details */}
            <div className="mb-4">
              <h3 className="font-semibold">Customer Details:</h3>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Address:</strong> {formData.address}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>Postal Code:</strong> {formData.postalCode}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
            </div>
            
            {/* Product Details */}
            <div className="mb-4">
              <h3 className="font-semibold">Product Details:</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold mt-4">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Close Button */}
            <div className="mt-4">
  <Link to="/" className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 flex justify-center">
    Close
  </Link>
</div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
