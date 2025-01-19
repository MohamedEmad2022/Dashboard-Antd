import { Flex, Menu, Space } from "antd";
import logo from "../assets/logo.png";
import allE from "../assets/allE.png";
import atten from "../assets/atten.png";
import cand from "../assets/cand.png";
import dash from "../assets/dash.png";
import job from "../assets/job.png";
import leaav from "../assets/leaav.png";
import logout from "../assets/logout.png";
import payro from "../assets/payro.png";
import setti from "../assets/setti.png";

const Sidebar = () => {
  return (
    <>
      <div className="p-4 text-xl font-bold">
        <img className="w-[182px] h-[55px]" src={logo} />
      </div>

      <Menu
        selectedKeys={["2"]}
        theme="dark"
        mode="vertical"
        className=" text-lg bg-[#003465] w-[220px] "
      >
        <Space direction="vertical" size={10}>
          <Menu.Item key={"2"}>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={dash} />
              <span className="font-semibold text-[16px]">Dashboard</span>
            </Flex>
          </Menu.Item>

          <Menu.Item>
            <Flex
              className="bg-[#FFFFFF33] border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={allE} />
              <span className="font-semibold text-[16px]">All Departments</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={atten} />
              <span className="font-semibold text-[16px]">Attendance</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={payro} />
              <span className="font-semibold text-[16px]">Payroll</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={leaav} />
              <span className="font-semibold text-[16px]">Leaves</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={job} />
              <span className="font-semibold text-[16px]">Job</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={cand} />
              <span className="font-semibold text-[16px]">Candidates</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={setti} />
              <span className="font-semibold text-[16px]">Settings</span>
            </Flex>
          </Menu.Item>
          <Menu.Item>
            <Flex
              className=" hover:bg-[#FFFFFF33] hover:border-l-4 rounded-e rounded-r-xl w-[220px]"
              gap={6}
              align="center"
            >
              <img className="w-[24px] h-[24px]" src={logout} />
              <span className="font-semibold text-[16px]">Log Out</span>
            </Flex>
          </Menu.Item>
        </Space>
      </Menu>
    </>
  );
};

export default Sidebar;
