import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  setShowLogin
}) => {
  return (
    <>
      {/* Top Navigation */}
      <section className="w-screen bg-neutral-50 flex justify-around h-20  px-20 items-center">
        <Link to="/"  className="text-6xl font-extrabold text-blue-800 mr-3">
          <span className="text-blue-300">Ex-</span>LandLord
        </Link>
        <div className="flex flex-1 justify-end mr-4">
          <ul className="flex justify-around text-md w-64 text-blue-700">
            <li className="mr-1">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-1">
              <Link to="/aboutus">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex mr-2">
          <Link
            to="/signup"
            className="text-green-400  font-semibold  px-8 text-lg  mr-2 py-1 flex items-center "
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

            <span>Register</span>
          </Link>
          <button
            onClick={() => setShowLogin(true)}
            className="text-white cursor-pointer font-semibold bg-red-600 px-4 text-lg shadow-md mr-2 py-3 rounded flex items-center"
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>Login</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
