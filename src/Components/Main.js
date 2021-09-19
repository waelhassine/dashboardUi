import React from "react";
import { SparklesIcon } from "@heroicons/react/outline";
import { UsersIcon } from "@heroicons/react/outline";
import StockChart from "./StockChart";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { CalendarIcon } from "@heroicons/react/outline";
import { BriefcaseIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/outline";
import StockChartTwo from "./StockChartTwo";
import Table from "./Table";

const Main = () => {
  return (
    <div>
      <div className="container -mt-24">
        <div className="grid  lg:grid-cols-6 lg:grid-rows-3 gap-5 ">
          <div className="col-span-2 lg:row-span-3 pt-12 bg-white rounded-lg shadow-2xl">
            <div className="flex flex-col content-between">
              <div>
                <div className="flex flex-row justify-between">
                  <div>
                    <h1 className="text-xl text-left px-8 font-bold text-gray-700">
                      Weekly Sales Stats
                    </h1>
                    <h1 className="text-lg text-left px-8 font-meduim text-gray-400">
                      890,344 Sales
                    </h1>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="bg-grey-800 pr-6  rounded-full text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
                    >
                      <DotsHorizontalIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="flex flex-row justify-evenly content-center  items-center">
                      <div>
                        <img
                          className="h-8 w-8"
                          src="./006-plurk.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div>
                        <h1 className="text-meduim text-left  font-bold text-gray-700">
                          Bestsellers
                        </h1>
                        <h1 className="text-light text-left font-light text-gray-400">
                          Ricky Hunt, Sandra Trepp
                        </h1>
                      </div>
                      <div>
                        <p className="text-light  font-light text-gray-800  rounded-lg bg-gray-200 w-12 h-6">
                          +243
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row justify-evenly content-center  items-center">
                      <div>
                        <img
                          className="h-8 w-8"
                          src="./015-telegram.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div>
                        <h1 className="text-meduim text-left  font-bold text-gray-700">
                          Top Engagement
                        </h1>
                        <h1 className="text-light text-left font-light text-gray-400">
                          Ricky Hunt, Sandra Trepp
                        </h1>
                      </div>
                      <div>
                        <p className="text-light  font-light text-gray-800  rounded-lg bg-gray-200 w-12 h-6">
                          +243
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row justify-evenly content-center  items-center">
                      <div>
                        <img
                          className="h-8 w-8"
                          src="./003-puzzle.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div>
                        <h1 className="text-meduim text-left  font-bold text-gray-700">
                          Top Authors
                        </h1>
                        <h1 className="text-light text-left font-light text-gray-400">
                          Ricky Hunt, Sandra Trepp
                        </h1>
                      </div>
                      <div>
                        <p className="text-light  font-light text-gray-800  rounded-lg bg-gray-200 w-12 h-6">
                          +243
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <StockChart />
              </div>
            </div>
          </div>
          <div
            className="col-span-1 row-span-1 h-40   rounded-lg bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{ backgroundImage: "url(./bg-9.jpg)" }}
          >
            <button className="text-xl font-bold text-gray-700 pt-8 hover:text-blue-600">
              Properties
            </button>
          </div>
          <div className="lg:col-span-3 row-span-1 rounded-lg pt-12 px-8 bg-white shadow-2xl">
            <div className="flex flex-row  justify-between  ">
              <div>
                <h1 className="text-xl text-left font-bold text-gray-700">
                  Create CRM Reports
                </h1>
                <h1 className="text-lg text-left font-meduim text-gray-700">
                  Generate the latest CRM Report
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-500 hover:bg-blue-300  hover:text-white   px-5 py-3 rounded-md text-sm font-medium"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-span-2 row-span-1 pt-8 px-8 rounded-lg bg-pink-900 bg-cover bg-center bg-no-repeat shadow-2xl"
            style={{ backgroundImage: "url(./taieri.svg)" }}
          >
            <div className="flex flex-col items-start">
              <h1 className="text-2xl text-left font-bold text-white">
                Create SaaS
              </h1>
              <h1 className="text-xl text-left font-meduim text-white">
                Based Reports
              </h1>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-300  hover:text-white px-6  py-3 rounded-md text-sm font-medium"
              >
                Start Now
              </button>
            </div>
          </div>
          <div
            className="col-span-2 row-span-2 pt-8 px-8 rounded-lg bg-blue-300  bg-center bg-no-repeat shadow-2xl"
            style={{ backgroundImage: "url(./img-16.jpg)" }}
          >
            <div className="flex flex-col items-start">
              <h1 className="text-xl text-left font-meduim text-white">
                Create Reports
              </h1>
              <h1 className="text-xl text-left font-meduim text-white">
                With App
              </h1>
              <button
                type="button"
                className=" mt-36  text-yellow-400  hover:text-white  rounded-md text-sm font-medium"
              >
                Create App &gt;
              </button>
            </div>
          </div>
          <div className="col-span-1 row-span-1 rounded-lg bg-blue-400 shadow-2xl">
            <div className="flex flex-col px-8 pt-8 ">
              <SparklesIcon className="text-white h-8 w-8" aria-hidden="true" />
              <h1 className="text-2xl text-left font-bold text-white">642</h1>
              <h1 className="text-lg text-left font-meduim text-white">
                New&nbsp;Products
              </h1>
            </div>
          </div>
          <div className="col-span-1 row-span-1 rounded-lg bg-white shadow-2xl">
            <div className="flex flex-col px-8 pt-8 ">
              <UsersIcon className="text-gray-900 h-8 w-8" aria-hidden="true" />
              <h1 className="text-2xl text-left font-bold text-gray-900">
                1236
              </h1>
              <h1 className="text-lg text-left font-meduim text-gray-600">
                New&nbsp;Customers
              </h1>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-1  gap-5  ">
          <Table />
        </div>
        <div clas="flex flex-col ">
          <div>
            <div className="grid  lg:grid-cols-3  gap-5">
              <div className="col-span-1  bg-white h-128 place-items-end  p-8  rounded-lg shadow-2xl">
                <div className=" flex flex-col justify-end">
                  <div>
                    <div className="flex flex-row justify-between items-center ">
                      <div>
                        <h1 className="text-md text-left  font-meduim  text-gray-400">
                          7 Hours Ago
                        </h1>
                      </div>
                      <div>
                        <img
                          className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                          src="./006-plurk.svg"
                          alt="Workflow"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg  font-bold text-left pt-8 text-gray-800  ">
                      Craft - ReactJS Admin Theme
                    </p>
                  </div>
                  <div>
                    <p className=" text-light text-left pt-5">
                      Pitstop creates quick email campaigns. We help to
                      strengthen your brand for your every purpose.
                    </p>
                  </div>
                  <div className="flex flex-row pt-12 gap-3 ">
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./001-boy.svg"
                      alt="Workflow"
                    />
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./028-girl-16.svg"
                      alt="Workflow"
                    />
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./024-boy-9.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-white  p-8  rounded-lg shadow-2xl">
                <div className="flex flex-col ">
                  <div>
                    <div className="flex flex-row justify-between items-center ">
                      <div>
                        <h1 className="text-md text-left  font-meduim  text-gray-400">
                          2 Days Ago
                        </h1>
                      </div>
                      <div>
                        <img
                          className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                          src="./015-telegram.svg"
                          alt="Workflow"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg  font-bold text-left pt-8 text-gray-800  ">
                      KT.com - High Quality Templates
                    </p>
                  </div>
                  <div>
                    <p className=" text-light text-left pt-5">
                      Pitstop creates quick email campaigns. We help to
                      strengthen your brand for your every purpose.
                    </p>
                  </div>
                  <div className="flex flex-row pt-12 gap-3 ">
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./001-boy.svg"
                      alt="Workflow"
                    />
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./028-girl-16.svg"
                      alt="Workflow"
                    />
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./024-boy-9.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-white  p-8  rounded-lg shadow-2xl">
                <div className="flex flex-col ">
                  <div>
                    <div className="flex flex-row justify-between items-center ">
                      <div>
                        <h1 className="text-md text-left  font-meduim  text-gray-400">
                          5 Weeks Ago
                        </h1>
                      </div>
                      <div>
                        <img
                          className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                          src="./003-puzzle.svg"
                          alt="Workflow"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg  font-bold text-left pt-8 text-gray-800  ">
                      PitStop - Multiple Email Generator
                    </p>
                  </div>
                  <div>
                    <p className=" text-light text-left pt-5">
                      Craft uses the latest and greatest frameworks with ReactJS
                      for complete modernization and future proofing your
                      business operations and sales opportunities
                    </p>
                  </div>
                  <div className="flex flex-row  pt-12 gap-3 ">
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./001-boy.svg"
                      alt="Workflow"
                    />
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./028-girl-16.svg"
                      alt="Workflow"
                    />
                    <img
                      className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                      src="./024-boy-9.svg"
                      alt="Workflow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid  lg:grid-cols-2  gap-5  mt-6">
              <div className="col-span-1  bg-white h-128 place-items-end  p-8  rounded-lg shadow-2xl">
                <div className="flex flex-col ">
                  <div>
                    <div className="flex flex-row justify-between items-center ">
                      <div>
                        <h1 className="text-md text-left  font-bold text-xl text-gray-900">
                          Notifications
                        </h1>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="bg-grey-800 pr-6  rounded-full text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <DotsHorizontalIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row justify-between  mt-12  rounded-lg bg-blue-100 p-4">
                      <div className="flex flex-row">
                        <div>
                          <CalendarIcon
                            className="h-6 w-6 mr-4 text-blue-500 "
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-left  font-bold text-base text-gray-900">
                            Home navigation optimization
                          </p>
                          <p className="text-sm text-left  font-meduim  text-gray-900">
                            Due in 2 Days
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-light  font-bold text-blue-500 rounded-lg  w-12 h-6">
                          +23%
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-2  rounded-lg bg-yellow-100 p-4">
                      <div className="flex flex-row">
                        <div>
                          <BriefcaseIcon
                            className="h-6 w-6 mr-4 text-yellow-500 "
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-left  font-bold text-base text-gray-900">
                            Group lunch celebration
                          </p>
                          <p className="text-sm text-left  font-meduim  text-gray-900">
                            Due in 2 Days
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-light  font-bold text-yellow-500 rounded-lg  w-12 h-6">
                          +23%
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-2  rounded-lg bg-red-100 p-4">
                      <div className="flex flex-row">
                        <div>
                          <CalendarIcon
                            className="h-6 w-6 mr-4 text-red-500 "
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-left  font-bold text-base text-gray-900">
                            Rebrand strategy planning
                          </p>
                          <p className="text-sm text-left  font-meduim  text-gray-900">
                            Due in 2 Days
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-light  font-bold text-red-500 rounded-lg  w-12 h-6">
                          +23%
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center mt-2  rounded-lg bg-green-100 p-4">
                      <div className="flex flex-row">
                        <div>
                          <BellIcon
                            className="h-6 w-6 mr-4 text-green-500 "
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-left  font-bold text-base text-gray-900">
                            Product goals strategy meet-up
                          </p>
                          <p className="text-sm text-left  font-meduim  text-gray-900">
                            Due in 2 Days
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-light  font-bold text-green-500 rounded-lg  w-12 h-6">
                          +23%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1  bg-white h-128 place-items-end    rounded-xl shadow-2xl">
                <div className="flex justify-center flex-col  ">
                  <div>
                    <div className="flex flex-row justify-between items-center  p-8 bg-gradient-to-r from-green-400 to-blue-500">
                      <div>
                        <h1 className="text-md text-left  font-bold text-xl text-white ">
                          Sales Progress
                        </h1>
                      </div>
                      <div>
                        <button
                          type="button"
                          className=" pr-6  rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <DotsHorizontalIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-blue-500">
                    <StockChartTwo />
                  </div>
                  <div className="pt-6">
                    <div class="grid grid-cols-2 grid-rows-2  place-items-center gap-5 ">
                      <div className="text-left">
                        <p className="text-base font-normal text-gray-500">
                          Average Sale
                        </p>
                        <p className="text-lg font-bold">$650</p>
                      </div>
                      <div className="text-left">
                        <p className="text-base font-normal text-gray-500">
                          Commission
                        </p>
                        <p className="text-lg font-bold">$233,600</p>
                      </div>
                      <div className="text-left">
                        <p className="text-base font-normal text-gray-500">
                          Annual Taxes
                        </p>
                        <p className="text-lg font-bold">$29,004</p>
                      </div>
                      <div className="text-left">
                        <p className="text-base font-normal text-gray-500">
                          Annual Income
                        </p>
                        <p className="text-lg font-bold">$1,480,00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
