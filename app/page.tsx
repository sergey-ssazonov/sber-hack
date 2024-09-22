"use client";

import { Button } from "antd";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const session = useSession();

  console.log("session", session);

  // router.push("/login");
  return (
    <div>
      <Button onClick={() => signOut({ callbackUrl: "/login" })}>SignOut</Button>
    </div>
  );
}
