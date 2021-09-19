import React from "react";

import { QrcodeIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { TemplateIcon } from "@heroicons/react/outline";
import { UserAddIcon } from "@heroicons/react/outline";
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];
const Table = () => {
  return (
    <div className="mt-6 mb-6 bg-white rounded-lg shadow-2xl">
      <div className="flex flex-col p-8">
        <div>
          <div className="flex flex-row justify-between items-center ">
            <div>
              <h1 className="text-md text-left  font-bold text-xl text-gray-900">
                Agents Stats
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex text-white bg-green-500 hover:bg-green-400  hover:text-gray   flex-shrink-0 p-2  rounded-md  focus:ring-white "
              >
                <span className="sr-only">View notifications</span>
                <UserAddIcon className="h-6 w-6" aria-hidden="true" />
                Add New Member
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-4">
              <div className=" overflow-hidden   ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-meduim font-medium text-gray-400 uppercase tracking-wider"
                      >
                        AUTHORS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-meduim font-medium text-gray-400 uppercase tracking-wider"
                      >
                        COMPANY
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-meduim font-medium text-gray-400 uppercase tracking-wider"
                      >
                        PROGRESS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-meduim font-medium text-gray-400 uppercase tracking-wider"
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-12 w-12 p-2 rounded-lg bg-gray-200"
                                src="./001-boy.svg"
                                alt="Workflow"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-bold text-gray-900">
                                Intertico
                              </div>
                              <div className="text-sm text-gray-500">
                                Web, UI/UX Design
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-bold text-gray-900">
                            {person.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                  Task in progress
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-blue-600">
                                  30%
                                </span>
                              </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                              <div
                                style={{ width: "30%" }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            type="button"
                            className="text-blue-500 mr-2 bg-gray-300 hover:bg-blue-300  hover:text-white   flex-shrink-0 p-2 rounded-md  focus:ring-white "
                          >
                            <span className="sr-only">View notifications</span>
                            <QrcodeIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 mr-2 bg-gray-300 hover:bg-blue-300  hover:text-white   flex-shrink-0 p-2 rounded-md  focus:ring-white "
                          >
                            <span className="sr-only">View notifications</span>
                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                          <button
                            type="button"
                            className="text-blue-500 bg-gray-300 hover:bg-blue-300  hover:text-white   flex-shrink-0 p-2 rounded-md  focus:ring-white "
                          >
                            <span className="sr-only">View notifications</span>
                            <TemplateIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
