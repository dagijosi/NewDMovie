import React from 'react';

interface GenreCardProps {
  image: string;
  title: string;
}

const GenreCard: React.FC<GenreCardProps> = ({ image, title }) => {
  return (
    <div className="flex justify-center items-center w-40 h-20 bg-center bg-cover rounded-xl flex-shrink-0" style={{ backgroundImage: `url(${image})` }}>
      <h3 className="text-white text-lg font-bold">{title}</h3>
    </div>
  );
};

export default GenreCard;
