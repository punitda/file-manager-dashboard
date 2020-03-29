import React from "react";

import logo from "./logo192.png";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100">
      <div className="flex items-center m-2">
        <img src={logo} className="w-8 h-8" alt="logo" />
        <span className="ml-1">Cloud IO</span>
      </div>
    </div>
  );
}
