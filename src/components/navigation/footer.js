import React from "react";
import { Link } from "react-router-dom";
import { Apple, Android } from "../Data/assets";

const Footer = () => {
  return (
    <>
      <section className="lg:px-20 lg:py-0 py-5 lg:h-36 bg-blue-500 flex lg:flex-row flex-col">
        <div className="flex-1 flex flex-col items-center lg:items-end justify-center">
          <div className="text-white  font-semibold text-2xl">
            Want to know more about Landlord?
          </div>
          <div className="text-white  ">Reach out to us.</div>
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <Link
            className="bg-white px-4 lg:px-8 py-1 lg:py-3 border-4 border-blue-600 rounded-full text-lg"
            to="/aboutus"
          >
            Read more
          </Link>
        </div>
      </section>
      <div className="w-screen bg-gray-700 py-2 lg:py-0 lg:h-80 flex lg:flex-row flex-col justify-center items-center">
        <div className="lg:mr-10 lg:mb-0 mb-10 lg:mt-0 mt-10">
          <Link to="/" className="text-6xl font-extrabold text-white mb-3">
            <span className="text-blue-300">Ex-</span>LandLord
          </Link>
          <div className="flex flex-col  text-gray-300">
            <span className="mb-2">P.O.Box AQ 249, Abokobi-Accra</span>
            <span className="mb-2">+233 (503) 848 404</span>
            <span className="mb-2">jdotcole233@gmail.com</span>
          </div>
        </div>

        <div className="lg:w-80 w-full lg:px-0 px-5 lg:mb-0 mb-10">
          <div className="text-xl font-bold text-white mb-3 flex flex-col lg:items-center">
            <span>Navigation</span>
            <ul className="text-lg font-light flex flex-col mt-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-80 w-full lg:px-0 px-5 lg:mb-0 mb-10">
          <div className="text-xl font-bold text-white mb-3 flex flex-col lg:items-center">
            <span>My Account</span>
            <ul className="text-lg font-light flex flex-col mt-5">
              <li>
                <Link to="/profile">My profile</Link>
              </li>
              <li>
                <Link to="/dashboard">My account</Link>
              </li>
              <li>
                <Link to="/properties">My properties</Link>
              </li>
              <li>
                <Link to="/faqs">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:w-80 w-full lg:px-0 px-5 lg:mb-0 mb-10">
          <div className="text-xl font-bold text-white mb-3 flex flex-col  lg:items-center">
            <span>Download Apps</span>
            <div>
              <div className="border border-gray-500 px-6 py-2 flex mb-4 mt-5">
                <span>
                  <img src={Android} className="w-11 h-11" />
                </span>
                <div className="ml-3">
                  <h1 className="font-semibold">Google Play</h1>
                  <p className="text-sm font-light text-gray-300">Get it Now</p>
                </div>
              </div>

              <div className="border border-gray-500 px-6 py-2 flex">
                <span>
                  <img src={Apple} className="w-11 h-11" />
                </span>
                <div className="ml-3">
                  <h1 className="font-semibold">Apple Store</h1>
                  <p className="text-sm font-light text-gray-300">Get it Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-slate-800 text-gray-200 text-center">
        &copy; 2022 Ex-landlord, All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
