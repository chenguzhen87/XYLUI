import React, { Component } from 'react';
import { connect } from 'dva';

@connect()
class Home extends Component {
  render() {
    return <div>主页</div>;
  }
}

export default Home;
