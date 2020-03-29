import React from "react";

import logo from "./logo192.png";

import HomeIcon from "./icons/HomeIcon";
import FileIcon from "./icons/FileIcon";
import RecentFileIcon from "./icons/RecentFileIcon";
import SharedFileIcon from "./icons/SharedFileIcon";
import TrashIcon from "./icons/TrashIcon";
import FileRequestIcon from "./icons/FileRequestIcon";
import UploadIcon from "./icons/UploadIcon";
import PlusIcon from "./icons/PlusIcon";
import HorizontalDotsIcon from "./icons/HorizontalDotsIcon";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100 py-4 pl-8 flex flex-col">
      <div className="flex items-center mt-2">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <span className="ml-1 font-semibold text-xl text-white">Cloud IO</span>
      </div>
      <nav className="mt-8 pb-8">
        <ul className="list-none">
          {navItems.map(navItem => (
            <li
              className={`flex items-center ${
                navItem.isActive
                  ? "text-gray-100 border-r-8 border-gray-100 rounded-md rounded-r-none"
                  : "text-gray-600 border-none"
              } mb-4`}
              key={navItem.text}
            >
              {navItem.icon}
              <span className="ml-4">{navItem.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-divider"></div>

      <div className="mt-auto relative">
        <ul className="w-40 my-4 p-3 bg-gray-700 rounded-lg ">
          {actions.map(action => (
            <li
              className="flex items-center mb-1 last:mb-0 ml-2"
              key={action.text}
            >
              {action.icon}
              <span className="ml-2 text-sm text-gray-500">{action.text}</span>
            </li>
          ))}
        </ul>
        <button className="bg-orange-500 text-center text-left text-sm text-gray-200 w-40 py-1 px-2 rounded-md relative">
          Create New
          <PlusIcon className="w-6 h-6 absolute right-0 top-0 bottom-0 m-auto p-1 mr-1 bg-orange-400 rounded" />
        </button>
      </div>
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

const actions = [
  {
    icon: <UploadIcon className="w-4 h-4 text-gray-100" />,
    text: "Upload Files"
  },
  {
    icon: <PlusIcon className="w-4 h-4 text-gray-100" />,
    text: "Upload Folder"
  },
  {
    icon: <FileIcon className="w-4 h-4 text-gray-100" />,
    text: "New Folder"
  },
  {
    icon: <HorizontalDotsIcon className="w-4 h-4 text-gray-100" />,
    text: "More"
  }
];
