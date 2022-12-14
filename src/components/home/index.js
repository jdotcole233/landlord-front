import React from "react";
import { stats } from "../Data/util";
import Footer from "../Navigation/footer";
import CountUp from "react-countup";
import RegisterForm from "./Register";

const Home = () => {
  return (
    <div className="w-screen h-screen flex-col justify-start">
      <section
        className={`lg:h-5/6 bg-landingBanner bg-cover flex justify-start items-center lg:py-0 py-5 px-5 lg:px-40`}
      >
        <Register />
      </section>

      <section className="flex flex-col items-center justify-center h-96 py-5 bg-[#F5FAFF] ">
        <h1 className="text-4xl text-center font-bold mb-2">Achievement</h1>
        <h1 className="text-center lg:px-0 px-5 text-gray-500 mb-1">
          We are helping to change the ways landlords handle their properties
        </h1>
        <h1 className="text-center text-gray-500">
          The numbers speaks for itself.
        </h1>
        <div className="lg:flex grid  grid-cols-2 gap-2  mt-10 lg:px-10">
          {stats.map((stat, key) => (
            <HomeStates
              key={key}
              number={stat.number}
              content={stat.content}
              color={stat.color}
            />
          ))}
        </div>
      </section>

      <section className="py-10">
        <h1 className="text-4xl text-center font-bold mb-2">How it Works?</h1>
        <h1 className="text-center text-gray-500 mb-1">
          You have done the hardwork of building valuable properties around the
          country
        </h1>
        <h1 className="text-center text-gray-500">
          Let us help you keep track of it
        </h1>
        <div className="flex  flex-col lg:flex-row items-center lg:justify-center mt-10">
          <div className="lg:mr-20 w-80 flex flex-col justify-center items-center py-5">
            <div className=" flex justify-center  w-48 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#009933"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
                />
              </svg>
            </div>
            <h1 className="text-center font-semibold text-lg">Get Onboard</h1>
            <p className="text-center text-sm">Start by clicking on register</p>
            <p className="text-center text-sm">Provide base details</p>
          </div>

          <div className=" lg:mr-20 w-80 flex-col justify-center items-center py-5">
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FFA697"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <h1 className="text-center font-semibold text-lg">
              Add Apartments
            </h1>
            <p className="text-center text-sm">
              Add all locations of your appartments
            </p>
            <p className="text-center text-sm">With simple clicks</p>
          </div>

          <div className="  w-80 flex-col justify-center items-center py-5">
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#A0E1FF"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <h1 className="text-center font-semibold text-lg">
              Track you assets
            </h1>
            <p className="text-center text-sm">Follow the audit of tenants</p>
            <p className="text-center text-sm">In realtime</p>
          </div>
        </div>
      </section>

      <section className="w-full lg:px-20 lg:py-10 px-2 py-5 bg-[#FFF6F5] flex flex-col">
        <div className="flex-1 flex justify-center items-center lg:py-10 py-5">
          <div>
            <h1 className="lg:text-4xl  text-xl font-extrabold text-center">See Our Annual Packages</h1>
            <p className="text-center lg:text-sm text-xs">
              Manage your entire apartments with as little  
            </p>
          </div>
          {/* <div className="h-full  bg-[url('https://cdn.pixabay.com/photo/2012/04/26/18/47/sofa-42817_960_720.png')] bg-contain bg-center bg-no-repeat  w-full"></div> */}
        </div>
        <div className="flex-1 flex lg:flex-row flex-col justify-center items-center">
          <div className="border w-96 bg-white rounded-md shadow-md px-3 py-3 lg:mr-5 lg:mb-0 mb-5">
            <div className="w-full bg-[#E5F6FE] h-40  rounded flex flex-col justify-center items-center">
              <div className="flex">
                <div className="mr-1">
                  <span className="font-extrabold text-3xl text-[#03A9F4]">
                    $
                  </span>
                </div>
                <span className="text-7xl font-extrabold text-[#03A9F4]">
                  50
                </span>
              </div>
              <h1 className="text-2xl font-extrabold text-center">
                Basic Package
              </h1>
            </div>

            <div>
              <ul>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">5+ Rooms</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">
                    24x7 Fully Supported
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">50 Storage</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">3 Months Validity</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#E9EBF3"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#fff"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>

            <div className="px-5 py-5">
              <button className="text-lg font-bold w-full py-4 rounded border-2 border-zinc-300 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-600">
                Choose Plan
              </button>
            </div>
          </div>

          <div className="border w-96 bg-white rounded-md shadow-md px-3 py-3">
            <div className="w-full bg-[#FFEDEA] h-40  rounded flex flex-col justify-center items-center">
              <div className="flex">
                <div className="mr-1">
                  <span className="font-extrabold text-3xl text-[#FD5332]">
                    $
                  </span>
                </div>
                <span className="text-7xl  font-extrabold text-[#FD5332]">
                  <span>45</span>
                </span>
              </div>
              <h1 className="text-2xl font-extrabold text-center">
                Platinum Package
              </h1>
            </div>

            <div>
              <ul>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">20+ Rooms</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">
                    24x7 Fully Supported
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">Unlimited Storage</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
                <li className="flex justify-between py-3 border-b border-dashed border-[1.5]">
                  <span className="text-lg font-thin">3 Months Validity</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#CCF6F4"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#27CC8F"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>

            <div className="px-5 py-5">
              <button className="text-lg font-bold w-full py-4 rounded border-2 border-zinc-300 hover:bg-blue-400 hover:border-blue-400 hover:text-blue-600">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const HomeStates = ({ number, content, color }) => {
  return (
    <div
      className={`-bg-blue-${color} lg:mr-3 opacity-75 lg:w-64 rounded-md flex flex-col px-5 py-2 `}
    >
      <div className="text-3xl font-bold p-0 text-gray-800 flex items-center justify-center">
        <CountUp end={number} />+
      </div>
      <div className="text-gray-800  p-0 font-light h-full text-lg flex justify-center items-center">
        {content}
      </div>
    </div>
  );
};

const Register = () => {
  return (
    <div className=" lg:w-4/12  bg-white rounded-md px-10 py-10">
      <h1 className="font-bold text-gray-600 text-4xl text-left">
        Setup your Home
      </h1>
      <h1 className="font-bold text-gray-600 text-4xl text-left mb-2 ">
        to manage
      </h1>
      <RegisterForm />
    </div>
  );
};

export default Home;
