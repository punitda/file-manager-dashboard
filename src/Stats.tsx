import React from "react";
import BellIcon from "./icons/BellIcon";
import SettingsIcon from "./icons/SettingsIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export default function Stats() {
  return (
    <div className="bg-gray-100">
      <Profile />
      <hr className="text-gray-600 w-full mt-6" />
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
