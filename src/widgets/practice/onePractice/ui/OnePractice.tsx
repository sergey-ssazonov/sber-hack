"use client";

import Company from "@/app/(service)/company/page";
import { FlowCard } from "@/src/features/practice/flowCard";
import { useGetFlowsByPracticeQuery } from "@/src/shared/api/practice/flowApi";
import { useGetUserMeQuery } from "@/src/shared/api/user/getUserMeApi";
import { BASE_API_URL } from "@/src/shared/constants";
import { IPractice } from "@/src/shared/interfaces/practice";
import { DownloadOutlined, FileOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, message, Modal, Typography } from "antd";
import Search from "antd/es/transfer/search";
import React, { FC, useState } from "react";

const OnePractice: FC<IPractice> = ({
  id,
  name,
  description,
  direction,
  selectionConditions,
  studyCondition,
  vacanciesCount,
  company,
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalFlowOpen, setIsModalFlowOpen] = useState(false);

  const showModal = () => {
    setIsModalFlowOpen(true);
  };

  const handleOk = () => {
    setIsModalFlowOpen(false);
  };

  const handleCancel = () => {
    setIsModalFlowOpen(false);
  };
  const { Paragraph, Text, Title } = Typography;

  const { data: flowsData } = useGetFlowsByPracticeQuery(id);

  const { data: userData } = useGetUserMeQuery();

  const handleCreateFlow = () => {};

  console.log("flowsData", flowsData);

  const successMassage = () => {
    messageApi.open({
      type: "success",
      content: "Вы авторизованны",
    });
  };

  return (
    <div>
      {contextHolder}

      <Flex className="w-full rounded-3xl bg-white p-4">
        <Flex className="top--1/2 mx-7" vertical gap={10} align="center">
          {id !== undefined ? (
            <Avatar size={80} src={`${BASE_API_URL}companies/${company.id}/avatars/source`} />
          ) : (
            <Avatar size={80}>{company.name}</Avatar>
          )}

          <Text type="secondary">{company.name}</Text>
        </Flex>
        <Flex vertical gap={12}>
          <Title level={2}>{name}</Title>
          <Text type="secondary">{direction.name}</Text>
          <Text>{company.address}</Text>
        </Flex>
      </Flex>
      <Flex vertical className="mt-6 px-12">
        <Title level={4}>О практике</Title>
        <Paragraph>{description}</Paragraph>
        <Title level={4}>Условия Отбора</Title>
        <Paragraph>{selectionConditions}</Paragraph>
        <Title level={4}></Title>
        <Text>Необходимое образование: {studyCondition}</Text>
        <Text>Количество мест {vacanciesCount}</Text>

        {userData && userData.role === "company" && (
          <>
            <Title level={4}>Заявки на практику</Title>
            <div className="w-1/2 py-4">
              <Search placeholder="Поиск" />
            </div>
            <Flex vertical gap={5} className="w-1/2">
              {flowsData && flowsData.map((flow, index) => <FlowCard key={index} {...flow} />)}
            </Flex>
          </>
        )}
        {userData && userData.role === "student" && (
          <Button type="primary" onClick={handleCreateFlow}>
            Подать заявку
          </Button>
        )}

        {/* {userData && (
          <Modal
            title={userData.surname + " " + userData.name + " " + userData.lastname}
            open={isModalFlowOpen}
            onOk={handleOk}
            footer={[
              <Button key="cancel" onClick={handleCancel}>
                Отменить
              </Button>,
              <Button key="ok" type="primary" onClick={handleOk}>
                Подать завку
              </Button>,
            ]}
            onCancel={handleCancel}
            centered
            style={{ textAlign: "center" }}
            className="rounded-3xl"
          >
            <Flex vertical gap={20} className="m-5">
              <Flex gap={4}>
                <Text type="secondary">Образование: </Text>
                <Text>
                  {userData.university}, {userData.specialization}, {userData.course} курс
                </Text>
              </Flex>

              <Flex vertical align="start" gap={4}>
                <Text type="secondary">Резюме</Text>
                <Flex align="center">
                  <FileOutlined style={{ color: "#47AB4B", fontSize: "62px" }} />
                  <Button icon={<DownloadOutlined />} />
                </Flex>
              </Flex>
              <Flex align="center">
                <Text type="secondary">Тестовое:</Text>
                <Button type="link">{test}</Button>
              </Flex>
              <Flex vertical align="start" gap={4}>
                <Text type="secondary">Комментарий:</Text>
                <Text className="border-1 rounded-2xl border-primary px-10 py-4">{comment}</Text>

                <Text>{comment}</Text>
              </Flex>

              <Flex align="center">
                <Text type="secondary">Контактные данные: </Text>
                <Button type="link">{user.email}</Button>
              </Flex>
            </Flex>
          </Modal>
        )} */}
      </Flex>
    </div>
  );
};

export default OnePractice;
