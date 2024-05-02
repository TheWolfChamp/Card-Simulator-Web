import Head from "next/head";
import { MainLayout } from "@/components/layouts/MainLayout";
import useGetAccountInformation from "@/utils/useGetAccountInfo";
import useIsAuthenticated from "@/utils/useIsAuthenticated";

export default function Home() {
  const isAuthenticated = useIsAuthenticated();
  const acc = useGetAccountInformation();

  let content;
  if (isAuthenticated) {
    content = `Welcome back @${acc.username}!`;
  } else {
    content = "User is not logged in";
  }

  return (
    <>
      <MainLayout>{content}</MainLayout>
    </>
  );
}
