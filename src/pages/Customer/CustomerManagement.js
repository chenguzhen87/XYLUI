/*
 * @Author: icony 
 * @description: 客户管理
 * @Date: 2018-10-19 15:49:51 
 * @Last Modified by: icony
 * @Last Modified time: 2018-10-22 18:28:59
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

@connect()
class CustomerManagement extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default CustomerManagement;
