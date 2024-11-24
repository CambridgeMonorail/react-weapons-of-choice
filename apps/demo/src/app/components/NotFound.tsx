import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">Page Not Found</p>
      <a href="/" className="text-blue-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
