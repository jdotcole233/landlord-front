import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({
    setShowMobileMenu,
    setShowLogin
}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      className="w-full h-screen absolute top-0 m-0 bg-transparent"
    >
      <div className=" bg-white w-2/3 h-full">
        {/* Close button */}
        <div 
        onClick={() => setShowMobileMenu(false)}
        className="flex justify-end  p-2">
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

        {/* Menu */}
        <ul className="mt-5">
          <li className="flex border-b border-t border-b-gray-200 text-lg font-light text-blue-700 justify-between px-5 py-3">
            <Link to="/">Home</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li className="flex border-b border-b-gray-200 text-lg font-light text-blue-700 justify-between px-5 py-3">
            <Link to="/aboutus">About</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li className="flex border-b border-b-gray-200 text-lg font-light text-blue-700 justify-between px-5 py-3">
            <Link to="/contact">Contact</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li className="flex border-b border-b-gray-200 text-lg font-light text-blue-700 justify-between px-5 py-3">
            <Link to="/">Register</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </li>
          <li>
          <div className="flex  justify-end p-5">
          <Link
            to="/signup"
            className="text-green-400  font-light  px-8 text-lg  mr-2 py-1 flex items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>

            <span>Manage </span>
          </Link>
          <button
          onClick={() => {
            setShowLogin(true)
            setShowMobileMenu(false)
          }}
            className="text-white cursor-pointer font-semibold bg-red-600 px-4 text-lg shadow-md mr-2 :py-3 rounded flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-6 lg:h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
