import { useState, useEffect } from "react";
import DashboardNavigation from "../../Navigation";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Navigation/footer";
import MobileDashbaordNavigation from "../../Navigation/MobileDashboardNavigation";
import { useForm } from "react-hook-form";
import { regions } from "../../../Data/cities";
import {
  makeRequestWithData,
  useMakeRequestForData,
} from "../../../../Hooks/request";
import { useLocation } from "react-router-dom";
import { data } from "autoprefixer";

const ApartmentForm = () => {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  const { isLoading: fetching, responseData } = useMakeRequestForData({
    url: `apartments/apartment/${state?.apartment_id}`,
  });

  useEffect(() => {
    if (responseData) {
      console.log("response", responseData);
      setFormData(responseData);
    }
  }, [fetching]);

  const addApartment = (data) => {
    console.log(data);
    data["landlord_id"] = 20;
    setIsLoading(true);
    makeRequestWithData({
      url: state?.requestType ? `apartments/edit-apartment/${state?.apartment_id}` : "apartments/create-apartment",
      data,
      reset,
      setIsLoading,
    });
  };

  return (
    <>
      <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 px-2 py-5 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
        <DashboardNavigation />
        <MobileDashbaordNavigation />
        {/* Forms */}
        <form
          // onSubmit={handleSubmit(addApartment)}
          className="lg:px-10 lg:py-10 py-5 px-2 bg-white rounded w-full lg:ml-10"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl mb-4">Basic Information</h1>
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
            <label className="block text-gray-400">Apartment Name</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="E.g. Adinkra Apartment"
              defaultValue={formData?.apartment_name || ""}
              {...register("apartment_name", {
                required: "Name of apartment required",
              })}
            />
            {errors.apartment_name && (
              <span className="text-sm text-red-500 ">
                {errors.apartment_name?.message}
              </span>
            )}
          </div>
          <h1 className="font-bold text-2xl mt-5">Apartment Location</h1>
          <div className=" flex-col">
            <label className="block text-gray-400">Enter District</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="E.g. Ga-East District"
              defaultValue={formData?.location?.district || ""}
              value={formData?.location?.district || ""}
              {...register("district", {
                required: false
              })}
            />
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Street Address</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder="E.g. Hse. No. 11"
                defaultValue={formData?.location?.street_address || ""}
                {...register("street_address", {
                  required: "Location of apartment apartment required",
                })}
              />
              {errors.street_address && (
                <span className="text-sm text-red-500 ">
                  {errors.street_address?.message}
                </span>
              )}
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Choose Region</label>
              <select
                defaultValue={formData?.location?.region || ""}
                value={formData?.location?.region || ""}
                {...register("region", {
                  required: "Select a region where apartment is located",
                })}
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              >
                <option value="">Choose Region</option>
                {regions.map((region, key) => (
                  <option key={key} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.region && (
                <span className="text-sm text-red-500 ">
                  {errors.region?.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">City</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder="Enter City"
                defaultValue={formData?.location?.city  || ""}
                {...register("city", {
                  required: "City is required",
                })}
              />
              {errors.city && (
                <span className="text-sm text-red-500 ">
                  {errors.city?.message}
                </span>
              )}
            </div>
            <div className=" flex-col flex-1">
              <label className="block text-gray-400">Digital Address</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                defaultValue={formData?.location?.digital_address  || ""}
                placeholder="E.g. GE-048-2700"
                {...register("digital_address")}
              />
            </div>
          </div>
          <div className="mt-5">
            {state?.requestType ? (
              <button
                onClick={handleSubmit(addApartment)}
                type="submit"
                className="bg-blue-400 text-white lg:px-12 lg:py-3  px-4 py-1 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600"
              >
                Save changes
              </button>
            ) : (
              <button
                onClick={handleSubmit(addApartment)}
                type="submit"
                className="bg-blue-400 text-white lg:px-12 lg:py-3  px-4 py-1 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ApartmentForm;
