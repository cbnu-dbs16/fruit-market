import http from '../common/http'

const register = user => http.post(`Customer/`, user);
const login = user => http.get(`Customer/`, user);
const idcheck = userId => http.get(`Customer/check/${userId}`)

const UserService = {
  register,
  login,
  idcheck,
}

export default UserService
