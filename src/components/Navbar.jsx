import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector
import { setSearchTerm } from "../redux/CartSlice"; // Import the action to set search term

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // Access items from Redux store
  const items = useSelector((state) => state.cart.items);

  // Calculate total quantity of items in the cart
  const totalCartItems = items.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    dispatch(setSearchTerm(value)); // Update the search term in Redux
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <a href="/">e-shop</a>
        </div>

        <button
          className="md:hidden text-xl text-gray-600"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FaBars />
        </button>

        <div
          className={`md:flex space-x-8 ${
            isMobileMenuOpen
              ? "flex flex-col absolute top-16 left-0 w-full bg-white shadow-lg md:hidden"
              : "hidden"
          }`}
        >
          <a href="/" className="p-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="/about" className="p-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="/contact" className="p-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
          <a href="/shop" className="p-2 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Shop
          </a>
        </div>

        <div className="relative flex-1 mx-4 hidden md:block">
          <input
            type="text"
            placeholder="Search Product"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-red-500 cursor-pointer" />
        </div>

        <div className="flex items-center space-x-4">
          <a href="/cart" aria-label="View Cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </a>
          <button className="hidden md:block">Login | Register</button>
          <button className="block md:hidden" aria-label="User Menu">
            <FaUser className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
