"use client";
import { ReactNode } from "react";
import styled from "styled-components";

interface MainContainerProps {
  children: ReactNode;
}
const Main = styled.main`
  // margin-bottom: auto;
  margin: auto;
  // height: 100vh;
`;
export default function MainContainer({ children }: MainContainerProps) {
  return <Main>{children}</Main>;
}
