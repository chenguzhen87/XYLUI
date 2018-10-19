import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';
import CustomerStats from '@/components/BusinessValuation/CustomerStats';

@connect()
class BusinessValuation extends Component {
  render() {
    const colResponsiveProps = {
      md: 24,
      lg: 12,
      style: { marginBottom: 10 },
    };

    return (
      <div>
        <CustomerStats />
        <Row gutter={10} style={{ marginTop: 10 }}>
          <Col {...colResponsiveProps}>
            <div>
              <Card title="行业分布图" bodyStyle={{ height: '300px' }} />
            </div>
            <div style={{ marginTop: 10 }}>
              <Card title="船公司分布图" bodyStyle={{ height: '300px' }} />
            </div>
          </Col>
          <Col {...colResponsiveProps}>
            <Card title="航线分布图" bodyStyle={{ height: '670px' }} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default BusinessValuation;
