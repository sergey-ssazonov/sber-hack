"use client";

import { useCreateNewsMutation, useGetAllNewsQuery } from "@/src/shared/api/news/crudNewsApi";
import { useGetUserMeQuery } from "@/src/shared/api/user/getUserMeApi";
import { Button, Flex, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";

const { Title, Paragraph } = Typography;

const NewsPage: FC = () => {
  const router = useRouter();

  const { data: newsData } = useGetAllNewsQuery();

  const { data: userData } = useGetUserMeQuery();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [createNews] = useCreateNewsMutation();

  const handleCreateNews = () => {
    createNews({ title, description });
    setDescription("");
    setTitle("");
  };

  if (userData && userData.role === "company") {
    return (
      <Flex vertical gap={5} className="w-full">
        <Title level={5}>Пользователи ждут ваших новостей</Title>
        <Flex vertical gap={10} className="mb-8">
          <Input placeholder="Заголовок новости" onChange={(e) => setTitle(e.target.value)} />
          <Input
            placeholder="Содержание новости"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="primary" onClick={handleCreateNews}>
            Отправить
          </Button>
        </Flex>
        {newsData &&
          newsData.map((el, index) => (
            <Flex className="w-full rounded-3xl bg-white px-8 py-4" key={index} vertical gap={2}>
              <Title level={4}>{el.title}</Title>
              <Paragraph>{el.description}</Paragraph>
            </Flex>
          ))}
      </Flex>
    );
  } else {
    router.push("/practice");
  }
};

export default NewsPage;
