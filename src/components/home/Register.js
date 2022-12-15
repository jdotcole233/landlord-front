import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { communication, makeRequestWithData } from "../../Hooks/request";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { LOADING } from "../Data/assets";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterLandLord = (data) => {
    setIsLoading(true);
    makeRequestWithData({
      url: "landlord/create-landlord",
      data,
      reset,
      setIsLoading,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterLandLord)}>
      <div className=" flex-col">
        <label className="block text-gray-400">First Name</label>
        <input
          className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
          type="text"
          placeholder=""
          defaultValue=""
          {...register("first_name", {
            required: "First name is required",
          })}
        />
        {errors.first_name && (
          <span className="text-sm text-red-500 ">
            {errors.first_name?.message}
          </span>
        )}
      </div>
      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">
            Other Name
            {/* <span className="lg:block hidden">(optional)</span> */}
          </label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder=""
            defaultValue=""
            {...register("other_name")}
          />
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Last Name</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder=""
            defaultValue=""
            {...register("last_name", {
              required: "Last name is required",
            })}
          />
          {errors.last_name && (
            <span className="text-sm text-red-500 ">
              {errors.last_name?.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Email</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="email"
            placeholder=""
            defaultValue=""
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500 ">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Phone number</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder=""
            defaultValue=""
            {...register("phone_number", {
              required: "Phone number is required",
              min: {
                value: 10,
                message: "Phone number must meet country standard",
              },
            })}
          />
          {errors.phone_number && (
            <span className="text-sm text-red-500 ">
              {errors.phone_number?.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex mt-4">
        <div className=" flex-col mr-6 flex-1">
          <label className="block text-gray-400">Password</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="password"
            placeholder="*******"
            {...register("password", {
              required: "Password is required",
              min: {
                value: 8,
                message: "Password must be atleast 8 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500 ">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className=" flex-col flex-1">
          <label className="block text-gray-400">Confirm password</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="password"
            placeholder="*******"
            {...register("confirm_password", {
              required: "Confirm password",
              min: {
                value: 8,
                message: "Password must be atleast 8 characters",
              },
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Password do not match";
                }
              },
            })}
          />
          {errors.confirm_password && (
            <span className="text-sm text-red-500 ">
              {errors.confirm_password?.message}
            </span>
          )}
        </div>
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="bg-blue-500 text-white w-full h-10 rounded mt-5 text-lg flex justify-center items-center hover:bg-blue-700 hover:shadow-2xl"
        >
          <span className="mr-2">Register</span>
          {isLoading && <img src={LOADING} className="w-8 h-8" />}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
