import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch as RouterSwitch,
} from "react-router-dom";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    MessageOutlined,
    LogoutOutlined,
    SearchOutlined
  } from '@ant-design/icons';
import logo from '../../images/Logo A1 White.png';



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const GCDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse=(collapsed) => {
        setCollapsed(collapsed)
    }

    return(
          <Layout style={{ minHeight: '100vh' }}>
            <Sider>
              <div className="logo">
                  <img src={logo} height="50px" width="120px" />
              </div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<TeamOutlined />}>
                  Clients
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Projects
                </Menu.Item>
                <Menu.Item key="3" icon={<SearchOutlined />}>
                  Find Projects
                </Menu.Item>
                {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu> */}
                <Menu.Item key="9" icon={<MessageOutlined />}>
                  Chat
                </Menu.Item>
                <Menu.Item key="10" icon={<LogoutOutlined />}>
                  Sign Out
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Hassan</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  General Contractors Dashboard
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>ArchiWiz ©2021 Created by Safe Solutions Consltants</Footer>
            </Layout>
          </Layout>
        )
}

export default GCDashboard;