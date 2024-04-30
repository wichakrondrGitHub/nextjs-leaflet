"use client";

import { ThemeProvider } from "next-themes";
import siteMetadata from "@/data/siteMetadata";
import { ConfigProvider } from "antd";

import { Provider } from "react-redux";
import { store } from "../../store/store";
import StyledComponentsRegistry from "@/lib/registry";
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#2ab33b",
              colorInfo: "#2ab33b",
              borderRadius: 16,
            },
            components: {
              List: {
                itemPaddingSM: "0",

                /* here is your component tokens */
              },
            },
          }}
        >
          <ThemeProvider defaultTheme={siteMetadata.theme} enableSystem>
            {children}
          </ThemeProvider>
        </ConfigProvider>
      </Provider>
    </StyledComponentsRegistry>
  );
}
