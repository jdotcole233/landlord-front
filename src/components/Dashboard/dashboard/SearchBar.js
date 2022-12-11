const SearchBar = ({
    name = "item"
}) => {
    return (
        <div className="flex border mt-5 rounded-full shadow-md">
            <span className=" bg-slate-300 w-14 text-white flex justify-center rounded-tl-full rounded-bl-full py-2">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input type="Text" placeholder={`Search ${name} by name`} className="px-2 w-full border-none outline-none rounded-tr-full rounded-br-full text-slate-400" />
          </div>
    )
}

export default SearchBar;