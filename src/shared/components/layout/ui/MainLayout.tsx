"use client";

import {
  AreaChartOutlined,
  BankOutlined,
  BulbOutlined,
  CalendarOutlined,
  DatabaseOutlined,
  FileWordOutlined,
  LogoutOutlined,
  MessageOutlined,
  RobotOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, Modal } from "antd";
import Sider from "antd/es/layout/Sider";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Content } from "antd/es/layout/layout";
// import { useLogoutUserMutation } from "@/src/shared/api/user/userApi";

import logo_practice from "../../../assets/logo-practice.svg";
import { ProfileCard } from "@/src/features/user/profileCard";
import { useGetUserMeQuery } from "@/src/shared/api/user/getUserMeApi";
import { useLazyGetCompanyByIdQuery } from "@/src/shared/api/company/getCompanyApi";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { data: userData, isLoading } = useGetUserMeQuery();

  const [trigger, { data: companyData }] = useLazyGetCompanyByIdQuery();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (userData?.company?.id !== undefined) {
      trigger(userData.company.id);
    }
  }, [userData]);

  // const [logout] = useLogoutUserMutation()

  const showModalSign = () => {
    setIsModalOpen(true);
  };

  const handleOkSignOut = () => {
    setIsModalOpen(false);
  };

  const handleCancelSignOut = () => {
    // logout()
    signOut({ callbackUrl: "/login" });
    setIsModalOpen(false);
  };

  const session = useSession();
  // console.log("sess", session);

  const items = [
    {
      key: "news",
      icon: <CalendarOutlined />,
      label: `Новости`,
      onClick: () => {
        router.prefetch("/news");
        router.push("/news");
      },
    },
    {
      key: "practice",
      icon: <DatabaseOutlined />,
      label: `Практики`,
      onClick: () => {
        router.prefetch("/practice");
        router.push("/practice");
      },
    },

    {
      key: "company",
      icon: <BankOutlined />,
      label: `Предприятия`,
      onClick: () => {
        router.prefetch("/practice");
        router.push("/practice");
      },
    },
    {
      key: "analitics",
      icon: <AreaChartOutlined />,
      label: `Аналитика`,
      onClick: () => {
        router.prefetch("/analitics");
        router.push("/analitics");
      },
    },
    {
      key: "current",
      icon: <BulbOutlined />,
      label: `Моя практика`,
      onClick: () => {
        router.prefetch("/practice/current");
        router.push("/practice/current");
      },
    },
    {
      key: "profile",
      icon: <UserOutlined />,
      label: `Профиль`,
      onClick: () => {
        router.prefetch("/profile");
        router.push("/profile");
      },
    },
  ];

  if (session.status === "unauthenticated") {
    return <main className="flex h-full w-full items-center justify-center">{children}</main>;
  } else {
    return (
      <Layout className="flex h-full w-full items-center justify-center overflow-hidden">
        <Sider
          width={234}
          className="flex h-full flex-col justify-between"
          breakpoint="lg"
          // collapsedWidth="0"
          theme="light"
          collapsed={false}
        >
          <Flex className="h-full" vertical justify="space-between">
            <Flex vertical align="center">
              <Image
                src={logo_practice.src}
                alt="Sgedevro.Практики"
                width={180}
                height={0}
                onClick={() => router.push("/practice")}
                className="my-10"
              />
              <Menu mode="inline" className="mt-5 h-full" items={items} />
            </Flex>
            <Flex vertical gap={15}>
              <Button
                size="large"
                shape="circle"
                className="ml-6"
                icon={<LogoutOutlined color="#47AB4B" />}
                onClick={showModalSign}
              />

              <Flex vertical gap={8}>
                <ProfileCard
                  name={userData?.name}
                  id={userData?.id}
                  surname={userData?.surname}
                  isLoading={isLoading}
                />
                {userData && companyData && userData.role === "company" && (
                  <ProfileCard
                    role="company"
                    name={companyData.name}
                    id={companyData?.id}
                    surname=""
                    isLoading={isLoading}
                  />
                )}
              </Flex>
            </Flex>
          </Flex>
        </Sider>
        <Layout className="h-full w-full bg-slate-100 p-9">{children}</Layout>
        <Modal
          title="Выход"
          cancelText={"Выйти"}
          okText={"Остаться"}
          open={isModalOpen}
          onOk={handleOkSignOut}
          onCancel={handleCancelSignOut}
        >
          Вы уверены, что хотите выйти?
        </Modal>
      </Layout>
    );
  }
}
