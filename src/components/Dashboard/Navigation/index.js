import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardNavigation = () => {
  const location = useLocation();
  return (
    <div className=" w-3/12 lh-3/6 py-2 bg-white shadow-md rounded-md">
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
      <ul>
        <li>
          <Link
            className={`${
              location.pathname === "/dashboard"
                ? "bg-blue-300 text-blue-700"
                : ""
            } flex border-b hover:bg-blue-500 hover:text-blue-800 border-b-gray-200 py-2 px-5`}
            to="/dashboard"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold active:active:text-[#00aaff]">
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`${
              location.pathname === "/profile"
                ? "bg-blue-300 text-blue-700"
                : ""
            } flex border-b hover:bg-blue-500 hover:text-blue-800 border-b-gray-200 py-2 px-5`}
            to="/profile"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold active:text-[#00aaff]">
              My Profile
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`${
              ["/properties", "/rooms", "/room", "/addApartment", "/addRoom"].includes(location.pathname)
                ? "bg-blue-300 text-blue-700"
                : ""
            } flex border-b hover:bg-blue-500 hover:text-blue-800 border-b-gray-200 py-2 px-5`}
            to="/properties"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold active:text-[#00aaff]">
              My Properties
            </span>
          </Link>
        </li>

        <li>
          <Link
            className={`${
              ["/tenants", "/addTenant"].includes(location.pathname)
                ? "bg-blue-300 text-blue-700"
                : ""
            } flex border-b hover:bg-blue-500 hover:text-blue-800 border-b-gray-200 py-2 px-5`}
            to="/tenants"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold active:text-[#00aaff]">
              My Tenants
            </span>
          </Link>
        </li>
        <li>
          <Link
            className={`${
              location.pathname === "/password"
                ? "bg-blue-300 text-blue-700"
                : ""
            } flex border-b hover:bg-blue-500 hover:text-blue-800 border-b-gray-200 py-2 px-5`}
            to="/password"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold active:text-[#00aaff]">
              Change Password
            </span>
          </Link>
        </li>
        <li className="flex py-2 px-5 cursor-pointer hover:text-red-500">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
          </span>
          <span className="ml-2 font-semibold active:text-[#00aaff]">
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DashboardNavigation;
