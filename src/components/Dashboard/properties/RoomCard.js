import React from "react";
import CountUp from "react-countup";
import moment from "moment";
import { Link } from "react-router-dom";

const RoomCard = ({ room_name, room_number, image, tenant }) => {
    return (
      <div className="border shadow-xl">
        <div className=" bg-[url('https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg')] bg-cover bg-no-repeat h-44"></div>
        <div className="px-3">
          <h1 className="text-blue-700 font-bold text-lg">
            {room_name}
          </h1>
          <h1 className="text-blue-500">
            <span className="text-gray-500 mr-1">Room Number:</span>
            {room_number}
          </h1>
          <h1 className="text-blue-500">
            <span className="text-gray-500 mr-1">Current Tenant:</span>
            {tenant.length && `${tenant[0].first_name} ${tenant[0].last_name}`}
          </h1>
          <h1 className="text-blue-500">
            <span className="text-gray-500 mr-1">Current Rent:</span>
            {tenant.length && `${tenant[0].currency} ${tenant[0].monthly_rent}`}
          </h1>
          <h1 className="text-red-500">
            <span className="text-gray-500 mr-1">Expires</span>
            {
              moment('2023-03-12').fromNow()
            }
          </h1>
          <h1 className="text-blue-500">
            <span className="text-gray-500 mr-1">Total Tenants:</span>
            {<CountUp end={tenant.length} />}
          </h1>
        </div>
        <div className="flex px-2 py-2">
          <span className="border bg-slate-700 cursor-pointer px-2 rounded flex justify-center items-center py-1 text-white mr-1">
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
          </span>
          <Link
            to="/room"
            className="border bg-slate-700 cursor-pointer px-2 rounded flex justify-center items-center py-1 text-white mr-1"
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
          <span className="border bg-slate-700 cursor-pointer px-2 rounded flex justify-center items-center py-1 text-red-500">
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

  export default RoomCard;