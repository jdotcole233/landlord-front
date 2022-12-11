import DashboardNavigation from "../../Navigation";
import { useNavigate } from "react-router-dom";


const RoomForm = () => {

    const history = useNavigate()

    return (
        <div className="bg-[#F5FAFF] h-screen px-10 py-20 flex justify-start items-start overflow-scroll">
        <DashboardNavigation />
  
        {/* Forms */}
        <section className="px-10 py-10 bg-white rounded w-full ml-10">
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
            />
          </div>
          <div className="flex mt-4">
            <div className=" flex-col mr-6 flex-1">
              <label className="block text-gray-400">Room Number</label>
              <input
                className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
                type="text"
                placeholder="E.g. Room 5"
              />
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-blue-400 text-white px-12 py-3 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600">
              Submit
            </button>
          </div>
        </section>
      </div>
    )
}

export default RoomForm;