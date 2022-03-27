import React, { Component } from "react";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

class TabComponent extends React.Component {
  state = { size: "small" };

  onChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><AppleOutlined />Summery</span>} key="1">Summery</TabPane>
          <TabPane tab={ <span> <AndroidOutlined />Date and Time</span> }  key="2" >Date and Time</TabPane>
          <TabPane tab={ <span> <AndroidOutlined />FAQ</span> }  key="3" >FAQ</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
