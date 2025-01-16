import React from 'react';
import { FaHeadset, FaShippingFast, FaMoneyBillWave, FaTag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InfoCart = () => {
    const infoData = [
        {
            icon: <FaHeadset className="text-3xl text-gray-700" />,
            text: 'Customer Support',
            description: 'How can I help you?',
        },
        {
            icon: <FaShippingFast className="text-3xl text-gray-700" />,
            text: 'Fast Shipping',
            description: 'How can I help you?',
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-gray-700" />,
            text: 'Money Back Guarantee',
            description: 'How can I help you?',
        },
        {
            icon: <FaTag className="text-3xl text-gray-700" />,
            text: 'Shop Now',
            description: 'Discover the best deals!',
            link: '/shop', // Add a link here
        },
    ];

    return (
        <div className="flex flex-wrap justify-between p-6 md:space-x-0 md:space-y-0">
            {infoData.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md w-full sm:w-auto md:w-1/4 transform transition-transform duration-200 ease-in-out hover:scale-105"
                >
                    {item.icon}
                    <div>
                        <h1 className="text-lg text-gray-800 font-semibold">
                            {/* Check if a link is provided */}
                            {item.link ? (
                                <Link to={item.link} className="hover:underline">
                                    {item.text}
                                </Link>
                            ) : (
                                item.text
                            )}
                        </h1>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { InfoCart };
