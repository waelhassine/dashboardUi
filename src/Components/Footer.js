import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 bg-gray-100 h-16">
      <div className="flex flex-row justify-between  px-24 py-4">
        <div>
          <p>2021© Dashboard UI </p>
        </div>
        <div>
          <button className="hover:text-blue-500 mr-2">About</button>
          <button className="hover:text-blue-500 mr-2">Team</button>
          <button className="hover:text-blue-500 mr-2">Contact</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
