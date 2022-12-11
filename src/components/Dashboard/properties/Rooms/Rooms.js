import React from "react";
import DashboardNavigation from "../../Navigation";
import { Link, useNavigate } from "react-router-dom";
import { rooms } from "../../../Data/util";
import Footer from "../../../Navigation/footer";
import RoomCard from "./RoomCard";
import SearchBar from "../../Dashboard/SearchBar";

const Rooms = () => {
  const history = useNavigate();

  console.log(history);

  return (
    <>
      <div className="bg-[#F5FAFF] h-screen px-10 py-20 flex justify-start items-start overflow-y-scroll">
        <DashboardNavigation />

        <section className="w-full ml-10 px-10 py-10 bg-white rounded-md shadow-md">
          <div className="flex justify-between pr-5">
            <h1 className="text-2xl font-bold text-gray-600">Rooms</h1>
            <Link to="/addRoom" className="flex hover:bg-blue-700 hover:shadow-2xl bg-blue-500 px-4 py-1 justify-center items-center rounded-full text-white font-semibold">
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
            </Link>
          </div>
          <div className="mt-2 text-sm">
            <span
              onClick={() => history(-1)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              Apartment Name
            </span>
            <span className="mr-1 font-bold text-blue-400">/</span>
            <span className="mr-1 font-bold text-blue-400">Rooms</span>
          </div>
          <SearchBar name="room" />
          <div className="grid grid-cols-4 gap-3 mt-3">
            {rooms.map((room, key) => (
              <RoomCard key={key} {...room} />
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};



export default Rooms;
