import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-xl text-gray-600">Loading...</span>
      </div>
    </div>
  );
}
