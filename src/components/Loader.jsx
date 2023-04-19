import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 01-8-8H0c0 6.627 5.373 12 12 12v-4zm0-16a8 8 0 018 8h4a12.013 12.013 0 00-3-8.735A11.965 11.965 0 0012 4V0zM19 12a7.963 7.963 0 01-2.938 6.062l-3-2.647A3.999 3.999 0 1013 11.562V8h6v4z"
        ></path>
      </svg>
      <p>Loading...</p>
    </div>
  );
}

export default Loader;
