import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center h-screen">
           <h1 
            style={{
                backgroundImage: "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg')",
                backgroundSize: "cover",
                backgroundClip: "text",
                objectFit: "cover",
                WebkitTextFillColor: "transparent"
            }}
           className="text-9xl font-extrabold mb-2">Oops!</h1>
           <h1 className="font-extrabold text-xl">404 - PAGE NOT FOUND</h1>
           <span className="lg:w-1/3 lg:px-0 px-1 mb-4 mt-1 font-bold text-center">The Page you are looking for might have removed had its name changed or its temporarily unavailable</span>
           <Link to="/" className="border bg-blue-700 px-5 py-2 shadow-lg rounded-full text-white ">GO TO HOMEPAGE</Link>
        </div>
    )
}

export default PageNotFound;