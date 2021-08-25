import React from 'react';
import {Menu} from 'antd';
import {
    Link
} from "react-router-dom";
import {
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import {adminSignout} from "../../../authentication/index";
import "../../../scss/admin.scss";

const { SubMenu } = Menu;

const AdminMenu= () => {
    const signout= ()=>
    {
        adminSignout();
        window.location.reload();
    }
    return(
        <Menu theme="dark"  mode="inline">
        <SubMenu key="sub1" icon={<UserOutlined />} title="Client">
          <Menu.Item key="3">
              Create Account
              <Link to="/admin/dashboard" />
          </Menu.Item>
          <Menu.Item key="4">
              Registered Clients
              <Link to="/admin/dashboard/clientdisplay" />
          </Menu.Item>
        </SubMenu>
        <Menu.Item onClick={signout} key="1" icon={<PieChartOutlined />}>
          Signout
        </Menu.Item>
      </Menu>
    );
}

export default AdminMenu;