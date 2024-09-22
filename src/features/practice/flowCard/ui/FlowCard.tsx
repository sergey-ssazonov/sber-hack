import { useAcceptFlowMutation, useCanelFlowMutation } from "@/src/shared/api/practice/flowApi";
import { IFlow } from "@/src/shared/interfaces/practice";
import { CheckOutlined, CloseOutlined, DownloadOutlined, FileOutlined } from "@ant-design/icons";
import { Button, Flex, Modal, Typography } from "antd";
import React, { FC, useState } from "react";

// type Props = {}

const FlowCard: FC<IFlow> = ({ id, status, comment, test, user, practice }) => {
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
  const { Text } = Typography;

  const [acceptFlow] = useAcceptFlowMutation();
  const [cencelFlow] = useCanelFlowMutation();

  const handleAcceptFlow = () => {
    acceptFlow(id);
  };
  const handleCancelFlow = () => {
    cencelFlow(id);
  };

  const StatusTextFlow = () => {
    switch (status) {
      case "Accepted":
        return <Text type="success">Одобрено</Text>;
      case "Canceled":
        return <Text type="warning">Отклонено</Text>;
      case "Created":
        return (
          <Flex gap={12}>
            <Button onClick={handleAcceptFlow} type="primary" icon={<CheckOutlined />}></Button>
            <Button onClick={handleCancelFlow} type="default" danger icon={<CloseOutlined />} />
          </Flex>
        );
    }
  };
  const StatusFlowInModal = () => {
    switch (status) {
      case "Accepted":
        return <Text type="success">Одобрено</Text>;
      case "Canceled":
        return <Text type="warning">Отклонено</Text>;
      case "Created":
        return [
          <Button key="cancel" type="primary" danger onClick={handleCancel}>
            Отклонить
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            Принять
          </Button>,
        ]
    }
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      className="rounded-2xl border-1 border-primary px-10 py-2"
    >
      <Modal
        title={user.surname + " " + user.name + " " + user.lastname}
        open={isModalFlowOpen}
        onOk={handleOk}
        footer={
          [<Text key="ok" type="success">Одобрено</Text>]
        }
        onCancel={handleCancel}
        centered
        style={{ textAlign: "center" }}
        className="rounded-3xl"
      >
        <Flex vertical gap={20} className="m-5">
          <Flex gap={4}>
            <Text type="secondary">Образование: </Text>
            <Text>
              {user.university}, {user.specialization}, {user.course} курс
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
            {/* <Text className="border-1 rounded-2xl border-primary px-10 py-4">{comment}</Text> */}
            <Text>{comment}</Text>
          </Flex>

          <Flex align="center">
            <Text type="secondary">Контактные данные: </Text>
            <Button type="link">{user.email}</Button>
          </Flex>
        </Flex>
      </Modal>
      <Text>
        {user.surname} {user.name} {user.lastname}
      </Text>
      <Button type="text" onClick={showModal}>
        Подробнее...
      </Button>
      <StatusTextFlow />
    </Flex>
  );
};

export default FlowCard;
