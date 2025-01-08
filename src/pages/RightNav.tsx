import { FiBell } from "react-icons/fi";
import MovieList from "../components/lists/MovieList";
import GenreList from "../components/lists/GenreList";

const RightNav = () => {
  const startedMovies = [
    { image: "./images/Loki.png", title: "Movie 1" },
    { image: "./images/Loki.png", title: "Movie 2" },
    { image: "./images/Loki.png", title: "Movie 3" },
  ];

  const topRatedMovies = [
    { image: "./images/Loki.png", title: "Top Rated 1" },
    { image: "./images/Loki.png", title: "Top Rated 2" },
    { image: "./images/Loki.png", title: "Top Rated 3" },
  ];

  const genres = [
    { image: "./images/Drama.png", title: "Drama" },
    { image: "./images/Drama.png", title: "Action" },
    { image: "./images/Drama.png", title: "Comedy" },
    { image: "./images/Drama.png", title: "Horror" },
    { image: "./images/Drama.png", title: "Romance" },
    { image: "./images/Drama.png", title: "Sci-Fi" },
  ];

  return (
    <div className="bg-middleblue text-white h-screen md:block py-6 px-8 overflow-y-auto custom-scrollbar">
      <div className="flex flex-row justify-between items-center">
        <button className=" inline-flex py-3 px-4 items-center bg-darkgray rounded-2xl justify-center">
          <FiBell />
        </button>
        <img className="w-12 h-12 flex-shrink-0" src={"./images/Profile.png"} alt="Profile" />
      </div>
      <MovieList title="Started Movies" movies={startedMovies} />
      <MovieList title="Top Rated" movies={topRatedMovies} />
      <GenreList genres={genres} />
    </div>
  );
};

export default RightNav;
