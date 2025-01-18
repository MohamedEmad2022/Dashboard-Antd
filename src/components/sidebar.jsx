import {
  AppstoreOutlined,
  BankOutlined,
  CalendarOutlined,
  DollarOutlined,
  LogoutOutlined,
  NodeIndexOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  TeamOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Sidebar = () => {
  return (
    <>
      <div className="p-4 text-xl font-bold">enGaz</div>
      <Menu
        selectedKeys={["2"]}
        theme="dark"
        mode="vertical"
        className="p-4 text-lg bg-blue-900"
      >
        <Menu.Item icon={<AppstoreOutlined />}>Dashboard</Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          All Employees
        </Menu.Item>
        <Menu.Item icon={<NodeIndexOutlined />}>All Departments</Menu.Item>
        <Menu.Item icon={<CalendarOutlined />}>Attendance</Menu.Item>
        <Menu.Item icon={<DollarOutlined />}>Payroll</Menu.Item>
        <Menu.Item icon={<ReconciliationOutlined />}>Leaves</Menu.Item>
        <Menu.Item icon={<BankOutlined />}>Jobs</Menu.Item>
        <Menu.Item icon={<TeamOutlined />}>Candidates</Menu.Item>
        <Menu.Item icon={<SettingOutlined />}>Settings</Menu.Item>
        <Menu.Item icon={<LogoutOutlined />}>Log Out</Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
