import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import { TextInput } from "@tremor/react";

const Header = () => {
  return (
    <div className=" relative w-full md:flex justify-between items-center p-2">
      <h1 className="text-gray-300 font-bold">Dashboard</h1>
      <div>
        <TextInput icon={SearchIcon} placeholder="Search..." fontSize={24} />
      </div>
    </div>
  );
};

export default Header;
