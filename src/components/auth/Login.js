import React from "react";

const Login = ({ setShowLogin }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      className="w-full h-screen  absolute top-0 bottom-0 flex justify-center items-center"
    >
      <div className=" w-3/12   bg-white rounded-md px-10 pb-6 pt-4">
        <div className="flex justify-end ">
          <span onClick={() => setShowLogin(false)} className="cursor-pointer">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <h1 className="font-extrabold text-gray-600 text-4xl text-center mb-5">
          Log In
        </h1>
        <div className=" flex-col mb-3">
          <label className="block text-gray-700 text-sm">Email</label>
          <div className="flex justify-center items-center bg-gray-50 px-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a6a6a6"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <input
              className="w-full outline-none border-0 px-2 rounded h-14 bg-gray-50"
              type="email"
              placeholder="Enter email name"
            />
          </div>
        </div>

        <div className=" flex-col mb-3">
          <label className="block text-gray-700 text-sm">Password</label>
          <div className="flex justify-center items-center bg-gray-50 px-2 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a6a6a6"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <input
              className="w-full outline-none border-0 px-2 rounded h-14 bg-gray-50"
              type="text"
              placeholder="********"
            />
          </div>
        </div>
        <div className="w-full">
          <button className="bg-green-50 text-green-500 border border-green-500 w-full h-10 rounded mt-5 text-lg">
            Login
          </button>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-red-500 cursor-pointer">
            Forgot password?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
