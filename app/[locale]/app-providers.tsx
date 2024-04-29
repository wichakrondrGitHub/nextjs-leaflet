"use client";

import { ThemeProvider } from "next-themes";
import siteMetadata from "@/data/siteMetadata";
import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import { store } from "../../store/store";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2ab33b",
            colorInfo: "#2ab33b",
          },
        }}
      >
        <ThemeProvider defaultTheme={siteMetadata.theme} enableSystem>
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
}