import DashboardNavigation from "../../Navigation";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Navigation/footer";
import MobileDashbaordNavigation from "../../Navigation/MobileDashboardNavigation";

const ApartmentForm = () => {
  const history = useNavigate();
  return (
   <>
     <div className="bg-[#F5FAFF] h-screen lg:px-10 lg:py-20 px-2 py-5 flex lg:flex-row flex-col justify-start items-start overflow-scroll">
      <DashboardNavigation />
      <MobileDashbaordNavigation />
      {/* Forms */}
      <section className="lg:px-10 lg:py-10 py-5 px-2 bg-white rounded w-full lg:ml-10">
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
          <label className="block text-gray-400">Apartment Name</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder="E.g. Adinkra Apartment"
          />
        </div>
        <h1 className="font-bold text-2xl mt-5">Apartment Location</h1>
        <div className=" flex-col">
          <label className="block text-gray-400">Choose District</label>
          <input
            className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
            type="text"
            placeholder="E.g. Ga-East District"
          />
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">Street Address</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="E.g. Hse. No. 11"
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Choose Region</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="E.g. Greater Accra"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <div className=" flex-col mr-6 flex-1">
            <label className="block text-gray-400">City</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="Enter City"
            />
          </div>
          <div className=" flex-col flex-1">
            <label className="block text-gray-400">Digital Address</label>
            <input
              className="w-full outline-none border-0 px-2 rounded h-11 bg-[#EDF1FB]"
              type="text"
              placeholder="E.g. GE-048-2700"
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="bg-blue-400 text-white lg:px-12 lg:py-3  px-4 py-1 hover:bg-blue-700 hover:shadow-2xl rounded-md text-lg border-2 border-blue-600">
            Submit
          </button>
        </div>
      </section>
    </div>
    <Footer />
   </>
  );
};

export default ApartmentForm;
