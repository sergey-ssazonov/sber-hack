"use client";

import { useGetDirectionsQuery } from "@/src/shared/api/direction/getDirectionApi";
import { Checkbox, Flex, Spin, Typography } from "antd";
import React, { FC } from "react";

const FilterWidget: FC = () => {
  const { Paragraph, Text, Title } = Typography;

  const { data: directionData, isLoading } = useGetDirectionsQuery();

  return (
    <div className="h-full w-72 rounded-3xl bg-white px-9 py-10">
      <Title level={4}>Фильтр</Title>
      <Text type="secondary">Направления</Text>

      {isLoading ? (
        <Spin />
      ) : (
        <Flex vertical gap={4} className="mt-4">
          {directionData?.map((el) => <Checkbox key={el.id}>{el.name}</Checkbox>)}
        </Flex>
      )}
    </div>
  );
};

export default FilterWidget;
