import React from "react";
import CountUp from "react-countup";
import Footer from "../../Navigation/footer";
import DashboardNavigation from "../Navigation";
import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
    <div className="bg-[#F5FAFF] h-screen px-10 py-20 flex justify-start items-start">
      <DashboardNavigation />
      {/* Dashboard content */}
      <section className="ml-10 w-full">
        <div className="grid grid-cols-3 gap-4">
          <div className="border w-96  h-40 rounded bg-green-300 shadow-md flex">
            <div className="flex-1 flex flex-col justify-center px-10">
              <h1 className="text-7xl font-bold text-white">
                <CountUp end={244} />
              </h1>
              <h1 className="text-white text-xl font-light">Apartments</h1>
            </div>
            <div className="flex justify-center items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="#e6f7ff"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>

          <div className="border w-96  h-40 rounded bg-orange-400 shadow-md flex">
            <div className="flex-1 flex flex-col justify-center px-10">
              <h1 className="text-7xl font-bold text-white">
                <CountUp end={10} />
              </h1>
              <h1 className="text-white text-xl font-light">Rooms</h1>
            </div>
            <div className="flex justify-center items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="#e6f7ff"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
            </div>
          </div>

          <div className="border w-96  h-40 rounded bg-blue-900 shadow-md flex">
            <div className="flex-1 flex flex-col justify-center px-10">
              <h1 className="text-7xl font-bold text-white">
                <CountUp end={20} />
              </h1>
              <h1 className="text-white text-xl font-light">Tenants</h1>
            </div>
            <div className="flex justify-center items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="#e6f7ff"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>

          <div className="border w-96  h-40 rounded bg-rose-500 shadow-md flex">
            <div className="flex-1 flex flex-col justify-center px-10">
              <h1 className="text-7xl font-bold text-white">
                <CountUp end={2} />
              </h1>
              <h1 className="text-white text-xl font-light">
                Upcoming Renewals
              </h1>
            </div>
            <div className="flex justify-center items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="#e6f7ff"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>

          <div className="border w-96  h-40 rounded bg-fuchsia-600 shadow-md flex">
            <div className="flex-1 flex flex-col justify-center px-10">
              <h1 className="text-7xl font-bold text-white">
                <CountUp end={45} />
              </h1>
              <h1 className="text-white text-xl font-light">Total Rent</h1>
            </div>
            <div className="flex justify-center items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="#e6f7ff"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>

          <div className="border w-96  h-40 rounded bg-blue-500 shadow-md flex">
            <div className="flex-1 flex flex-col justify-center px-10">
              <h1 className="text-7xl font-bold text-white">
                <CountUp end={1500} />
              </h1>
              <h1 className="text-white text-xl font-light">
                Average Month Rent
              </h1>
            </div>
            <div className="flex justify-center items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="#e6f7ff"
                className="w-24 h-24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white px-5 py-7 shadow-md">
          <div className="flex justify-between pr-5">
            <h1 className="text-2xl font-bold text-gray-600">
              List of upcoming renewals
            </h1>
            <Link to="/addApartment" className="flex hover:bg-blue-700 hover:shadow-2xl bg-blue-500 px-3 py-1 justify-center items-center rounded-full text-white font-semibold">
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
          <table className=" tbale-auto  mt-7 w-full">
            <thead className="">
              <th className="text-left font-bold px-1 text-lg">Full Name</th>
              <th className="text-left font-bold px-1 text-lg">Apartment</th>
              <th className="text-left font-bold px-1 text-lg">Location</th>
              <th className="text-left font-bold px-1 text-lg">Room Name</th>
              <th className="text-left font-bold px-1 text-lg">Currency</th>
              <th className="text-left font-bold px-1 text-lg">Monthly Rent</th>
              <th className="text-left font-bold px-1 text-lg">
                Tenancy End Date
              </th>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Cole Baidoo
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Agbogba House
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Abokobi Road
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Room 6
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  GHS
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  1800
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  December 28, 2023{" "}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Cole Baidoo
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Agbogba House
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Abokobi Road
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Room 6
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  GHS
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  1800
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  December 28, 2023{" "}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Cole Baidoo
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Agbogba House
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Abokobi Road
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Room 6
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  GHS
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  1800
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  December 28, 2023{" "}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Cole Baidoo
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Agbogba House
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Abokobi Road
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Room 6
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  GHS
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  1800
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  December 28, 2023{" "}
                </td>
              </tr>
              <tr>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Cole Baidoo
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Agbogba House
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Abokobi Road
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  Room 6
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  GHS
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  1800
                </td>
                <td className="px-2 py-2 border-b border-b-slate-100 font-extralight">
                  December 28, 2023{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Dashboard;
