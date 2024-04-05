import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return <section className="mx-auto max-w-7xl	sm:px-6  ">{children}</section>;
}
