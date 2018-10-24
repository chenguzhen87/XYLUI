import request from '@/utils/request';

export default async function login(params) {
  return request('/XYLMis/login/doLogin', {
    method: 'POST',
    body: params,
  });
}
