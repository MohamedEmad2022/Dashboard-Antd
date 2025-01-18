import PInformation from "./forms/pInformation";
import React, { useState } from "react";
import { Layout, Form, Button, Steps, Breadcrumb, Row, Col } from "antd";
import Sidebar from "./sidebar";
import AppHeader from "./header";
import { useStateContext } from "../context/contextProvider";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import FormModal from "./formModal";

function AppLayout() {
  const { Step } = Steps;
  const { Header, Footer, Sider, Content } = Layout;
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const { percent, setIsModalOpen, setIsWarningModal } = useStateContext();
  const [collapsed, setCollapsed] = useState(false);

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const steps = [
    { title: "Personal Information" },
    { title: "Work Information" },
    { title: "Education" },
    { title: "Payroll" },
  ];

  const fields = {
    0: <PInformation title="General Information" />,
    1: <PInformation title="Job Information" />,
    2: <PInformation title="Education Information" />,
    3: <PInformation title="Bank Information" />,
  };

  return (
    <Layout className="h-screen relative">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => setCollapsed(broken)}
        collapsible
        trigger={null}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={250}
        className="bg-blue-900 text-white"
      >
        <Sidebar />
      </Sider>
      <Button
        className={`z-50 bg-blue-900 text-white border-0 ${
          collapsed ? "left-0" : "left-60"
        }`}
        icon={collapsed ? <RightSquareOutlined /> : <LeftSquareOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "30px",
          width: 50,
          height: 50,
          position: "fixed",
        }}
      />
      <Layout>
        <Header className="bg-blue-900 text-white rounded-e-lg">
          <AppHeader />
        </Header>
        <Content className="p-4 bg-white rounded shadow">
          <>
            <FormModal />
            <Row className="flex justify-between mb-4">
              <Col>
                <Breadcrumb separator=" >>">
                  <Breadcrumb.Item className="text-xl font-bold ">
                    All Employees
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="text-xl text-blue-900 font-bold ">
                    New
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col>
                <Button onClick={() => setIsWarningModal(true)}>Discard</Button>
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-blue-900 text-white px-7 ml-2"
                >
                  Save
                </Button>
              </Col>
            </Row>

            <Steps current={currentStep} percent={percent}>
              {steps.map((item, index) => (
                <Step key={index} title={item.title} />
              ))}
            </Steps>

            {fields[currentStep]}

            <div className="col-span-2 flex justify-end">
              <Button
                icon={<ArrowLeftOutlined />}
                onClick={prev}
                disabled={currentStep === 0}
              ></Button>
              {currentStep === steps.length - 1 ? (
                <Button className="ml-2" type="primary" htmlType="submit">
                  Finish
                </Button>
              ) : (
                <Button
                  className="ml-2"
                  icon={<ArrowRightOutlined />}
                  onClick={next}
                ></Button>
              )}
            </div>
          </>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
