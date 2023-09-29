import React from "react";
import Datefilter from "./Datefilter";
import { Card, Metric, Text, CategoryBar, Legend } from "@tremor/react";
import Overview from "./Overview";
import WebAnalytic from "./WebAnalytic";

const RightCol = () => {
  return (
    <div className="flex flex-col w-full p-2">
      <Datefilter />

      <div className="my-2">
        <Card className="w-md ">
          <Text>Total Users</Text>
          <Metric>10,483</Metric>
          <CategoryBar
            className="mt-4"
            values={[6724, 3621]}
            colors={["emerald", "red"]}
          />
          <Legend
            className="mt-3"
            categories={["Active users", "Inactive users"]}
            colors={["emerald", "red"]}
          />
        </Card>
      </div>

      <Overview />
      <div className="my-2 hover:scale-100">
        <WebAnalytic />
      </div>
    </div>
  );
};

export default RightCol;
