import React from "react";
import DashboardNavigation from "../../Navigation";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { rooms } from "../../../Data/util";
import Footer from "../../../Navigation/footer";
import RoomCard from "./RoomCard";
import SearchBar from "../../Dashboard/SearchBar";
import MobileDashbaordNavigation from "../../Navigation/MobileDashboardNavigation";
import { useMakeRequestForData } from "../../../../Hooks/request";
import Waiting from "../../Dashboard/Loading";

const Rooms = () => {
  const history = useNavigate();

  const { state } = useLocation();

  const { isLoading, responseData } = useMakeRequestForData({
    url: `apartments/apartment/${state?.apartment_id}`,
  });


  const segueNext = (url, requestType, apartment_id) => {
    history(url, {
      state: {
        requestType,
        apartment_id,
      },
    });
  };

  return (
    <>
      <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 px-2 py-5 flex lg:flex-row flex-col justify-start items-start overflow-y-scroll">
        <DashboardNavigation />
        <MobileDashbaordNavigation />
        <section className="w-full lg:ml-10 lg:px-10 lg:py-10 py-5 px-2 bg-white rounded-md shadow-md">
          <div className="flex justify-between pr-5">
            <h1 className="text-2xl font-bold text-gray-600">Rooms</h1>
            <button
              onClick={() => segueNext("/addRoom", "addRooms", state?.apartment_id)}
              className="flex hover:bg-blue-700 hover:shadow-2xl bg-blue-500 px-4 py-1 justify-center items-center rounded-full text-white font-semibold"
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
              <span className="ml-2">Room</span>
            </button>
          </div>
          <div className="mt-2 text-sm">
          <span
              onClick={() => history(-1)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              Apartments
            </span>
            <span className="mr-1 font-bold text-blue-400">/</span>
            <span
              onClick={() => history(-1)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              {responseData?.apartment_name}
            </span>
          </div>
          <SearchBar name="room" />

          {isLoading ? (
            <Waiting />
          ) : responseData?.rooms?.length ? (
            <div className="lg:grid lg:grid-cols-4 lg:gap-3 mt-3">
              {responseData?.rooms?.map((room, key) => (
                <RoomCard key={key} {...room}   apartment_name={responseData?.apartment_name} rooms={responseData?.rooms} />
              ))}
            </div>
          ) : (
            <div className="w-full py-10">
              <span className="font-bold text-2xl">No rooms Found</span>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
