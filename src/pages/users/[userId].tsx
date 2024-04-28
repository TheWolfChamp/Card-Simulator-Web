import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { useRouter } from "next/router";

export default function UserProfilePage() {
  const router = useRouter();
  return <MainLayout>{router.query.userId}</MainLayout>;
}
