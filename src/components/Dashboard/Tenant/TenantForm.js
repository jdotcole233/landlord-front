import DashboardNavigation from "../Navigation";
import { useNavigate } from "react-router-dom";
import MobileDashbaordNavigation from "../Navigation/MobileDashboardNavigation";
import Footer from "../../Navigation/footer";

const TenantForm = () => {
  const history = useNavigate();

  return (
    <>
    <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
      <DashboardNavigation />
      <MobileDashbaordNavigation />
      {/* Forms */}
      <section className="lg:px-10 lg:py-10 py-5 px-2 bg-white rounded w-full lg:ml-10">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-3xl mb-4">Tenant Information</h1>
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
          <label className="block text-gray-400">Select Room</label>
          <select className="w-full text-slate-400 outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]">
            <option>Select Room</option>
            {["Room 1", "Room 2", "Room n"].map((room, key) => (
              <option key={key} value={room}>
                {room}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">First Name</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder=""
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Other Name</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">Last Name</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder=""
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Email</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="email"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">Phone Number</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="tel"
              placeholder=""
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Number Of Occupants</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">Duration</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="specify by months"
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Rent Start Date</label>
            <input
              className="w-full outline-none border-0 px-2 text-slate-400 rounded h-11 bg-[#EDF1FB]"
              type="date"
              placeholder="E.g. Greater Accra"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">Monthly Rent</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="500"
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Currency</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="GHC"
            />
          </div>
        </div>
        <h1 className="font-bold text-2xl mt-5">More details</h1>
        <div className=" flex-col">
          <label className="block text-gray-400">Citizenship</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder="Ghanaian"
          />
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">ID Type</label>
            <select className="w-full outline-none text-slate-400 border-0 px-2 rounded h-11 bg-[#EDF1FB]">
              <option>Choose ID Type</option>
              {["Passport", "License", "NHIS"].map((identification, key) => (
                <option key={key} value={identification}>
                  {identification}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">ID Number</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className=" flex-col">
          <label className="block text-gray-400">Country</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder="E.g. Ghana"
          />
        </div>
        <div className="mt-5">
          <button className="bg-blue-400 text-white lg:px-12 lg:py-3 px-2 py-1 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600">
            Submit
          </button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default TenantForm;
