import React from "react";

import SideBar from "./SideBar";
import MainContent from "./MainContent";
import Stats from "./Stats";

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-main col-gap-2 h-screen">
      <SideBar />
      <MainContent />
      <Stats />
    </div>
  );
};

export default App;
