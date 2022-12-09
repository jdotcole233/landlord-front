import React from "react";
import { stats } from "../Data/util";

const Home = () => {
  return (
    <div className="w-screen h-screen flex-col justify-start">
      <section className="flex-col bg-blue-200 ">
        <div className="mt-10 px-10">
          <h1 className="text-7xl font-semibold  drop-shadow-lg">
            Mange your assets
          </h1>
          <h1 className="text-7xl font-semibold drop-shadow-lg">Easily</h1>
        </div>
        <div className="flex  mt-10 px-10">
          {stats.map((stat, key) => (
            <HomeStates key={key} number={stat.number} content={stat.content} color={stat.color} />
          ))}
        </div>
      </section>
      <section className="bg-red-500 h-80">
      </section>
    </div>
  );
};

const HomeStates = ({ number, content, color }) => {
  return (
    <div className={`bg-blue-${color} mr-3 opacity-75 rounded-md flex flex-col  px-5 py-2 shadow-xl`}>
      <div className="text-5xl font-semibold p-0 text-white flex items-center justify-center">
        +{number}
      </div>
      <div className="text-white  p-0 font-extralight h-full text-2xl flex justify-center items-center">
        {content}
      </div>
    </div>
  );
};

export default Home;
