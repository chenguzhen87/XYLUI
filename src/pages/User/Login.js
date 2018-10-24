import React from 'react';
import { connect } from 'dva';
import { Button, Row, Form, Input } from 'antd';
import styles from './Login.less';
import logo from '../../assets/logo.png';

const FormItem = Form.Item;

const Login = ({ loading, dispatch, form: { getFieldDecorator, validateFieldsAndScroll } }) => {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: 'login/login', payload: values });
    });
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt="logo" src={logo} />
        <span>XYLUI</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('account', {
            rules: [
              {
                required: true,
                message: '请输入用户名',
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loading.effects.login}>
            登 录
          </Button>
        </Row>
      </form>
    </div>
  );
};

export default connect(({ loading }) => ({ loading }))(Form.create()(Login));
