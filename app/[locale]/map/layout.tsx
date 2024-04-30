// import "css/tailwind.css";
"use client";
import "css/global.css";
import { LocaleTypes } from "../i18n/settings";
import styled from "styled-components";
import { Flex } from "antd";
import Header from "@/components/Header";
const RootLayout = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
`;

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleTypes };
}) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
