import http from '../utils/http';

export function registerUser(data) {
  return new http().post('/user/register', data)
}

export function loginUser(data) {
  return new http().authenticated().post('/user/login', data)
}
