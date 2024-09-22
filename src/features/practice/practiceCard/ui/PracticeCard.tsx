"use client";

import { BASE_API_URL } from "@/src/shared/constants";
import { IPractice, IPracticeCardProps } from "@/src/shared/interfaces/practice";
import { LockOutlined, UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const PracticeCard: FC<IPractice> = (practice) => {
  const router = useRouter();
  const { Paragraph, Text, Title } = Typography;
  return (
    <div
      onClick={() => router.push(`/practice/${practice.id}`)}
      className="w-0.48 h-fit rounded-3xl bg-white p-6"
    >
      <Flex justify="space-between">
        <div className="">
          <Title className="mb-9" level={5}>
            {practice.name}
          </Title>
          <Text type="secondary">{practice.direction.name}</Text>
          {/* <Paragraph >{practice.description}</Paragraph> */}
        </div>
        {/* <Avatar
          size={50}
          src={
            // <Image
            //   src={`${BASE_API_URL}users/${id}/avatars/source`}
            //   alt="avatar"
            //   width={50}
            //   height={50}
            // />
            `${BASE_API_URL}users/${id}/avatars/source`
          }
        /> */}

        {practice.id !== undefined ? (
          <Avatar
            size={50}
            src={`${BASE_API_URL}companies/${practice.company.id}/avatars/source`}
          />
        ) : (
          <Avatar size={78}>{practice.company.name}</Avatar>
        )}
      </Flex>
      {/* <Flex align="end" className="w-full"> */}
        <Flex vertical gap={2}>
          <Title level={5}>
            <UserOutlined /> {practice.vacanciesCount}{" "}
          </Title>
          <Title level={5}>{practice.studyCondition}</Title>
          {practice.isOpened ? (
            <Title level={5}>
              <UnlockOutlined /> Набор открыт
            </Title>
          ) : (
            <Title level={5}>
              <LockOutlined /> Набор закрыт
            </Title>
          )}
        </Flex>
      {/* </Flex> */}
    </div>
  );
};

export default PracticeCard;
