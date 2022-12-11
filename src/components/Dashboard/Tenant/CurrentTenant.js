import { useState } from "react";
import moment from "moment"

const CurrentTenant = () => {
    const [showMore, setShowMore] = useState(false);
  
    return (
      <div className="flex lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center mt-5">
        <div className="border lg:w-72 w-full mt-2 shadow-lg rounded-xl">
          <div className="bg-[url('https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png')] h-56 bg-contain bg-no-repeat bg-center  lg:bg-contain object-cover"></div>
          <div className="px-3 py-2">
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Name:</span> Cole Baidoo
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Email:</span>
              jdotcole233@gmail.com
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Phone Number:</span>05038584804
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Monthly Rent:</span>GHC 850
            </h1>
            <div className="flex justify-between">
              <h1 className="text-blue-500">
                <span className="text-gray-500 mr-1">Expires </span>
                {moment("2023-05-11").fromNow()}
              </h1>
              <span onClick={() => setShowMore(true)} className={`${showMore ? 'hidden' : 'flex'} bg-slate-600 px-2 py-1 cursor-pointer text-white rounded-lg`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
  
        {/* More */}
        <div className={`${showMore ? 'flex' : 'hidden'} lg:ml-5 border px-5 py-4  w-full lg:w-72 shadow-lg cursor-pointer flex flex-col justify-between rounded-xl mt-3`}>
          <div>
            <h1 className="font-bold text-xl">Rent Details</h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Rent Start: </span>
              {moment("2022-01-01").format("MMMM Do, YYYY.")}
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Rent Start</span>
              {moment("2023-12-01").format("MMMM Do, YYYY.")}
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">No. Occupants</span>4
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Total Rent</span>
              GHS 5600
            </h1>
            <h1 className="font-bold text-xl mt-2">Tenant origin</h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Citizenship:</span>
              Ghanaian
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Identification Number</span>
              XXX-XXX
            </h1>
            <h1 className="text-blue-500">
              <span className="text-gray-500 mr-1">Country</span>
              Ghana
            </h1>
          </div>
  
          <div>
            <span onClick={() => setShowMore(false)} className="border bg-slate-600 flex px-2 py-1 w-11 rounded-md text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    );
  };

  export default CurrentTenant