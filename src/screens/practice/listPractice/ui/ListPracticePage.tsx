"use client";

import {
  useGetAllPracticeQuery,
  useLazyGetMyPracticeQuery,
} from "@/src/shared/api/practice/getPracticeApi";
import { useGetUserMeQuery } from "@/src/shared/api/user/getUserMeApi";
import { FilterWidget } from "@/src/widgets/practice/filter";
import ListOfPractice from "@/src/widgets/practice/listOfPractice/ui/ListOfPractice";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Tabs, TabsProps } from "antd";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

const ListPracticePage: FC = () => {
  const router = useRouter();
  const itemsForCompany: TabsProps["items"] = [
    {
      key: "my_practice",
      label: "Мои практики",
    },
    {
      key: "my_flow",
      label: "Мои заявки",
    },
    {
      key: "all_practice",
      label: "Все практики",
    },
  ];
  const itemsForStudent: TabsProps["items"] = [
    {
      key: "my_flow",
      label: "Мои заявки",
    },
    {
      key: "all_practice",
      label: "Все практики",
    },
  ];
  const [selectItemTabs, setSelectItemTabs] = useState<string>("all_practice");

  const [itemTabs, setItemTabs] = useState<TabsProps["items"]>();
  const { data: userData } = useGetUserMeQuery();

  const { data: practiceData, isLoading } = useGetAllPracticeQuery();

  const [trigger, { data: myPractice }] = useLazyGetMyPracticeQuery();

  useEffect(() => {
    if (userData !== undefined) {
      console.log("userdata", userData.role);
      trigger(userData.id);
      if (userData.role === "student") {
        console.log("swap to student");
        // setItemTabs(itemsForStudent);
      } else if (userData.role === "company") {
        console.log("swap to company");
        // setItemTabs(itemsForCompany);
      }
    }
  }, [userData, trigger]);

  //TODO Сделать на этой странице предварительный запрос на сервер для получения данных

  const TabsContent = () => {
    switch (selectItemTabs) {
      case "all_practice":
        return (
          <Flex gap={36} className="h-full" justify="space-between">
            <ListOfPractice practiceData={practiceData} isLoading={isLoading} />
            <FilterWidget />
          </Flex>
        );
      case "my_practice":
        return (
          <Flex gap={36} className="h-full" justify="space-between">
            <ListOfPractice practiceData={myPractice} isLoading={isLoading} />
          </Flex>
        );
    }
  };

  return (
    <Flex vertical gap={36} className="h-full">
      <Flex justify="space-between" align="center" className="rounded-3xl bg-white px-10">
        <Tabs
          defaultActiveKey="1"
          items={itemsForCompany}
          onChange={(key) => setSelectItemTabs(key)}
        />
        {userData && userData.role === "company" && (
          <Button
            type="text"
            icon={<PlusOutlined />}
            onClick={() => {
              router.prefetch("/practice/new");
              router.push("/practice/new");
            }}
          >
            Новая практика
          </Button>
        )}
      </Flex>
      <TabsContent />
    </Flex>
  );
};

export default ListPracticePage;
