import PInformation from "./forms/pInformation";
import React, { useState } from "react";
import {
  Layout,
  Form,
  Button,
  Steps,
  Breadcrumb,
  Row,
  Col,
  Flex,
  ConfigProvider,
  Progress,
} from "antd";
import Sidebar from "./sidebar";
import AppHeader from "./header";
import { useStateContext } from "../context/contextProvider";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
 
} from "@ant-design/icons";
import FormModal from "./formModal";
import Vector from "../assets/Vector.png"

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
    <Layout className="max-w-[1440px]">
      <Sider
      style={{ borderRadius: ' 0 0 16px 0 ' }}
        width={280}
        className="bg-[#003465] text-white fixed min-h-[1024px]"
      >
        <Sidebar />
      </Sider>

      <Layout className="relative  ">
        <Header
          style={{ zIndex: 1, borderRadius: ' 0 0 16px 0 ' }}
          className="h-[82px] pl-0 pr-10  fixed top-0 left-[280px] right-0 bg-[#003465] border-x-2 text-white "
        >
          <AppHeader />
        </Header>
        <Content className=" max-w-[1080px] absolute top-[108px] left-[300px] bg-white h-[883px] rounded">
          <>
            <FormModal />
            <Row className="flex justify-between border-b">
              <Col className="mb-6">
                <Breadcrumb separator=" >>">
                  <Breadcrumb.Item className="text-xl font-bold ">
                    All Employees
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="text-xl text-[#003465] font-bold ">
                    New
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col>
                <Flex gap={12}>
                  <Button
                    className="w-[108px] h-[38px] text-[#003465] rounded-[7px] border-[#003465]"
                    onClick={() => setIsWarningModal(true)}
                  >
                    Discard
                  </Button>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#003465] text-white w-[108px] h-[38px] rounded-[7px] "
                  >
                    Save
                  </Button>
                </Flex>
              </Col>
            </Row>
            <ConfigProvider
              theme={{
                components: {
                  Steps: {
                    lineWidth: 2,
                  },
                },
                token: {
                  colorPrimary: "#04B051",
                  colorTextPlaceholder: "#595958",
                  colorInfo: "#04B051",
                  fontSize: 16,
                  fontWeightStrong: 500,
                },
              }}
            >
              <div className="w-[1032px] my-7">
                <Steps
                
                  size="small"
                  labelPlacement="vertical"
                  current={currentStep}
                  
                >
                  {steps.map((item, index) => (
                    <Step
                    icon={
                      <>
                      <Progress
                      format={()=>{
                       if(index < currentStep){
                        return(
                          <div className="flex justify-center ">
                            <img className="size-[12px] p-[1px] border-[#04B051] border-2 rounded-full" src={Vector} alt="" />
                          </div>
                        )
                       }else{
                        return index +1
                       }
                      }}
                      size={30} type="circle" percent={currentStep === index ? percent : currentStep > index ? 100 : 0} strokeColor="#04B051" status={index === currentStep ? "active" : index < currentStep ? "success" : "normal" }  />
                      </>
                    }
                    key={index} title={item.title} />
                  ))}
                </Steps>
                {/* {steps.map((item, index) => (
                    <Progress type="circle" percent={50} strokeColor="green"  />
                  ))} */}
                
                
              </div>
            </ConfigProvider>
            {fields[currentStep]}

            <div className="flex justify-end  w-[1032px]">
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
