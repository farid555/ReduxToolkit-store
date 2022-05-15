import React from "react";
import { Link } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";

const index = () => {
  return (
    <nav className="z-50 bg-green-400 w-full fixed top-0 left-0  flex justify-between items-center flex-row py-8 px-10">
      <div className="w-1/2">
        <Link to="/">
          <h1 className="text-xl font-bold">Redux-Toolkit</h1>
        </Link>
      </div>
      <ProfileIcon />
    </nav>
  );
};

export default index;
