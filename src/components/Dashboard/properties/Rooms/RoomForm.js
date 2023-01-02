import { useState, useEffect } from "react";
import DashboardNavigation from "../../Navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../../Navigation/footer";
import MobileDashbaordNavigation from "../../Navigation/MobileDashboardNavigation";
import { useForm } from "react-hook-form";
import { makeRequestWithData } from "../../../../Hooks/request";

const RoomForm = () => {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [apartmentId, setApartmentId] = useState(null);
  const { state } = useLocation()

  useEffect(() => {
    setApartmentId(state?.apartment_id)
  }, [state]);


  const addRoom = (data) => {
    data["apartment_id"] = state?.apartment_id;
    console.log(data)
    setIsLoading(true);
    makeRequestWithData({
      url:  "rooms/create-room",
      data,
      reset,
      setIsLoading,
    });

    
  }

  return (
    <>
      <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
        <DashboardNavigation />
        <MobileDashbaordNavigation />
        {/* Forms */}
        <form onSubmit={handleSubmit(addRoom)} className="lg:px-10 lg:py-10 py-5 px-2 bg-white rounded w-full lg:ml-10">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl mb-4">Basic Information</h1>
            <svg
              onClick={() => history(-1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f00"
              className="w-7 h-7 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className=" flex-col">
            <label className="block text-gray-400">Room Name</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="E.g. Kwamena room"
              {
                ...register('room_name', {
                  required: "Room name is required"
                })
              }
            />
            {errors.room_name && (
              <span className="text-sm text-red-500 ">
                {errors.room_name?.message}
              </span>
            )}
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Room Number</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder="E.g. Room 5"
                {
                  ...register('room_number')
                }
              />
            </div>
          </div>
          <div className="mt-5">
            <button type="submit" className="bg-blue-400 text-white px-12 py-3 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RoomForm;
