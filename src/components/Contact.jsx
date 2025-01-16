import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Example submission code (you should replace it with your backend logic)
    try {
      // Simulating a successful submission
      setTimeout(() => {
        setIsSubmitting(false);
        setResponseMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      setResponseMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We're here to help! Fill out the form below, and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-md shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-800">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-800">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {responseMessage && (
          <div className="mt-4 text-center text-lg font-semibold text-gray-700">
            {responseMessage}
          </div>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
