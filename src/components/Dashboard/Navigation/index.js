import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

const DashboardNavigation = () => {
  const location = useLocation();
  return (
    <div className="hidden lg:block w-3/12 lh-3/6 py-2 bg-white shadow-md rounded-md">
      {/* Profile Avatar */}
      <div className=" h-72 flex flex-col items-center justify-center">
        <div className=" h-40 w-40 rounded-full flex items-center justify-center bg-profilePicture bg-contain  "></div>
        <div>
          <h1 className="text-2xl font-semibold text-center mt-1">
            Cole Baidoo
          </h1>
          <p className="text-sm text-center mt-1 font-extralight">0503848404</p>
        </div>
      </div>
      {/* Navigation */}
      <NavigationLinks />
    </div>
  );
};

export default DashboardNavigation;
