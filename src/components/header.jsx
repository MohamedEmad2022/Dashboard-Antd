import {Dropdown, Flex, Space } from "antd";
import React from "react";
import {
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import MaskGroup from "../assets/MaskGroup.png";
import Group3 from "../assets/Group3.png";

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
      <Flex gap={32} align="center" className="h-[82px]  ">
        <SettingOutlined className="text-2xl" />
        <img className="w-[24px] h-[24px]" src={Group3} alt="" />

        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Space size={16}>
            <img className="w-[50px] h-[50px]" src={MaskGroup} alt="" />
            <DownOutlined />
          </Space>
        </Dropdown>
      </Flex>
    </div>
  );
}

export default AppHeader;
