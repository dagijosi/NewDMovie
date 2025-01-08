import { FiBell } from "react-icons/fi";

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
      </div>
    </div>
  );
};

export default RightNav;
