import { useContext } from "react";
import NavigationLinks from "./NavigationLinks";
import AppContext from "../../Context/Context"

const MobileDashboardMenu = () => {
    const { setMobileMenu } = useContext(AppContext)
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
      }}
      className="w-full h-full  absolute top-0 bottom-0 right-0 left-0"
    >
      <div className="bg-white h-full w-2/3">
        <div className="flex justify-between py-3 border-b px-2">
          <span className="font-bold">Close Filter</span>
          <span onClick={() => setMobileMenu(false)}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

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

        <NavigationLinks />
      </div>
    </div>
  );
};

export default MobileDashboardMenu;
