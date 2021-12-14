import http from '../common/http'

const register = user => http.post(`Customer/`, user);
const login = user => http.get(`Customer/`,{params:{id:user.id,password:user.password}});
const idcheck = userId => http.get(`Customer/check/${userId}`)

const UserService = {
  register,
  login,
  idcheck,
}

export default UserService
