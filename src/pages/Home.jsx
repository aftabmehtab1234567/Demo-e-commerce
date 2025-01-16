import React from 'react';
import { category } from "../assets/mockdata";
import hero from "../assets/images/hero.png"; // Correct import path
import { InfoCart } from "../components/infoSection"; // Correct named import
import Category from '../components/Category';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="p-6">
            {/* "Shop by Categories" Section */}
           


            {/* Main Content Layout (Flex: Category List + Hero Image) */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">

                {/* Category List with White Background */}
                <ul className="flex flex-col gap-4 w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
                <div className="bg-red-500 py-4 mb-6 flex justify-start items-center">
                <h2 className="text-xl font-bold text-white">SHOP BY CATEGORIES</h2>
            </div>
                    {category.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center bg-white text-black px-4 py-2 rounded-md shadow-sm"
                        >
                            <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Hero Image with "Shop Now" Button */}
                <div className="w-full md:w-2/3 relative">
                    <img
                        src={hero}
                        alt="Hero Banner"
                        className="rounded-lg w-full object-cover"
                    />
                    <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white py-2 px-6 rounded-md text-lg hover:bg-red-600 transition-all">
                    <Link to="/shop">Shop Now</Link>
                    </button>
                </div>
            </div>

            {/* InfoCart Section */}
            <InfoCart />
            <Category/>
        </div>
    );
};

export default Home;
