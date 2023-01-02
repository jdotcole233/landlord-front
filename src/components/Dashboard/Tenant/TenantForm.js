import { useState } from "react"
import DashboardNavigation from "../Navigation";
import { useNavigate, useLocation } from "react-router-dom";
import MobileDashbaordNavigation from "../Navigation/MobileDashboardNavigation";
import Footer from "../../Navigation/footer";
import { useForm } from "react-hook-form";
import { currencies } from "currencies.json";
import { countries } from "countries-list";
import { makeRequestWithData } from "../../../Hooks/request";

const TenantForm = () => {
  const history = useNavigate();
  const {
    state: { rooms },
  } = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false)

  const submitTenantInformation = (data) => {
    console.table(data);
    setIsLoading(true);
    makeRequestWithData({
      url:  "tenants/create-tenant",
      data,
      reset,
      setIsLoading,
    });
  };

  return (
    <>
      <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
        <DashboardNavigation />
        <MobileDashbaordNavigation />
        {/* Forms */}
        <form
          onSubmit={handleSubmit(submitTenantInformation)}
          className="lg:px-10 lg:py-10 py-5 px-2 bg-white rounded w-full lg:ml-10"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl mb-4">Tenant Information</h1>
            <svg
              onClick={() => history(-1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f00"
              className="w-7 h-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className=" flex-col">
            <label className="block text-gray-400">Select Room</label>
            <select
              {...register("room_id", {
                required: "Select room to place tenant",
              })}
              className="w-full text-slate-400 outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            >
              <option value="">Select Room</option>
              {rooms?.map((room, key) => (
                <option key={key} value={room.id}>
                  {room.room_name} {room.room_number}
                </option>
              ))}
            </select>
            {errors.room_id && (
              <span className="text-sm text-red-500 ">
                {errors.room_id?.message}
              </span>
            )}
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">First Name</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
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
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Other Name</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
                {...register("other_name")}
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Last Name</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
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
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Email</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="email"
                placeholder=""
                {...register("email")}
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Phone Number</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="tel"
                placeholder=""
                {...register("phone_number", {
                  required: "Phone number is required",
                })}
              />
              {errors.phone_number && (
                <span className="text-sm text-red-500 ">
                  {errors.phone_number?.message}
                </span>
              )}
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Number Of Occupants</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
                {...register("number_of_occupants", {
                  required: "Enter number of expected occupants",
                })}
              />
              {errors.number_of_occupants && (
                <span className="text-sm text-red-500 ">
                  {errors.number_of_occupants?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Duration</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="number"
                placeholder="specify by months"
                {...register("duration", {
                  required: "Enter the number of months for occupant",
                })}
              />
              {errors.duration && (
                <span className="text-sm text-red-500 ">
                  {errors.duration?.message}
                </span>
              )}
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Rent Start Date</label>
              <input
                className="w-full outline-none border-0 px-2 text-slate-400 rounded h-11 bg-[#EDF1FB]"
                type="date"
                placeholder="E.g. Greater Accra"
                {...register("duration_from", {
                  required: "Choose a starting date",
                })}
              />
              {errors.duration_from && (
                <span className="text-sm text-red-500 ">
                  {errors.duration_from?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Monthly Rent</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="number"
                placeholder="500"
                {...register("monthly_rent", {
                  required: "Enter amount for each month",
                })}
              />
              {errors.montly_rent && (
                <span className="text-sm text-red-500 ">
                  {errors.monthly_rent?.message}
                </span>
              )}
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Currency</label>
              <select
                {...register("currency", {
                  required: "Select currency"
                })}
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              >
                <option value="">Select Currency</option>
                {currencies.map((currency, index) => (
                  <option key={index} value={currency.code}>
                    {currency.name}
                  </option>
                ))}
              </select>
              {errors.currency && (
                <span className="text-sm text-red-500 ">
                  {errors.currency?.message}
                </span>
              )}
            </div>
          </div>
          <h1 className="font-bold text-2xl mt-5">More details</h1>
          <div className=" flex-col">
            <label className="block text-gray-400">Citizenship</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="Ghanaian"
              {...register("citizenship")}
            />
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">ID Type</label>
              <select
                {...register("id_type")}
                className="w-full outline-none text-slate-400 border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              >
                <option>Choose ID Type</option>
                {["Passport", "License", "NHIS"].map((identification, key) => (
                  <option key={key} value={identification}>
                    {identification}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">ID Number</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder=""
                {...register("id_number")}
              />
            </div>
          </div>
          <div className=" flex-col">
            <label className="block text-gray-400">Country</label>
            <select
              {...register("country", {
                required: "Select country"
              })}
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            >
              <option value="">Select country</option>
              {Object.values(countries).map((country, key) => (
                <option key={key} value={country.name}>
                  {" "}
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && (
                <span className="text-sm text-red-500 ">
                  {errors.country?.message}
                </span>
              )}
          </div>
          <div className="mt-5">
            <button className="bg-blue-400 text-white lg:px-12 lg:py-3 px-2 py-1 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default TenantForm;
