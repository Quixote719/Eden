import React from 'react';
import { CommentOutlined } from '@ant-design/icons';
import { Button, FloatButton } from 'antd'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const CompLab = () => {
      console.log(666)
          
                  console.warn(888)
  return (
    <div>
        <Button>click</Button>
        <FloatButton icon={<CommentOutlined />}></FloatButton>
        <div>
            <RangePicker showTime />
        </div>

    </div>
  );
};


export default CompLab;
