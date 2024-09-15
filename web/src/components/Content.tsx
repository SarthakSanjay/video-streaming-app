import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Videos from "./videos/Videos";

const Content = () => {
  return (
    <div className="border-0 border-white h-full w-full flex">
      <Sidebar />
      <Videos />
    </div>
  );
};

export default Content;
