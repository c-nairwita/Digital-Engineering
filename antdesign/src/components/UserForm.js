import React from "react";
import { Form, Input, Checkbox, DatePicker, Button, Select, Card } from "antd";
import { useForm } from "antd/lib/form/Form";
import moment from "moment";

const UserForm = () => {

  const disabledDate=(current)=> {
    const minDate = moment().subtract(70, 'years');
    const maxDate = moment().subtract(18, 'years');
    return (
      current && (current < minDate || current > maxDate)
    );
  }

  const [form] = useForm();

  const cardStyle = {
    width: "40%",
    margin: "auto",
    marginTop: "2rem",
    borderColor: "silver",
    borderWidth: 1,
  };

  const handleSubmit = (values) => {
    console.log(values);
    form.resetFields();
    form.getFieldsValue().forEach((field) => {
      form.setFields([
        {
          name: field.name,
          errors: [],
          touched: false,
          validating: false,
          value: field.initialValue,
          validateStatus: "",
          hasFeedback: false,
        },
      ]);
    });
  };

  return (
    <>
      <Card title="Register" style={cardStyle}>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: "100%" }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 4, message: "Must be at least 4 characters" },
            ]}
            hasFeedback
          >
            <Input autoComplete="off" placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input autoComplete="off" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            style={{ textAlign: "left" }}
            requiredMark="optional"
          >
            <Select placeholder="Select your gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="nonBinary">Non-Binary</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dob"
            label="DOB"
            style={{ textAlign: "left" }}
            rules={[
              {
                required: true,
                message: "Please provide your date of birth.",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              disabledDate={disabledDate}
              format="DD-MM-YYYY"
              placeholder="Select Date of Birth"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              {
                validator(_, value) {
                  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
                    return Promise.reject(
                      "Password must contain at least 8 characters, including letters and numbers"
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password autoComplete="off" placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Password is required",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Password does not match");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password
              autoComplete="off"
              placeholder="Enter password again"
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            wrapperCol={{ span: "100%" }}
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Agree to proceed"),
              },
            ]}
          >
            <Checkbox>
              Agree to our <a>Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: "100%" }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default UserForm;
