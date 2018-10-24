import { routerRedux } from 'dva/router';
import { login } from '@/services/login';
import { message } from 'antd';

export default {
  namespace: 'login',

  state: {},
  reducers: {
    save(state, action) {
      return {
        ...state,
        user: action.data,
      };
    },
  },
  effects: {
    *login({ payload }, { put, call }) {
      const result = yield call(login, payload);
      const { data, msg } = result;
      if (result.code === 200) {
        yield put({ type: 'save', data });
        window.sessionStorage.setItem('loginInfo', JSON.stringify(data));
        yield put(routerRedux.push('/'));
      } else {
        message.info(msg);
      }
    },
  },
};
