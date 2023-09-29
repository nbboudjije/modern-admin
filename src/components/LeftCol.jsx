import React from "react";
import Cardpricing from "./Cardpricing";
import Linechart from "./Linechart";
import Tabledata from "./Tabledata";

const LeftCol = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
      <div className="w-full flex flex-col lg:flex-row gap-2">
        <Cardpricing />
        <Cardpricing />
        <Cardpricing />
      </div>
      <div className="mt-3 w-full">
        <Linechart />
      </div>
      <div className="mt-3 w-full">
        <Tabledata />
      </div>
    </div>
  );
};

export default LeftCol;
