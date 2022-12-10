import React from "react";
import { AboutBanner, AboutVector } from "../Data/assets";
import Footer from "../Navigation/footer";
const About = () => {
  return (
    <>
      <section className=" h-48 bg-blue-500 flex flex-col justify-center px-20">
        <h1 className="text-3xl font-bold text-white">About us</h1>
        <p className=" text-blue-200 italic">Who we are & our mission</p>
      </section>
      <section className="flex lg:flex-row flex-col lg:py-0 py-10">
        <div className="flex-1 flex items-center justify-center">
          <img src={AboutBanner} />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-1 lg:px-0 px-5">Our Story</h1>
          <p className="leading-loose mb-2 lg:px-0 px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br></br>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud <br></br>
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="leading-loose lg:px-0 px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br></br>
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud <br></br>
            exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>
      </section>
      <section className="py-10">
        <h1 className="text-center text-3xl font-bold lg:px-0 px-5">
          Our Mission & Work Process
        </h1>
        <p className="text-center">Professional & Dedicated Team</p>
        <div className="flex lg:flex-row flex-col px-5 lg:px-48 mt-20">
          <div className="flex-1">
            <div className="flex py-5 px-5 shadow-lg rounded mb-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#00aaff"
                  className=" w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-1">
                  Fully Secure & 24x7 Dedicated support
                </h1>
                <p className="font-light">
                  If you are an individual client, or just a business startup
                  looking for good backlinks for your website.
                </p>
              </div>
            </div>
            <div className="flex py-5 px-5 shadow-lg rounded mb-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#00aaff"
                  className="w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-1">
                  Manage all your assets carefully
                </h1>
                <p className="font-light">
                  If you are a landlord with a minimum of 1 apartment or more
                  you can still make all carefully with us
                </p>
              </div>
            </div>
            <div className="flex py-5 px-5 shadow-lg rounded">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#00aaff"
                  className=" w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-1">
                  We are very professional and hardworking
                </h1>
                <p className="font-light">
                  We give you a dedicated teams to help resolve all your concerns
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={AboutVector} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
