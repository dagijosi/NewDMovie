import { FiBell } from "react-icons/fi";

// Define props type for GenreCard
interface GenreCardProps {
  image: string;
  title: string;
}

// Refactor GenreCard to accept props with types
const GenreCard: React.FC<GenreCardProps> = ({ image, title }) => {
  return (
    <div
      className="flex justify-center items-center w-40 h-20 bg-center bg-cover rounded-xl flex-shrink-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="text-white text-lg font-bold">{title}</h3>
    </div>
  );
};

const RightNav = () => {
  return (
    <div className="bg-middleblue text-white h-screen md:block py-6 px-8">
      <div className="flex flex-row justify-between items-center">
        <button className=" inline-flex py-3 px-4 items-center bg-darkgray rounded-2xl justify-center">
          <FiBell />
        </button>

        <img
          className="w-12 h-12 flex-shrink-0"
          src={"./images/Profile.png"}
          alt="Profile"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Started Movies</h2>
        {/* Add logic to list started movies here */}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Top Rated</h2>
        {/* Add logic to list top rated movies here */}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold mb-4">Genres</h2>
        {/* Add logic to list genres here */}
        <div className="flex flex-row justify-start w-56 overflow-x-auto mb-6 gap-4 custom-scrollbar">
          <GenreCard image="./images/Drama.png" title="Drama" />
          <GenreCard image="./images/Drama.png" title="Action" />
          <GenreCard image="./images/Drama.png" title="Comedy" />
        </div>
        <div className="flex flex-row justify-start w-56 overflow-x-auto gap-4 custom-scrollbar">
          <GenreCard image="./images/Drama.png" title="Horror" />
          <GenreCard image="./images/Drama.png" title="Romance" />
          <GenreCard image="./images/Drama.png" title="Sci-Fi" />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
