import React from 'react';
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Switch as RouterSwitch,
} from "react-router-dom";
import BreadCrumbs from "../../components/breadcrumbs";
import ClientSignup from "./clientsignup";
import ClientDisplay from "./clientdisplay";
import Sidebar from "../../components/Side";
import Nav from "../../components/Nav";
import AdminMenu from "./admin-components/menu";
import "../../scss/admin.scss";

const { Header, Content, Footer } = Layout;

const AdminDashboard = () => {
    return(
      <div>
         <Router>
         <Nav menu={<AdminMenu />} />
          <Layout style={{ minHeight: '100vh' }}>
             <Sidebar menu={<AdminMenu />} />
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 8, background: "transparent" }}>
                  <h1>Admin Dashboard</h1>
              </Header>
              <Content style={{ margin: '0 16px'}}>
              <BreadCrumbs />
              <RouterSwitch>    
                    <Route
                        exact
                        path="/admin/dashboard"
                        component={ClientSignup}
                    />
                    <Route
                        exact
                        path="/admin/dashboard/clientdisplay"
                        component={ClientDisplay}
                    />
              </RouterSwitch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
         
          </Layout>
          </Router>
          </div>
        )
}

export default AdminDashboard;