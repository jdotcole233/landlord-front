import React from "react";

const RegisterForm = () => {
  return (
    <>
      <div className=" flex-col">
        <label className="block text-gray-400">First Name</label>
        <input
          className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
          type="text"
          placeholder=""
        />
      </div>
      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Other Name (optional)</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder=""
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Last Name</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder=""
          />
        </div>
      </div>

      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Email</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="email"
            placeholder=""
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Phone number</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="tel"
            placeholder=""
          />
        </div>
      </div>

      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Password</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="password"
            placeholder="*******"
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Confirm password</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder="*******"
          />
        </div>
      </div>
      <div className="w-full">
        <button className="bg-blue-500 text-white w-full h-10 rounded mt-5 text-lg">
          Register
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
