import React from 'react';
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFCF96] px-2">
      <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center mb-4">Thank You!</h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          Your inquiry has been received. We'll be in touch with you shortly.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
