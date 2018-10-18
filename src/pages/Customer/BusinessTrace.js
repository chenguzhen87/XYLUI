import React, { Component } from 'react';
import { connect } from 'dva';

@connect()
class BusinessTrace extends Component {
  render() {
    return <div>业务跟踪</div>;
  }
}

export default BusinessTrace;
