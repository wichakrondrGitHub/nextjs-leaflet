// components/Layout.js
"use client";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const { Sider: AntSider, Content: AntContent } = Layout;

const LayoutContainer = styled(Layout)`
  min-height: 100vh;
  min-width: 100vw;
`;

const Sider = styled(AntSider)`
  background: #fff; /* Change background color as needed */
`;

const Content = styled(AntContent)`
  margin: 0 16px;
`;

const CustomLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
          {/* Add more menu items for other pages */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </LayoutContainer>
  );
};

export default CustomLayout;
