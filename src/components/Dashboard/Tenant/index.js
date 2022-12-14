import React, { useState } from "react";
import DashboardNavigation from "../Navigation";
import { rooms } from "../../Data/util";
import { tenantsColumns } from "../../Data/util";
import CurrentTenant from "./CurrentTenant";
import PreviousTenant from "./PreviousTenant";
import AllTenant from "./AllTenants";
import { Link } from "react-router-dom";
import MobileDashbaordNavigation from "../Navigation/MobileDashboardNavigation";
import Footer from "../../Navigation/footer";
import { useMakeRequestForData } from "../../../Hooks/request";


const Tenant = () => {
    const [tabs, setTabs] = useState(1);

    const { isLoading, responseData } = useMakeRequestForData({
      url: `landlord/landlord/20`,
    });


    console.table(responseData);

  return (
    <>
    <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 px-2 py-5 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
      <DashboardNavigation />
      <MobileDashbaordNavigation />
      <section className="border lg:ml-10 w-full lg:px-10 lg:py-10 py-5 px-2 bg-white">
        <div className="flex justify-between pr-5">
          <h1 className="text-2xl font-bold text-gray-600">My Tenants</h1>
          <Link to="/addTenant" className="flex hover:bg-blue-700 hover:shadow-2xl bg-blue-500 px-3 py-1 justify-center items-center rounded-full text-white font-semibold">
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
          </Link>
        </div>
        <div>

        <div className="lg:ml-4 flex-1 flex flex-col mt-5">
          <div className="flex w-full shadow-md rounded-full">
            {/* <div
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
            </div> */}
            <div
              onClick={() => setTabs(3)}
              className={`flex-1 ${
                tabs == 3
                  ? " bg-blue-400 text-blue-700 border rounded-full shadow-lg font-bold"
                  : "font-light"
              } text-center lg:text-sm text-xs cursor-pointer  py-2 shadow-sm `}
            >
              All Tenants
            </div>
          </div>

          {tabs === 1 && <CurrentTenant />}

          {tabs === 2 && (
            <PreviousTenant
              tenantsColumns={tenantsColumns}
              data={rooms[0].tenant}
            />
          )}

          {tabs === 3 && (
            <AllTenant tenantsColumns={tenantsColumns} data={rooms[0].tenant} />
          )}
        </div>

      </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Tenant;
