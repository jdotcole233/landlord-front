import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="w-screen bg-blue-900 h-80 flex">
        <div className="mr-4">
          <div className="text-6xl font-extrabold text-white mb-3">
            <span className="text-blue-300">ex-</span>LandLord
          </div>
          <div className="flex flex-col  text-gray-300">
            <span className="mb-2">P.O.Box AQ 249, Abokobi-Accra</span>
            <span className="mb-2">+233 (503) 848 404</span>
            <span className="mb-2">jdotcole233@gmail.com</span>
          </div>
        </div>

        <div>
          <div className="text-xl font-bold text-white mb-3">
            <span >Navigation</span>
            <ul className="text-lg font-light flex flex-col mt-10">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
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

        <div>
          <div className="text-xl font-bold text-white mb-3">
            <span>My Account</span>
            <ul className="text-lg font-light flex flex-col mt-10">
                <li>
                    <Link to="/home">My profile</Link>
                </li>
                <li>
                    <Link to="/about">My account</Link>
                </li>
                <li>
                    <Link to="/contact">My properties</Link>
                </li>
                <li>
                    <Link to="/faqs">Favorites</Link>
                </li>
            </ul>
          </div>
        </div> 


        <div>
          <div className="text-xl font-bold text-white mb-3">
            <span>Download Apps</span>
            <div>
                <div className="border border-gray-500 px-10 flex">
                    <span>icon</span>
                    <div>
                        <h1 className="font-semibold">Google Play</h1>
                        <p>Get it Now</p>
                    </div>
                </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Footer;
