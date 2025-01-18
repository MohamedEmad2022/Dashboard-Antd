import { Avatar, Badge, Dropdown, Space } from "antd";
import React from "react";
import {
  DownOutlined,
  RadiusUpleftOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function AppHeader() {
  const items = [
    {
      key: "1",
      label: "Profile",
    },
    {
      key: "2",
      label: "Settings",
    },
    {
      key: "3",
      label: "Logout",
    },
  ];
  return (
    <div className="flex justify-end ">
      <div className="flex justify-center items-center space-x-4">
        <SettingOutlined className="text-2xl" />
        <Badge dot>
          <RadiusUpleftOutlined className="text-2xl text-white" />
        </Badge>

        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Space>
            <Avatar>M</Avatar>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
}

export default AppHeader;
