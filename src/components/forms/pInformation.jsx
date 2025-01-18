import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Row,
  Col,
  Upload,
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
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl text-blue-900 font-bold mb-3">{title}</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={handleValuesChange}
      >
        <Row gutter={[16, 0]}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input placeholder="Enter first name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="middleName"
              label="Middle Name"
              rules={[
                { required: true, message: "Please enter your middle name" },
              ]}
            >
              <Input placeholder="Enter middle name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input placeholder="Enter last name" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Select placeholder="Select gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="age"
              label="Age"
              rules={[{ required: true, message: "Please enter your age" }]}
            >
              <Input placeholder="Enter age" type="number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="dateOfBirth"
              label="Date of Birth"
              rules={[
                { required: true, message: "Please select your date of birth" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="nationality"
              label="Nationality"
              rules={[
                { required: true, message: "Please enter your nationality" },
              ]}
            >
              <Input placeholder="Enter nationality" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="nationalID"
              label="National ID"
              rules={[
                { required: true, message: "Please enter your national ID" },
              ]}
            >
              <Input placeholder="Enter national ID" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="nationalIDAttachment"
              label="National ID Attachment"
            >
              <Upload>
                <Button icon={<PaperClipOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item name="militaryStatus" label="Military Status">
              <Input placeholder="Enter military status" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="maritalStatus" label="Marital Status">
              <Input placeholder="Enter marital status" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "Please enter your city" }]}
            >
              <Input placeholder="Enter city" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input placeholder="Enter address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="phoneNumber1"
              label="Phone Number 1"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item name="phoneNumber2" label="Phone Number 2">
              <Input placeholder="Enter phone number 2" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              name="socialInsuranceNumber"
              label="Social Insurance Number"
            >
              <Input placeholder="Enter social insurance number" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PInformation;
