import React from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import { useRouter } from "next/router";

export default function IndividualPackPage() {
  const router = useRouter();

  return <MainLayout>{router.query.collectionId}</MainLayout>;
}
