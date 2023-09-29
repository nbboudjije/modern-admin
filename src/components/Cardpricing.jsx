import React from "react";
import {  BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const Cardpricing = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex>
        <Text>Sales</Text>
        <BadgeDelta>30.4%</BadgeDelta>
      </Flex>
      <Metric>$ 17,297</Metric>
    </Card>
  );
};

export default Cardpricing;
