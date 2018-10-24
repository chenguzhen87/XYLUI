import React, { Component } from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import styles from './executoryCosts.less';

const { TabPane } = Tabs;
function callback() {}

@connect()
class ExecutoryCosts extends Component {
  render() {
    return (
      <div className={styles.executoryCosts}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="订舱" key="1">
            <div className={styles.costsContent}>
              <div className={styles.left}>1111</div>
              <div className={styles.center}>2222</div>
              <div className={styles.right}>3333</div>
            </div>
          </TabPane>
          <TabPane tab="派车" key="2">
            <div className={styles.costsContent}>
              <div className={styles.left}>1111</div>
              <div className={styles.center}>2222</div>
              <div className={styles.right}>3333</div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default ExecutoryCosts;
