import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Row,
  Col,
  Upload,
  ConfigProvider,
  Flex,
} from "antd";
import { useStateContext } from "../../context/contextProvider";
import { PaperClipOutlined } from "@ant-design/icons";

const { Option } = Select;

const PInformation = ({ title }) => {
  const [form] = Form.useForm();
  const { setPercent } = useStateContext();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  const handleValuesChange = (changedValues, allValues) => {
    const total = Object.keys(allValues).length;
    const completed = Object.values(allValues).filter(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Array.isArray(value) || value.length > 0)
    ).length;

    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    setPercent(progress);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <div className="w-[1036px]">
      <h1 className="text-2xl text-[#003465] font-bold  mb-3">{title}</h1>
      <ConfigProvider
        theme={{
          token: {
            fontWeightStrong: "bold",
          },
          components: {
            Form: {
              labelFontSize: 16,
              labelColor: "#323F49",
              labelHeight: 20,
              labelFontWeight: 600,
            },
          },
        }}
      >
        <div className=" w-full h-[624px] flex justify-center ">
          <Form
            className="w-[1032px] "
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={handleValuesChange}
          >
            <Row>
              <Col span={8}>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[{ message: "Please enter your first name" }]}
                >
                  <Input
                    className=" max- max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter first name"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="middleName"
                  label="Middle Name"
                  rules={[{ message: "Please enter your middle name" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter middle name"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[{ message: "Please enter your last name" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter last name"
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[{ message: "Please select your gender" }]}
                >
                  <Select
                    suffixIcon={null}
                    className="custom-select  max-w-[313px]"
                    placeholder="Select gender"
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="age"
                  label="Age"
                  rules={[{ message: "Please enter your age" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter age"
                    type="number"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="dateOfBirth"
                  label="Date of Birth"
                  rules={[{ message: "Please select your date of birth" }]}
                >
                  <DatePicker
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  name="nationality"
                  label="Nationality"
                  rules={[{ message: "Please enter your nationality" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter nationality"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="nationalID"
                  label="National ID"
                  rules={[{ message: "Please enter your national ID" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter national ID"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="nationalIDAttachment"
                  label="National ID Attachment"
                >
                  <Upload>
                    <Button className=" flex justify-between w-[313px] h-[44px] py-[10px] px-[14px]">
                      <span>Attach</span>
                      <PaperClipOutlined />
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item name="militaryStatus" label="Military Status">
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter military status"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="maritalStatus" label="Marital Status">
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter marital status"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="city"
                  label="City"
                  rules={[{ message: "Please enter your city" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter city"
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ message: "Please enter your address" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter address"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter email"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="phoneNumber1"
                  label="Phone Number 1"
                  rules={[{ message: "Please enter your phone number" }]}
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter phone number"
                  />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item name="phoneNumber2" label="Phone Number 2">
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter phone number 2"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  name="socialInsuranceNumber"
                  label="Social Insurance Number"
                >
                  <Input
                    className="  max-w-[313px] h-[44px] py-[10px] px-[14px]"
                    placeholder="Enter social insurance number"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};

export default PInformation;
