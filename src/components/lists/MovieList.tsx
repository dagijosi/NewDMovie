import React from 'react';
import MovieCard from '../cards/MovieCard';


interface MovieCardProps {
  image: string;
  title: string;
}

const MovieList: React.FC<{ title: string; movies: MovieCardProps[] }> = ({ title, movies }) => (
  <div className="mt-8">
    <h2 className="text-lg font-bold mb-4">{title}</h2>
    <div className="flex flex-row justify-start w-64 overflow-x-auto mb-6 gap-4 custom-scrollbar">
      {movies.map((movie, index) => (
        <MovieCard key={index} image={movie.image} title={movie.title} />
      ))}
    </div>
  </div>
);

export default MovieList;
