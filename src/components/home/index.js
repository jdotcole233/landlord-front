import React from "react";
import { stats } from "../Data/util";
import { BackgroundBanner } from "../Data/assets";
import { Link } from "react-router-dom"
import Footer from "../navigation/footer";

const Home = () => {
  return (
    <div className="w-screen h-screen flex-col justify-start">
      <section
        style={{
          backgroundImage: `url(${BackgroundBanner})`,
          objectFit: "contain",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="h-5/6 flex justify-start items-center px-40"
      >
        <RegisterForm />
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
        <div  className="flex justify-center mt-10">
          <div className="border mr-20 w-80 flex-col justify-center items-center py-5">
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-24 h-24"
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

          <div className="border mr-20 w-80 flex-col justify-center items-center py-5">
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
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

          <div className="border  w-80 flex-col justify-center items-center py-5">
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
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
      <section className="border px-20 h-36 bg-blue-500 flex">
        <div className="flex-1 flex-col items-baseline border">
          <div className="text-white border font-semibold text-2xl">Want to know more about Landlord?</div>
          <div className="text-white border ">Reach out to us.</div>
        </div>
        <div className=" flex-1 flex justify-center items-center">
          <Link className="bg-white px-8 py-3 border-4 border-blue-600 rounded-full text-lg" to="/aboutus">Read more</Link>
        </div>
      </section>
      {/* <section className="flex-col bg-blue-200 ">
        <div className="mt-10 px-10">
          <h1 className="text-7xl font-semibold  drop-shadow-lg">
            Mange your assets
          </h1>
          <h1 className="text-7xl font-semibold drop-shadow-lg">Easily</h1>
        </div>
        <div className="flex  mt-10 px-10">
          {stats.map((stat, key) => (
            <HomeStates key={key} number={stat.number} content={stat.content} color={stat.color} />
          ))}
        </div>
      </section>
      <section className="bg-red-500 h-80">
      </section> */}
      <Footer />
    </div>
  );
};

const HomeStates = ({ number, content, color }) => {
  return (
    <div
      className={`bg-blue-${color} mr-3 opacity-75 rounded-md flex flex-col  px-5 py-2 shadow-xl`}
    >
      <div className="text-5xl font-semibold p-0 text-white flex items-center justify-center">
        +{number}
      </div>
      <div className="text-white  p-0 font-extralight h-full text-2xl flex justify-center items-center">
        {content}
      </div>
    </div>
  );
};

const Stages = () => {
  return (
    <div>
      images
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
};

const RegisterForm = () => {
  return (
    <div className=" w-4/12 h-3/6 bg-white rounded-md px-10 py-10">
      <h1 className="font-bold text-gray-600 text-4xl text-left">
        Setup your Home
      </h1>
      <h1 className="font-bold text-gray-600 text-4xl text-left mb-2 ">
        to manage
      </h1>

      <div className=" flex-col">
        <label className="block text-gray-400">First Name</label>
        <input
          className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
          type="text"
          placeholder="Enter first name"
        />
      </div>
      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Other Name (optional)</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
            type="text"
            placeholder="Enter other name"
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Last Name</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
            type="text"
            placeholder="Enter last name"
          />
        </div>
      </div>

      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Email</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
            type="email"
            placeholder="Enter email address"
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Phone number</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
            type="tel"
            placeholder="Enter phone numer"
          />
        </div>
      </div>

      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Password</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Confirm password</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-gray-50"
            type="text"
            placeholder="Confirm password"
          />
        </div>
      </div>
      <div className="w-full">
        <button className="bg-blue-500 text-white w-full h-10 rounded mt-5 text-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
