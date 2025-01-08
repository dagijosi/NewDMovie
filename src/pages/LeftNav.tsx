import React, { useState } from "react";
import {
  FiHome,
  FiCompass,
  FiAward,
  FiStar,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import {
  MdOutlineHistory,
  MdOutlinePlaylistPlay,
  MdOutlineDownloadDone,
  MdOutlineWatchLater,
  MdOutlineCheckCircle,
} from "react-icons/md";
import { Link } from 'react-router-dom';

interface NavItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const LeftNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections: NavSection[] = [
    {
      title: "Menu",
      items: [
        { icon: <FiHome />, label: "Home", path: "/" },
        { icon: <FiCompass />, label: "Discover", path: "/discover" },
        { icon: <FiAward />, label: "Awards", path: "/awards" },
        { icon: <FiUser />, label: "Celebrities", path: "/celebrities" },
      ],
    },
    {
      title: "Library",
      items: [
        { icon: <MdOutlineHistory />, label: "Recent", path: "/recent" },
        { icon: <FiStar />, label: "Top Rated", path: "/top-rated" },
        { icon: <MdOutlineDownloadDone />, label: "Downloaded", path: "/downloaded" },
        { icon: <MdOutlinePlaylistPlay />, label: "Playlists", path: "/playlists" },
        { icon: <MdOutlineWatchLater />, label: "Watchlist", path: "/watchlist" },
        { icon: <MdOutlineCheckCircle />, label: "Completed", path: "/completed" },
      ],
    },
    {
      title: "General",
      items: [
        { icon: <FiSettings />, label: "Settings", path: "/settings" },
        { icon: <FiLogOut />, label: "Log Out", path: "/logout" },
      ],
    },
  ];

  const handleItemClick = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="h-screen w-64 bg-middleblue text-white p-6 pl-10 md:block">
      <h1 className="text-2xl not-italic font-extrabold">DMOVIES</h1>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex-shrink-0 mt-8">
          <h1 className="text-base not-italic font-bold text-gray-300 mb-5">
            {section.title}
          </h1>
          {section.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              to={item.path}
              className={`flex flex-row items-center mb-5 text-left w-full text-xs font-semibold hover:text-lightgreen ${
                activeSection === sectionIndex * section.items.length + itemIndex ? "text-lightgreen" : ""
              }`}
              onClick={() => handleItemClick(sectionIndex * section.items.length + itemIndex)}
            >
              {React.cloneElement(item.icon, {
                className: "w-4 h-4 flex-shrink-0 mr-4",
              })}
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LeftNav;