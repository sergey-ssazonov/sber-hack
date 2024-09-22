"use client"

import { useGetUserMeQuery } from "@/src/shared/api/user/getUserMeApi";
import { Flex, Typography } from "antd";
import Title from "antd/es/skeleton/Title";
import React from "react";

const ProfilePage = () => {
  const { Title } = Typography;

  const { data: userData } = useGetUserMeQuery();

  return (
    <Flex vertical gap={15} className="w-full">
      <Flex gap ={8} align="center">
        <Title level={4}>
          ФИО:
        </Title>
        <Title editable level={4}>
          {userData?.surname}
        </Title>
        <Title editable level={4}>
          {userData?.name}
        </Title>
        <Title editable level={4}>
          {userData?.lastname}
        </Title>
      </Flex>
      <Flex gap ={8} align="center">
        <Title level={4}>
          Образование:
        </Title>
        <Title editable level={4}>
          {userData?.university}
        </Title>
        <Title editable level={4}>
          {userData?.specialization}
        </Title>
        <Title editable level={4}>
          {userData?.course} курс
        </Title>
      </Flex>
      <Flex gap ={8} align="center">
        <Title level={4}>
          Контакты для связи:
        </Title>
        <Title editable level={4}>
          {userData?.email}
        </Title>
        <Title editable level={4}>
          {userData?.phone}
        </Title>
        
      </Flex>
    </Flex>
  );
};

export default ProfilePage;
