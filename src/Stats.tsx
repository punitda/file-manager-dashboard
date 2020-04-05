import React from "react";
import BellIcon from "./icons/BellIcon";
import SettingsIcon from "./icons/SettingsIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import DocumentIcon from "./icons/DocumentIcon";
import CameraIcon from "./icons/CameraIcon";
import ImageIcon from "./icons/ImageIcon";
import MenuAltIcon from "./icons/MenuAltIcon";
import RocketSvg from "./icons/RocketSvg";

export default function Stats() {
  return (
    <div className="bg-gray-100">
      <Profile />
      <hr className="text-gray-600 w-full mt-6" />
      <Storage />
      <BuyMoreSpace />
    </div>
  );
}

function Profile() {
  return (
    <div className="mt-8 flex items-center justify-between p-8">
      <div className="inline-flex">
        <div className="relative w-8 h-8">
          <BellIcon className="text-gray-500" />
          <span className="w-2 h-2 rounded-full bg-orange-500 absolute right-0 top-0 mr-1 mt-1" />
        </div>
        <SettingsIcon className="w-8 h-8 text-gray-500" />
      </div>
      <div>
        <span className="text-gray-800 font-semibold">
          Imran
          <ChevronDownIcon className="inline w-4 h-4" />
        </span>
        <img
          className="inline ml-1 h-8 w-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1584202532967-6390de14ecac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.75&w=144&h=144&q=80"
          alt="profile"
        />
      </div>
    </div>
  );
}

function Storage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl text-gray-800">Storage</h2>

      <div className="flex justify-center mt-12">
        <div className="flex flex-col items-center justify-center bg-white w-40 h-40 rounded-full shadow-sm border-t-2 border-r-2 border-green-600">
          <h3 className="text-4xl font-semibold text-gray-800">85%</h3>
          <span className="text-gray-500">Used</span>
        </div>
      </div>

      <p className="text-gray-400 font-medium mt-6 text-center">
        420.2 GB of 500 GB used
      </p>

      <div className="mt-8 grid grid-cols-folder row-gap-3 col-gap-1">
        {foldersInfo.map((folder) => (
          <>
            <span className={`${folder.color} rounded-lg w-10 h-10 p-3`}>
              {folder.symbol}
            </span>
            <div>
              <h3 className="text-base text-gray-700 font-semibold">
                {folder.name}
              </h3>
              <span className="text-gray-500 text-xs">
                {`${folder.filesCount} files`}
              </span>
            </div>
            <span className="bg-white rounded-md shadow-sm text-center text-gray-900 font-medium w-20 h-8 p-2 text-gray-500 text-sm">
              {folder.space}
            </span>
          </>
        ))}
      </div>
    </div>
  );
}

function BuyMoreSpace() {
  return (
    <div className="flex flex-col items-center py-8 px-4 m-8 bg-white rounded-lg shadow-sm">
      <RocketSvg className="w-20 h-20" />
      <h2 className="text-xl text-gray-700 mt-1 tracking-wide">
        Buy more space now!
      </h2>
      <p className="text-sm text-gray-500 mt-1">Upgrade to cloud premium</p>
      <button className="w-40 mt-8 p-2 bg-orange-500 text-sm text-gray-100 rounded-md">
        Upgrade Account
      </button>
    </div>
  );
}

const foldersInfo = [
  {
    name: "Documents",
    filesCount: 720,
    space: "200 GB",
    color: "bg-orange-500",
    symbol: <DocumentIcon className="w-4 h-4 text-white" />,
  },
  {
    name: "Videos",
    filesCount: 124,
    space: "125 GB",
    color: "bg-blue-500",
    symbol: <CameraIcon className="w-4 h-4 text-white" />,
  },
  {
    name: "Images",
    filesCount: 1200,
    space: "75 GB",
    color: "bg-green-500",
    symbol: <ImageIcon className="w-4 h-4 text-white" />,
  },
  {
    name: "Others",
    filesCount: 30,
    space: "50 GB",
    color: "bg-gray-500",
    symbol: <MenuAltIcon className="w-4 h-4 text-white" />,
  },
];
