import React from 'react';

interface DestinationCardProps {
  name: string;
  image: string;
  description: string;
  location: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, image, description, location }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-3xl group-hover:-translate-y-2">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/80 rounded-full backdrop-blur-sm">
              {location}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {name}
          </h3>
          <p className="text-sm text-gray-200 opacity-0 transition-opacity duration-300 delay-75 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;