"use client";

import { useGetDirectionsQuery } from "@/src/shared/api/direction/getDirectionApi";
import { BackButton } from "@/src/shared/components/backButton";
import { Button, Flex, Form, Input, Select, Typography } from "antd";
import React, { FC } from "react";

const NewPracticePage: FC = () => {
  const { Title } = Typography;

  const { data: directions } = useGetDirectionsQuery();

  return (
    <Flex vertical gap={36} className="h-full">
      <BackButton />
      <Title level={4}>Форма создания новой практики</Title>

      <Form>
        <Form.Item label="Название">
          <Input placeholder="Название" />
        </Form.Item>
        <Form.Item label="Описание">
          <Input placeholder="Описание" />
        </Form.Item>
        <Form.Item label="Направление">
          <Select
            placeholder="Направление"
            options={directions?.map((el, index) => {
              return {
                value: el.id,
                label: el.name,
              };
            })}
          />
        </Form.Item>
        <Form.Item label="Требования к образованию">
          <Input placeholder="Образование" />
        </Form.Item>
        <Form.Item label="Требуемая специальность">
          <Input placeholder="Специальность" />
        </Form.Item>
        <Form.Item label="Условия отбора">
          <Input placeholder="Условия отбора" />
        </Form.Item>
        <Form.Item label="Количество мест">
          <Input placeholder="Количество мест" />
        </Form.Item>

        <Form.Item>
          <Button type="primary">Создать</Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default NewPracticePage;
