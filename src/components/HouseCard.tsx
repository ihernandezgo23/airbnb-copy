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
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 w-82">
      {/* Favorito entre huéspedes label */}
      <div className="absolute top-2 left-2 bg-white text-gray-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
        Favorito entre huéspedes
        <span className="text-red-500">❤️</span>
      </div>
      {/* Image */}
      <img src={imageSrc} alt={location} className="w-full h-48 object-cover" />
      {/* Info */}
      <div className="p-3"> {/* Reduced padding to match compact layout */}
        <h3 className="text-md text-center font-medium text-gray-900 mb-1">{location}</h3>
        <p className="text-xs text-gray-600 mb-1">{distance}</p>
        <p className="text-xs text-gray-600 mb-1">{dates}</p>
        <p className="text-sm font-bold text-gray-900 mb-1">{price}</p>
        <div className="flex items-center text-yellow-500 text-md">
          <span className="text-yellow-500">★</span> {rating}
        </div>
      </div>
    </div>
  );
};