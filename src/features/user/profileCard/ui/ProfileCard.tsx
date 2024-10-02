import { IUser } from "@/src/shared/interfaces/user";
import { Avatar, Flex, Spin, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import SkelethonProfileCard from "./SkelethonProfileCard";
import { BASE_API_URL } from "@/src/shared/constants";
import { UserOutlined } from "@ant-design/icons";

// type TProfileCardProps = Pick<TUser, "name" | "surname"> ;
interface IProfileCardProps {
  name: string | undefined;
  surname: string | undefined;
  id: number | undefined;
  isLoading: boolean;
  role?: "company" | "student";
}

const ProfileCard: FC<IProfileCardProps> = ({ id, name, surname, isLoading, role = "student" }) => {
  const router = useRouter();
  const { Title } = Typography;

  // if (isLoading){
  //   return <Spin/>
  // }

  return (
    <Flex
      onClick={() => router.push("/profile")}
      className="m-6 mt-0 rounded-3xl bg-gray-100 p-4 hover:cursor-pointer"
      align="center"
      gap={15}
    >
      {id !== undefined ? (
        <Avatar
          size={50}
          src={
            // <Image
            //   src={`${BASE_API_URL}users/${id}/avatars/source`}
            //   alt="avatar"
            //   width={50}
            //   height={50}
            // />
            role === "student"
              ? `${BASE_API_URL}users/${id}/avatars/source`
              : `${BASE_API_URL}companies/${id}/avatars/source`
          }
        />
      ) : (
        <Avatar size={50}>СС</Avatar>
      )}
      <div>
        <h5 className="m-0">{name}</h5>
        <h5>{surname}</h5>
      </div>
    </Flex>
  );
};

export default ProfileCard;
