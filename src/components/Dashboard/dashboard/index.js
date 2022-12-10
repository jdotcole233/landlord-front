import React from "react";
import CountUp from "react-countup";
import Footer from "../../Navigation/footer";

const Dashboard = () => {
  return (
    <>
    <div className="bg-[#F5FAFF] h-screen px-10 py-20 flex justify-start items-start">
      {/* User Avatar and navigation */}
      <div className=" w-3/12 lh-3/6 py-2 bg-white shadow-md rounded-md">
        {/* Profile Avatar */}
        <div className=" h-72 flex flex-col items-center justify-center">
          <div className=" h-40 w-40 rounded-full flex items-center justify-center bg-profilePicture bg-contain  "></div>
          <div>
            <h1 className="text-2xl font-semibold text-center mt-1">
              Cole Baidoo
            </h1>
            <p className="text-sm text-center mt-1 font-extralight">
              0503848404
            </p>
          </div>
        </div>
        {/* Navigation */}
        <ul>
          <li className="flex border-b border-b-gray-200 py-2 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold text-[#00aaff]">Dashboard</span>
          </li>
          <li className="flex border-b border-b-gray-200 py-2 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold text-[#00aaff]">
              My Profile
            </span>
          </li>
          <li className="flex border-b border-b-gray-200 py-2 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold text-[#00aaff]">
              My Properties
            </span>
          </li>

          <li className="flex border-b border-b-gray-200 py-2 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold text-[#00aaff]">
              My Tenants
            </span>
          </li>
          <li className="flex border-b border-b-gray-200 py-2 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold text-[#00aaff]">
              Change Password
            </span>
          </li>
          <li className="flex py-2 px-5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#00aaff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                />
              </svg>
            </span>
            <span className="ml-2 font-semibold text-[#00aaff]">Logout</span>
          </li>
        </ul>
      </div>

      {/* Dashboard content */}
      <section className="ml-10">
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
              <span>Apartment</span>
            </button>
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
