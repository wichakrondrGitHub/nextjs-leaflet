// import "css/tailwind.css";
"use client";
import "css/global.css";
import { LocaleTypes } from "../i18n/settings";
import styled from "styled-components";
const RootLayout = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
`;

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleTypes };
}) {
  return <RootLayout> {children}</RootLayout>;
}
