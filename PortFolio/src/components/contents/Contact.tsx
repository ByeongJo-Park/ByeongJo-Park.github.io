import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-gray-900 border border-gray-700 rounded-3xl p-8 text-white shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-point">Contact</h2>
      <div className="space-y-4 flex flex-col w-full justify-center items-center">
        <div className="w-72 flex items-center space-x-4 pt-10">
          <span className="text-lg font-semibold w-24">📧 Email</span>
          <span className="text-base">k97115284@gmail.com</span>
        </div>
        <div className="w-72 flex items-center space-x-4">
          <span className="text-lg font-semibold w-24">📱 Mobile</span>
          <span className="text-base">010-9711-5284</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
