import { useContext } from "react";
import AppContext from "../../Context/Context"

const MobileDashbaordNavigation = () => {
  const { setMobileMenu } = useContext(AppContext)
  return (
    <div className="lg:hidden flex w-full border text-blue-700 bg-blue-400 py-4 border-none rounded mb-5 justify-center items-center overflow-y-scroll">
      <span className="mr-2">Dashboard Navigation</span>
      <span onClick={() => setMobileMenu(true)}>
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default MobileDashbaordNavigation;
