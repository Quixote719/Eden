import React from 'react';
import { Collapse, Form, Checkbox, Radio, Input } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genVehicleForm = () => {
  return (
    <div>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        style={{
          maxWidth: 600
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Url" name="Url" rules={[{ required: true }, { type: 'string', min: 6 }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                console.log(value, getFieldValue('Email'));
                const regExp = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/;
                if (regExp.exec(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('please input an email'));
              }
            })
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: genVehicleForm()
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>
  }
];

const Flow = () => {
  return (
    <div>
      <Collapse items={items} />
    </div>
  );
};

export default Flow;
