import React from "react";
import { Card, Title, LineChart } from "@tremor/react";

const chartdata = [
  {
    year: 2019,
    "Expences R": 3.04,
    "Profit ROI": 2.53,
  },
  {
    year: 2020,
    "Expences R": 5.96,
    "Profit ROI": 1.58,
  },
  {
    year: 2021,
    "Expences R": 10.96,
    "Profit ROI": 12.61,
  },
  {
    year: 2022,
    "Expences R": 13.93,
    "Profit ROI": 15.61,
  },
  {
    year: 2023,
    "Expences R": 18.88,
    "Profit ROI": 20.67,
  },
];

const Linechart = () => {
  return (
    <Card>
      <Title>Expences/Profit Growth ROI (2019 - 2023)</Title>
      <LineChart
        className="mt-6"
        data={chartdata}
        index="year"
        categories={["Expences R", "Profit ROI"]}
        colors={["emerald", "gray"]}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default Linechart;
