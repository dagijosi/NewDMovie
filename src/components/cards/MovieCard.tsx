import React from 'react';

interface MovieCardProps {
  image: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center w-40 h-40 bg-center bg-cover rounded-xl flex-shrink-0" style={{ backgroundImage: `url(${image})` }}>
      <h3 className="text-white text-lg font-bold mt-auto mb-4">{title}</h3>
    </div>
  );
};

export default MovieCard;
