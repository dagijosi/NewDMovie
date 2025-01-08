import React from "react";
import { FiPlus } from "react-icons/fi";

interface MovieDetail {
  backpic: string;
  title: string;
  episodes: string;
  genre: string;
}

interface CardProps {
  movieDetail: MovieDetail;
}

const Card: React.FC<CardProps> = ({ movieDetail }) => (
  <div
    className="flex flex-col bg-darkblue rounded-2xl h-64 w-full md:w-44 justify-between bg-center bg-cover"
    style={{ backgroundImage: `url(${movieDetail.backpic})` }}
  >
    <label className="text-sm md:text-base not-italic font-extrabold m-4">
      {movieDetail.title}
    </label>
    <div className="mx-2">
      <div className="flex flex-row justify-between">
        <label className="text-xs not-italic font-medium mt-2 md:mt-5">
          {movieDetail.episodes}
        </label>
        <label className="text-xs not-italic font-medium mt-2 md:mt-5 ml-4 md:ml-12">
          {movieDetail.genre}
        </label>
      </div>

      <div className="flex flex-row my-2 justify-between">
        <button className="flex w-10 md:w-12 h-8 md:h-10 items-center bg-darkblue justify-center rounded-xl">
          <FiPlus />
        </button>
        <button className="flex w-20 md:w-24 h-8 md:h-10 items-center justify-center flex-shrink-0 text-xs md:text-sm not-italic font-extrabold ml-2 px-4 md:px-10 py-2 bg-lightgreen rounded-lg">
          Watch
        </button>
      </div>
    </div>
  </div>
);

export default Card;
