import React, { Component } from 'react';
import { connect } from 'dva';

@connect()
class CustomerManagement extends Component {
  render() {
    return <div>客户管理</div>;
  }
}

export default CustomerManagement;
