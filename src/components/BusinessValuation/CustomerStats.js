/*
 * @Author: icony 
 * @Date: 2018-10-19 10:56:52 
 * @Last Modified by: icony
 * @Last Modified time: 2018-10-22 14:27:59
 */

import React from 'react';
import { Row, Col, Icon, Card } from 'antd';
import styles from './index.less';

export default function() {
  const colResponsiveProps = {
    xs: 24,
    sm: 8,
  };
  return (
    <Card hoverable bodyStyle={{ padding: 0 }}>
      <Row>
        <Col {...colResponsiveProps}>
          <div className={styles.customerStas}>
            <span>客户总数</span>
            <span className={styles.number}>1000</span>
            <Icon type="arrow-down" style={{ color: 'red' }} />
          </div>
        </Col>
        <Col {...colResponsiveProps}>
          <div className={styles.customerStas}>
            <span>新增成交客户</span>
            <span className={styles.number}>1000</span>
            <Icon type="arrow-down" style={{ color: 'red' }} />
          </div>
        </Col>
        <Col {...colResponsiveProps}>
          <div className={styles.customerStas} style={{ borderRight: 0 }}>
            <span>流失</span>
            <span className={styles.number}>1000</span>
            <Icon type="arrow-down" style={{ color: 'red' }} />
          </div>
        </Col>
      </Row>
    </Card>
  );
}
