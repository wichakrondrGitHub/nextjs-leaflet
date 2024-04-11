"use client";

import { ThemeProvider } from "next-themes";
import siteMetadata from "@/data/siteMetadata";
import { ConfigProvider } from "antd";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7d8796",
          colorInfo: "#7d8796",
        },
      }}
    >
      <ThemeProvider defaultTheme={siteMetadata.theme} enableSystem>
        {children}
      </ThemeProvider>
    </ConfigProvider>
  );
}
