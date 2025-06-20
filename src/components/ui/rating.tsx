import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className = "text-2xl" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

export const Rating: React.FC = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="text-yellow-400 w-6 h-6" />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-8">
        <div className="flex items-center">
          <span className="font-bold text-xl">4.9</span>
          <span className="text-gray-600 ml-2">/ 5</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold text-xl">4.8</span>
          <span className="text-gray-600 ml-2">/ 5</span>
        </div>
      </div>
    </div>
  );
};