import React, { Fragment } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/outline";
import { QrcodeIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { TemplateIcon } from "@heroicons/react/outline";
import {
  XIcon,
  MenuIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import Header from "./Header";

const NavBarItemLeft = [
  {
    href: "#",
    icon: SearchIcon,
  },
  {
    href: "#",
    icon: BellIcon,
  },
  {
    href: "#",
    icon: QrcodeIcon,
  },
  {
    href: "#",
    icon: ShoppingCartIcon,
  },
  {
    href: "#",
    icon: TemplateIcon,
  },
];
const NavBarItemRight = [
  {
    key: "01",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    name: "Dashboard",
    icon: ChartBarIcon,
  },
  {
    key: "02",
    href: "/features",
    name: "Features",
    icon: CursorClickIcon,
  },
  {
    key: "03",
    href: "/crud",
    name: "Crud",
    icon: ShieldCheckIcon,
  },
  {
    key: "04",
    href: "/apps",
    name: "Apps",
    icon: ViewGridIcon,
  },
  {
    key: "05",
    href: "/pages",
    name: "Pages",
    icon: RefreshIcon,
  },
];

const Navbar = () => {
  return (
    <Popover>
      {/* Section NabBar Web */}
      <div
        className="flex flex-col  bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url(./bg-10.jpg)" }}
      >
        <div className=" border-b-2 border-gray-100 border-opacity-25 ">
          <div className="container flex justify-between flex-row py-4 ">
            <div className=" flex items-center content-center space-x-1 ">
              <img
                className="h-12 w-12 sm:h-12 "
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />

              <div className="hidden md:flex">
                {NavBarItemRight.map((row) => (
                  <a
                    key={row.key}
                    href={row.href}
                    className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {row.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center content-center space-x-1 ">
              {NavBarItemLeft.map((row) => (
                <a
                  type="button"
                  className="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white "
                  href={row.href}
                >
                  <row.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}

              <button class="text-white hover:bg-blue-300  hover:text-white  hover:bg-opacity-20 flex-shrink-0 p-2 rounded-md  focus:ring-white inline-flex ">
                <img
                  className="h-6 w-8   "
                  src="./024-boy-9.svg"
                  alt="Workflow"
                />
                <span>Mr Son</span>
              </button>
            </div>
            <div className="mr-4 my-4 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>
        {/* Section NavBar Open Menu Mobile */}
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {NavBarItemRight.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>

        {/* Section Header */}
        <Header />
      </div>
    </Popover>
  );
};
export default Navbar;
