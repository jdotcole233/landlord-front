import React from "react";
import { LOADING } from "../../Data/assets";

const Waiting = () => {
    return (
        <div className="w-full h-full py-20 flex flex-col items-center justify-center">
            <img src={LOADING} className="mb-2" />
            <span className="font-bold text-lg">Please wait...</span>
        </div>
    )
}

export default Waiting;