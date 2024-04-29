"use client";

import { ReactNode } from "react";
import styled from "styled-components";

interface HomeProps {
  children: ReactNode;
}

const HomeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default async function Home({ children }: HomeProps) {
  return <HomeBox>{children}</HomeBox>;
}
