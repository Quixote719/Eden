import React from 'react';
import {
  AppstoreOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { Map, APILoader, Marker } from '@uiw/react-baidu-map';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  };
}
import styles from './index.module.less';
const items = [
  getItem('主页', '1', <PieChartOutlined />),
  getItem('车辆监控', 'sub1', <MailOutlined />, [
    getItem('车企监控', '2'),
    getItem('历史数据', '3'),
    getItem('历史数据补发', '4')
  ]),
  getItem('系统管理', 'sub2', <AppstoreOutlined />, [
    getItem('车辆指令', '5'),
    getItem('车型管理', '6'),
    getItem('车辆管理', '7'),
    getItem('CJLR车辆管理', '8'),
    getItem('上报日志', '9'),
    getItem('指令历史', '10'),
    getItem('车辆电池管理', '11'),
    getItem('电池上报日志', '12')
    // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
  getItem('二三级报警', 'sub3', <MenuUnfoldOutlined />, [
    getItem('监控页面', '13'),
    getItem('实时报警查询', '14'),
    getItem('历史报警查询', '15'),
    getItem('CJLR实时报警查询', '16'),
    getItem('CJLR历史报警查询', '17'),
    getItem('非沪绿牌报警查询', '18')
  ])
];

const MenuApp = () => {
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  const menuClick = key => {
    console.log('menuClick', key);
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            // colorPrimary: '#00b96b',
            // borderRadius: 2,
            // 派生变量，影响范围小
            // colorBgContainer: '#f6ffed',
          },
          components: {
            Menu: {
              itemHeight: 40
            }
          }
        }}
      >
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button> */}
        <div className={styles.sideBar}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            onClick={menuClick}
            mode="inline"
            theme="dark"
            // inlineCollapsed={collapsed}
            items={items}
          />
        </div>
      </ConfigProvider>
      <div className={styles.mapSpace}>
        <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
          {/* <Map center="杭州"/> */}
          <Map center="shanghai">
            <Marker position={{ lng: 121.465145, lat: 31.241245 }} />
            <Marker position={{ lng: 121.466008, lat: 31.220001 }} type="loc_red" />
            <Marker position={{ lng: 121.501365, lat: 31.224942 }} type="simple_blue" />
            <Marker position={{ lng: 121.464858, lat: 31.202705 }} type="simple_red" />
            <Marker position={{ lng: 121.458534, lat: 31.224942 }} type="start" />
            <Marker position={{ lng: 121.434962, lat: 31.200729 }} type="end" />
            <Marker position={{ lng: 121.478943, lat: 31.2531 }} type="location" />
            <Marker position={{ lng: 121.516888, lat: 31.249149 }} type="red1" />
            <Marker position={{ lng: 121.512576, lat: 31.240504 }} type="red2" />
            <Marker position={{ lng: 121.513726, lat: 31.233588 }} type="blue3" />
            <Marker position={{ lng: 121.520912, lat: 31.234576 }} type="blue4" />
            <Marker position={{ lng: 121.491879, lat: 31.195045 }} type="dot_red" />
            <Marker position={{ lng: 121.485555, lat: 31.195045 }} type="dot_blue" />
          </Map>
        </APILoader>
      </div>
    </div>
  );
};
export default MenuApp;
