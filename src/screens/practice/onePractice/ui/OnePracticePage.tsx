"use client";

import { useGetPracticeByIdQuery } from "@/src/shared/api/practice/getPracticeApi";
import { BackButton } from "@/src/shared/components/backButton";
import { OnePractice } from "@/src/widgets/practice/onePractice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type OnePracticePageProps = {
  id: number;
};

const OnePracticePage: FC<OnePracticePageProps> = ({ id }) => {
  const router = useRouter();
  const { data: practice } = useGetPracticeByIdQuery(id);

  console.log("practice", practice);

  return (
    <Flex vertical gap={36} className="h-full">
      <BackButton/>
      {practice && <OnePractice {...practice}/>}
    </Flex>
  );
};

export default OnePracticePage;
