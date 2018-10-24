/*
 * @Author: icony 
 * @Description: 客户报价
 * @Date: 2018-10-22 13:02:45 
 * @Last Modified by: icony
 * @Last Modified time: 2018-10-22 14:21:11
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './CustomerQuotation.less';

@connect()
class CustomerQuotation extends Component {
  render() {
    return (
      <div className={styles.customerQuotation}>
        <div className={styles.header} />
        <div className={styles.content}>
          <div className={styles.left}>111</div>
          <div className={styles.center}>222</div>
          <div className={styles.right}>33333</div>
        </div>
      </div>
    );
  }
}

export default CustomerQuotation;
