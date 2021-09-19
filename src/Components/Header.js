import React from "react";
import { HomeIcon } from "@heroicons/react/outline";
const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between flex-row  pt-12 pb-48">
        <div className="flex flex-col gap-3 ">
          <div>
            <h1 className="text-2xl text-left font-bold text-white">
              Dashboard
            </h1>
          </div>
          <div>
            <div className="flex flex-row gap-1">
              <button
                type="button"
                className="bg-grey-800 p-1  rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <HomeIcon className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" className="font-bold  text-gray-300">
                Dashboard
              </button>
              <p> . </p>
              <button type="button" className="font-bold text-gray-300">
                Latest Updated
              </button>
            </div>
          </div>
        </div>
        <div>
          <button className="text-white bg-gray-300 bg-opacity-20 hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white font-medium">
            Dashboard
          </button>
          <button className="text-black bg-white  hover:bg-gray-300  px-4 py-2 ml-3 rounded-md text-base font-medium">
            Features
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
