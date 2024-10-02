"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Flex className="h-12 w-full rounded-3xl bg-white px-7" align="center" justify="left">
      <Button type="text" onClick={() => router.back()} icon={<ArrowLeftOutlined />}>
        Назад
      </Button>
    </Flex>
  );
};

export default BackButton;
