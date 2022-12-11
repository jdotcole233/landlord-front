import React, { useState } from "react";
import Footer from "../../Navigation/footer";
import DashboardNavigation from "../Navigation";
import { useNavigate } from "react-router-dom";
import { rooms } from "../../Data/util";
import RoomCard from "./RoomCard";
import moment from "moment";
import DataTable from "react-data-table-component"
import { tenantsColumns } from "../../Data/util";
import CurrentTenant from "../Tenant/CurrentTenant";
import PreviousTenant from "../Tenant/PreviousTenant";
import AllTenant from "../Tenant/AllTenants";

const Room = () => {
  const history = useNavigate();
  const [tabs, setTabs] = useState(1);
  return (
    <>
      <div className="bg-[#F5FAFF] h-screen px-10 py-20 flex justify-start items-start overflow-y-scroll">
        <DashboardNavigation />
        <div className="ml-10 w-full px-10 py-10 bg-white">
          <div className="flex justify-between pr-5">
            <h1 className="text-2xl font-bold text-gray-600">Room</h1>
            <button className="flex bg-blue-500 px-2 py-1 justify-center items-center rounded-full text-white font-semibold">
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
              <span>Tenant</span>
            </button>
          </div>

          <div className="mt-2 text-sm">
            <span
              onClick={() => history(-2)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              Apartment Name
            </span>
            <span className="mr-1 font-bold text-blue-400">/</span>
            <span
              onClick={() => history(-1)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              Rooms
            </span>
            <span className="mr-1 font-bold text-blue-400">/</span>
            <span className="mr-1 font-bold text-blue-400">
              Room [Name][number]
            </span>
          </div>

          <div className="flex mt-5">
            <RoomCard {...rooms[0]} />
            <div className="ml-4 flex-1 flex flex-col ">
              <div className="flex w-full shadow-md rounded-full">
                <div
                  onClick={() => setTabs(1)}
                  className={`flex-1 ${
                    tabs == 1
                      ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                      : "font-light"
                  } text-center cursor-pointer  py-1 shadow-sm `}
                >
                  Current Tenant
                </div>
                <div
                  onClick={() => setTabs(2)}
                  className={`flex-1 ${
                    tabs == 2
                      ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                      : "font-light"
                  } text-center cursor-pointer  py-1 shadow-sm `}
                >
                  Previous Tenants
                </div>
                <div
                  onClick={() => setTabs(3)}
                  className={`flex-1 ${
                    tabs == 3
                      ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                      : "font-light"
                  } text-center cursor-pointer  py-1 shadow-sm `}
                >
                  All Tenants
                </div>
              </div>

              {tabs === 1 && <CurrentTenant />}

              {tabs === 2 && <PreviousTenant tenantsColumns={tenantsColumns} data={rooms[0].tenant} />}

              {tabs === 3 && <AllTenant tenantsColumns={tenantsColumns} data={rooms[0].tenant} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Room;
