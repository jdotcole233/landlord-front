import React from "react";
import RegisterForm from "../../Home/Register";
import DashboardNavigation from "../Navigation";

const Profile = () => {
  return (
    <div className="bg-[#F5FAFF] h-screen px-10 py-20 flex justify-start items-start">
      <DashboardNavigation />
      <section className="border ml-10 w-full px-10 py-10 bg-white">
        <h1 className="text-3xl font-bold mb-2">My Account</h1>
        <div>
          <div className=" flex-col">
            <label className="block text-gray-600 font-semibold">Your First Name</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder=""
            />
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-600 font-semibold">
                Your Other Name (optional)
              </label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
              />
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-600 font-semibold">Your Last Name</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-600 font-semibold">Your Email</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="email"
                placeholder=""
              />
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-600 font-semibold">Your Phone number</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="tel"
                placeholder=""
              />
            </div>
          </div>
          <div className="">
            <button className=" bg-blue-400 border-2 border-blue-500 text-white  px-10 py-4 rounded mt-5 text-lg">
             Save Changes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
