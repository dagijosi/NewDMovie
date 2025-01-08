import React from 'react';
import GenreCard from '../GenreCard';


interface GenreCardProps {
  image: string;
  title: string;
}

const GenreList: React.FC<{ genres: GenreCardProps[] }> = ({ genres }) => (
  <div className="mt-8">
    <h2 className="text-lg font-bold mb-4">Genres</h2>
    <div className="flex flex-row justify-start w-56 overflow-x-auto mb-6 gap-4 custom-scrollbar">
      {genres.slice(0, 3).map((genre, index) => (
        <GenreCard key={index} image={genre.image} title={genre.title} />
      ))}
    </div>
    <div className="flex flex-row justify-start w-56 overflow-x-auto gap-4 custom-scrollbar">
      {genres.slice(3).map((genre, index) => (
        <GenreCard key={index} image={genre.image} title={genre.title} />
      ))}
    </div>
  </div>
);

export default GenreList;
