import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <strong>e-shop</strong>, your one-stop destination for premium products at unbeatable prices.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Our mission is to provide high-quality products at competitive prices while delivering exceptional customer service. We aim to create a community of happy and satisfied customers by focusing on:
        </p>
        <ul className="mt-4 space-y-2 text-lg text-gray-600 list-disc pl-6">
          <li><strong>Variety:</strong> A wide range of products from top categories like electronics, fashion, beauty, home essentials, and more.</li>
          <li><strong>Affordability:</strong> Competitive pricing without compromising quality.</li>
          <li><strong>Convenience:</strong> User-friendly interface, secure payments, and fast delivery.</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
            <p className="text-gray-600 text-center">
              Every product is carefully curated and tested to meet our high standards.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-center">
              Your transactions are safe with us, thanks to our robust encryption technology.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h3>
            <p className="text-gray-600 text-center">
              Our team is here to help you with your queries 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-md shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Our Vision</h2>
        <p className="text-lg text-gray-600 text-center">
          We envision a world where online shopping is accessible, enjoyable, and beneficial to all. With technology and innovation, we aim to set new benchmarks in the e-commerce industry.
        </p>
      </section>
    </div>
  );
};

export default About;
