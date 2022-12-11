import React from "react";
import Footer from "../../Navigation/footer";
import DashboardNavigation from "../Navigation";
import MobileDashbaordNavigation from "../Navigation/MobileDashboardNavigation";

const ChangePassword = () => {
  return (
    <>
    <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 py-5 px-2 flex  lg:flex-row flex-col justify-start items-start">
      <DashboardNavigation />
      <MobileDashbaordNavigation />

      <section className="lg:ml-10 w-full bg-white lg:px-10 lg:py-10 px-2 py-5">
        <h1 className="text-3xl font-bold mb-2">Change Your Password</h1>
        <div>
          <div className=" flex-col">
            <label className="block text-gray-600 font-semibold">Old Password</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="password"
              placeholder=""
            />
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-600 font-semibold">New Password</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="password"
                placeholder="*******"
              />
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-600 font-semibold">Confirm password</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder="*******"
              />
            </div>
          </div>
          <div>
            <button className="bg-blue-400 border-2 hover:bg-blue-700 hover:shadow-2xl border-blue-500 text-white lg:px-10 lg:py-3 px-2 rounded mt-5 text-lg">
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ChangePassword;
