import React, { Component } from 'react';
import { connect } from 'dva';

@connect()
class ServiceTrace extends Component {
  render() {
    return <div>客户报价</div>;
  }
}

export default ServiceTrace;
