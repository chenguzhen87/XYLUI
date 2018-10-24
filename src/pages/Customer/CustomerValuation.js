/*
 * @Author: icony 
 * @Description: 客户报价
 * @Date: 2018-10-19 15:50:53 
 * @Last Modified by: icony
 * @Last Modified time: 2018-10-22 14:32:34
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Col, Row, Card } from 'antd';
import styles from './CustomerValuation.less';

@connect()
class CustomerValuation extends Component {
  render() {
    const colResponsiveProps1 = {
      lg: 24,
      xxl: 14,
      style: { marginBottom: 15 },
    };

    const colResponsiveProps2 = {
      lg: 24,
      xxl: 10,
      style: { marginBottom: 15 },
    };

    return (
      <div className={styles.quotation}>
        <Card hoverable className={styles.quotationLeft} bodyStyle={{ padding: 0 }}>
          000000
        </Card>
        {/* <div className={styles.quotationLeft}>

        </div> */}
        <div className={styles.quotationRight}>
          <Row gutter={10}>
            <Col {...colResponsiveProps1}>
              <Card title="柜量直势" hoverable bodyStyle={{ height: '300px' }} />
            </Col>
            <Col {...colResponsiveProps2}>
              <Card title="账龄" hoverable bodyStyle={{ height: '300px' }} />
            </Col>
            <Col {...colResponsiveProps1}>
              <Card title="利润走势" hoverable bodyStyle={{ height: '300px' }} />
            </Col>
            <Col {...colResponsiveProps2}>
              <Card title="发货频率" hoverable bodyStyle={{ height: '300px' }} />
            </Col>
            <Col {...colResponsiveProps1}>
              <Card title="回款率" hoverable bodyStyle={{ height: '300px' }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CustomerValuation;
