import React, { Component } from 'react';
import { connect } from 'dva';

@connect()
class ExecutoryCosts extends Component {
  render() {
    return <div>执行成本控制</div>;
  }
}

export default ExecutoryCosts;
