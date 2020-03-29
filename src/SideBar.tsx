import React from "react";

import logo from "./logo192.png";

import HomeIcon from "./icons/HomeIcon";
import FileIcon from "./icons/FileIcon";
import RecentFileIcon from "./icons/RecentFileIcon";
import SharedFileIcon from "./icons/SharedFileIcon";
import TrashIcon from "./icons/TrashIcon";
import FileRequestIcon from "./icons/FileRequestIcon";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100">
      <div className="flex items-center mt-2 ml-8">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <span className="ml-1 font-semibold text-xl text-white">Cloud IO</span>
      </div>
      <nav className="mt-12">
        <ul className="list-none ml-8">
          {navItems.map(navItem => (
            <li
              className={`flex justify-start items-center ${
                navItem.isActive ? "text-gray-100" : "text-gray-600"
              } mb-2`}
              key={navItem.text}
            >
              {navItem.icon}
              <span className="ml-2">{navItem.text}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const navItems = [
  {
    isActive: true,
    icon: <HomeIcon className="w-4 h-4 text-gray-100" />,
    text: "Home"
  },
  {
    isActive: false,
    icon: <FileIcon className="w-4 h-4 text-gray-600" />,
    text: "My Files"
  },
  {
    isActive: false,
    icon: <RecentFileIcon className="w-4 h-4 text-gray-600" />,
    text: "Recent Files"
  },
  {
    isActive: false,
    icon: <SharedFileIcon className="w-4 h-4 text-gray-600" />,
    text: "Shared Files"
  },
  {
    isActive: false,
    icon: <FileRequestIcon className="w-4 h-4 text-gray-600" />,
    text: "File Request"
  },
  {
    isActive: false,
    icon: <TrashIcon className="w-4 h-4 text-gray-600" />,
    text: "Trash"
  }
];
