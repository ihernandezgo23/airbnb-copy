import React from 'react';

interface HouseCardProps {
  imageSrc: string;
  location: string;
  distance: string;
  dates: string;
  price: string;
  rating: string;
}

export const HouseCard: React.FC<HouseCardProps> = ({
  imageSrc,
  location,
  distance,
  dates,
  price,
  rating,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 w-full max-w-xs mx-auto">
      {/* Favorito entre huéspedes label */}
      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-white text-gray-700 text-[10px] sm:text-xs font-semibold px-1 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
        Favorito entre huéspedes
        <span className="text-red-500 text-sm sm:text-base">❤️</span>
      </div>
      {/* Image */}
      <img
        src={imageSrc}
        alt={location}
        className="w-full h-40 sm:h-48 object-cover"
      />
      {/* Info */}
      <div className="p-2 sm:p-3">
        <h3 className="text-center text-sm sm:text-md font-medium text-gray-900 mb-1 line-clamp-1">
          {location}
        </h3>
        <p className="text-[11px] sm:text-xs text-gray-600 mb-1 line-clamp-1">
          {distance}
        </p>
        <p className="text-[11px] sm:text-xs text-gray-600 mb-1">
          {dates}
        </p>
        <p className="text-sm sm:text-md font-bold text-gray-900 mb-1">
          {price}
        </p>
        <div className="flex items-center justify-center text-yellow-500 text-[1px] sm:text-md">
          <span className="text-yellow-500">★</span> {rating}
        </div>
      </div>
    </div>
  );
};