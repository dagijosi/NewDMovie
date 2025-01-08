import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import SlideShow from "../components/SlideShow";
import Popular from "../components/Popular";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    className="cursor-pointer"
    whileTap={{ scale: 0.95 }}
  >
    <h1
      className={`w-20 md:text-lg not-italic text-center font-semibold ${
        isActive ? "text-white" : "text-gray-400"
      }`}
    >
      {label}
    </h1>
    {isActive && (
      <motion.div className="w-20 h-0.5 bg-teal-500" layoutId="underline" />
    )}
  </motion.div>
);

const Home = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [showLeftNav, setShowLeftNav] = useState(false);
  const [showRightNav, setShowRightNav] = useState(false);
  const tabs = ["Home", "Movies", "TV Shows", "Anime"];

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".left-nav") && !target.closest(".left-nav-toggle")) {
      setShowLeftNav(false);
    }
    if (!target.closest(".right-nav") && !target.closest(".right-nav-toggle")) {
      setShowRightNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-darkblue grow text-white flex-1 p-4 md:pl-10 h-screen overflow-y-auto relative custom-scrollbar">
      {/* Toggle Buttons */}
      <div className="flex justify-between md:hidden">
        <button className="left-nav-toggle" onClick={() => setShowLeftNav(!showLeftNav)}>
          <FaBars />
        </button>
        <button className="right-nav-toggle" onClick={() => setShowRightNav(!showRightNav)}>
          <FaBars />
        </button>
      </div>
      {/* LeftNav */}
      {showLeftNav && (
        <div className="absolute top-0 left-0 w-64 h-screen bg-middleblue z-50 md:hidden left-nav">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setShowLeftNav(false)}
          >
            <FaTimes />
          </button>
          <LeftNav />
        </div>
      )}
      {/* RightNav */}
      {showRightNav && (
        <div className="absolute top-0 right-0 w-64 h-screen bg-middleblue z-50 md:hidden right-nav">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setShowRightNav(false)}
          >
            <FaTimes />
          </button>
          <RightNav />
        </div>
      )}
      {/* Tabs */}
      <div className="flex flex-col md:flex-row mt-12 items-center">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-12">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
        {/* Search Bar */}
        <div className="flex flex-row mt-4 md:mt-0 ml-auto md:mr-14 items-center bg-middleblue rounded-md px-4 h-12 focus-within:ring-2 focus-within:ring-teal-500 w-full md:w-auto">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            className="bg-transparent flex-grow text-white p-2 placeholder-gray-500 focus:outline-none"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
      {/* SlideShow */}
      <SlideShow />
      {/* Popular */}
      <Popular />
    </div>
  );
};

export default Home;
