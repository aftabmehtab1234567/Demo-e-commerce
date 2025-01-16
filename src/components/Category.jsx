import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

import Watch from "../assets/images/watch.png";
import Stacke from "../assets/images/Stacke.png";
import Hera from "../assets/images/hera.png";
import Camera from "../assets/images/camera.png";
import beauty from "../assets/images/beauty.png";
import laptop from "../assets/images/laptop.png";
import tshirt from "../assets/images/tshirt.png";
import gearbox from "../assets/images/gearbox.png";

const imageArray = [
  { title: "Watch", image: Watch, price: "$50", review: "★★★★☆" },
  { title: "Stacke", image: Stacke, price: "$60", review: "★★★★☆" },
  { title: "Hera", image: Hera, price: "$70", review: "★★★★★" },
  { title: "Camera", image: Camera, price: "$80", review: "★★★★☆" },
  { title: "Beauty", image: beauty, price: "$40", review: "★★★☆☆" },
  { title: "Laptop", image: laptop, price: "$500", review: "★★★★★" },
  { title: "T-shirt", image: tshirt, price: "$20", review: "★★★★☆" },
  { title: "Gear-box", image: gearbox, price: "$100", review: "★★★★☆" },
];

const Category = () => {
  const searchTerm = useSelector((state) => state.cart.searchTerm);  // Access the search term from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">Products</h1>
      <div className="flex flex-wrap justify-between p-6 space-y-4 md:space-y-0 md:space-x-0">
        {imageArray
          .filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())  // Filter based on searchTerm
          )
          .map((item, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-2 flex flex-col items-center"
            >
              <h3 className="text-center">{item.title}</h3>
              <img
                className="w-48 h-48 object-cover mb-2"
                src={item.image}
                alt={item.title}
              />
              <p className="text-gray-600">{item.price}</p>
              <p className="text-yellow-500">{item.review}</p>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: index,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                    })
                  );
                  navigate("/cart");
                }}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
