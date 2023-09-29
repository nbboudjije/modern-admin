import React, { useState } from "react";
import {
  BadgeDelta,
  Button,
  Card,
  DonutChart,
  Flex,
  TabGroup,
  Tab,
  TabList,
  Bold,
  Divider,
  List,
  ListItem,
  Metric,
  Text,
  Title,
} from "@tremor/react";
import {
  ArrowRightIcon,
  ChartPieIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const Overview = () => {
  const [changeIndex, setChangeIndex] = useState(false);

  const change = () => {
    setChangeIndex(!changeIndex);
  };
  return (
    <div>
      <Card className="max-w-full mx-auto">
        <Flex className="space-x-8 flex-col lg:flex-row">
          <Title>Overview</Title>
          <TabGroup>
            <TabList>
              <Tab onClick={change} icon={ChartPieIcon}>
                Chart
              </Tab>
              <Tab onClick={change} icon={ViewListIcon}>
                List
              </Tab>
            </TabList>
          </TabGroup>
        </Flex>
        <div className="my-2">
          <Text>Today Revenue</Text>
          <Metric>$87,782</Metric>
        </div>
        <Divider></Divider>
        <div className="">
          {changeIndex ? (
            <Card className="w-full">
              <Title>Tremor's Hometowns</Title>
              <List>
                {stocks.map((item) => (
                  <ListItem>
                    <span>{item.name}</span>
                    <span>{item.performance}</span>
                  </ListItem>
                ))}
              </List>
            </Card>
          ) : (
            <Card className="max-w-lg">
              <Title>Sales</Title>
              <DonutChart
                className="mt-6"
                data={stocks}
                category="value"
                index="name"
                valueFormatter={dataFormatter}
                colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
              />
            </Card>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Overview;
