import React, { useState } from "react";
import Footer from "../../../Navigation/footer";
import DashboardNavigation from "../../Navigation";
import { Link, useNavigate } from "react-router-dom";
import { rooms } from "../../../Data/util";
import RoomCard from "./RoomCard";
import moment from "moment";
import DataTable from "react-data-table-component";
import { tenantsColumns } from "../../../Data/util";
import CurrentTenant from "../../Tenant/CurrentTenant";
import PreviousTenant from "../../Tenant/PreviousTenant";
import AllTenant from "../../Tenant/AllTenants";
import MobileDashbaordNavigation from "../../Navigation/MobileDashboardNavigation";
import { useLocation } from "react-router-dom";
import { useMakeRequestForData } from "../../../../Hooks/request";
import Waiting from "../../Dashboard/Loading";

const Room = () => {
  const history = useNavigate();
  const [tabs, setTabs] = useState(1);
  const {
    state: { id, tenants, apartment_name, room_name, room_number, rooms },
  } = useLocation();

  const segueToAddTenant = (rooms) => {
    history("/addTenant", {
      state: {
        rooms,
      },
    });
  };

  const { isLoading, responseData } = useMakeRequestForData({
    url: `rooms/room/${id}`,
  });
  
  return (
    <>
      <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 py-5 px-2 flex lg:flex-row flex-col justify-start items-start overflow-y-scroll">
        <DashboardNavigation />
        <MobileDashbaordNavigation />
        <div className="lg:ml-10 w-full lg:px-10 lg:py-10 py-5 px-2 bg-white">
          <div className="flex justify-between pr-5">
            <h1 className="text-2xl font-bold text-gray-600">Room</h1>
            <button
              onClick={() => segueToAddTenant(rooms)}
              className="flex bg-blue-500 px-3 py-1 justify-center items-center rounded-full text-white font-semibold"
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
              <span className="ml-2">Tenant</span>
            </button>
          </div>

          <div className="mt-2 text-sm">
          <span
              onClick={() => history(-2)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              Apartments
            </span>
            <span className="mr-1 font-bold text-blue-400">/</span>
            <span
              onClick={() => history(-1)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              {apartment_name}
            </span>
            <span className="mr-1 font-bold text-blue-400">/</span>
            {/* <span
              onClick={() => history(-1)}
              className="mr-1 font-bold cursor-pointer hover:text-blue-700 text-blue-400"
            >
              Rooms
            </span> */}
            {/* <span className="mr-1 font-bold text-blue-400">/</span> */}
            <span className="mr-1 font-bold text-blue-400">
              {room_name}[{room_number}]
            </span>
          </div>

          {isLoading ? (
            <Waiting />
          ) : (
            <div className="flex lg:flex-row flex-col mt-5">
              {/* <RoomCard {...rooms[0]} /> */}
              <div className="ml-4 flex-1 flex flex-col ">
                <div className="flex w-full shadow-md rounded-full">
                  <div
                    onClick={() => setTabs(1)}
                    className={`flex-1 ${
                      tabs == 1
                        ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                        : "font-light"
                    } text-center lg:text-sm text-xs cursor-pointer  py-2 shadow-sm `}
                  >
                    Current Tenant
                  </div>
                  <div
                    onClick={() => setTabs(2)}
                    className={`flex-1 ${
                      tabs == 2
                        ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                        : "font-light"
                    } text-center lg:text-sm text-xs cursor-pointer  py-2 shadow-sm `}
                  >
                    Previous Tenants
                  </div>
                  {/* <div
                  onClick={() => setTabs(3)}
                  className={`flex-1 ${
                    tabs == 3
                      ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                      : "font-light"
                  } text-center lg:text-sm text-xs cursor-pointer  py-2 shadow-sm `}
                >
                  All Tenants
                </div> */}
                </div>

                {tabs === 1 && 
                (
                  responseData?.tenants.length ?
                  <CurrentTenant { ...responseData?.tenants.reverse()[0] } />
                  : (
                    <span className="mt-5 block text-center">
                      No Tenant found
                    </span>
                  )
                )
                }

                {tabs === 2 && (
                  <PreviousTenant
                    tenantsColumns={tenantsColumns}
                    data={responseData?.tenants.reverse()}
                  />
                )}

                {/* {tabs === 3 && (
                <AllTenant
                  tenantsColumns={tenantsColumns}
                  data={rooms[0].tenant}
                />
              )} */}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Room;
