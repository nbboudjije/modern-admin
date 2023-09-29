import React from "react";
import {
  HomeIcon,
  ChartBarIcon,
  MailIcon,
  CreditCardIcon,
  BellIcon,
  DocumentAddIcon,
  ArrowUpIcon,
  ShoppingBagIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 h-screen w-14 md:w-20 flex-none">
      <div className="h-20 flex item-center">
        <HomeIcon width={40} className="text-gray-300 fixed left-3 sm:left-6" />
      </div>
      <div className="fixed left-3 sm:left-6 top-[100px]">
        <ChartBarIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
        <MailIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
        <CreditCardIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
        <BellIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
        <DocumentAddIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
      </div>
      <div className="fixed bottom-4 left-3 md:left-6">
        <ArrowUpIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
        <ShoppingBagIcon
          width={40}
          className="bg-gray-600 text-gray-300 rounded p-2 mb-4"
        />
      </div>
    </div>
  );
};

export default Sidebar;
