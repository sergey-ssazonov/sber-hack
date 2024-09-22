"use client";

import { PracticeCard } from "@/src/features/practice/practiceCard";
import { useGetAllPracticeQuery } from "@/src/shared/api/practice/getPracticeApi";
import { IPractice, IPracticeCardProps } from "@/src/shared/interfaces/practice";
import { Flex, Spin } from "antd";
import React, { FC } from "react";

interface ListOfPracticeProps {
  practiceData: IPractice[] | undefined;
  isLoading: boolean;
}

const ListOfPractice: FC<ListOfPracticeProps> = ({ practiceData, isLoading }) => {
  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Flex wrap gap={5} className="w-full">
      {practiceData &&
        practiceData.map((practice) => <PracticeCard key={practice.id} {...practice} />)}
    </Flex>
  );
};

export default ListOfPractice;
