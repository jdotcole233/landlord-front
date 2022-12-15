import React from "react";
import DashboardNavigation from "../Navigation";
import { properties } from "../../Data/util";
import { Link } from "react-router-dom";
import Footer from "../../Navigation/footer";
import SearchBar from "../Dashboard/SearchBar";
import MobileDashbaordNavigation from "../Navigation/MobileDashboardNavigation";
import { useMakeRequestForData } from "../../../Hooks/request";
import Waiting from "../Dashboard/Loading";
import { useNavigate } from "react-router-dom"

const MyProperties = () => {
  const { isLoading , responseData } = useMakeRequestForData({
    url: "apartments/apartments",
  });

  console.log(responseData)

  return (
    <div>
      <div className="bg-[#F5FAFF] h-screen px-2 lg:px-10 py-5 lg:py-20 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
        <DashboardNavigation />
        <MobileDashbaordNavigation />
        <section className="lg:ml-10 bg-white w-full lg:px-10 lg:py-10 py-5 px-2 rounded-md shadow-md">
          <div className="flex justify-between pr-5">
            <h1 className="text-2xl font-bold text-gray-600">My Property</h1>
            <Link
              to="/addApartment"
              className="flex hover:bg-blue-700 hover:shadow-2xl bg-blue-500 px-3 py-1 justify-center items-center rounded-full text-white font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="ml-2">Apartment</span>
            </Link>
          </div>
          <SearchBar name="apartment" />
          {isLoading ? (
            <Waiting />
          ) : (
            <div className="lg:grid lg:grid-cols-4 lg:gap-3 mt-5 ">
              {responseData?.map((property, key) => (
                <Property key={key} {...property} />
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

const Property = ({id, apartment_name, image, location }) => {
  const history = useNavigate();

  const editPropertDetails = (apartment_id) => {
    history("/addApartment", {
      state: {
        requestType: "editApartment",
        apartment_id
      }
    });
  }

  return (
    <div className="border lg:mb-0 mb-5 shadow-md rounded-md">
      <div
        className={`bg-[url('https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg')] bg-cover object-contain bg-no-repeat border w-full h-48 `}
      ></div>
      <div className="px-3 py-2">
        <h1 className="text-blue-700 font-bold text-lg">{apartment_name}</h1>
        <h1 className="text-blue-500">
          <span className="text-gray-500">Street:</span>{" "}
          {location?.street_address}
        </h1>
        <h1 className="text-blue-500">
          <span className="text-gray-500">City:</span> {location?.city}
        </h1>
        <h1 className="text-blue-500">
          <span className="text-gray-500">Region:</span> {location?.region}
        </h1>
        <h1 className="text-blue-500">
          <span className="text-gray-500">Country:</span> {location?.country}
        </h1>
      </div>
      <div className="flex px-2 py-2">
        <button
          onClick={() => editPropertDetails(id)}
          // to="/addApartment"
          className="border hover:shadow-lg hover:bg-slate-900 bg-slate-700 cursor-pointer px-2 rounded flex justify-center items-center py-1 text-white mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <Link
          to="/rooms"
          className="border bg-slate-700 hover:shadow-lg hover:bg-slate-900 cursor-pointer px-2 rounded flex justify-center items-center py-1 text-white mr-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
        <span className="border bg-slate-700 cursor-pointer hover:shadow-lg hover:bg-slate-900 px-2 rounded flex justify-center items-center py-1 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MyProperties;
