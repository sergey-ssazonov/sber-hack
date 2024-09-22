"use client";

import { ProfilePage } from "@/src/screens/profile";
import { Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const session = useSession();

  console.log("session", session);

  return (
    <ProfilePage/>
  );
}
