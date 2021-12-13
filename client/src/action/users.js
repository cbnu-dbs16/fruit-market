import UserService from '../services/userservice';

export const RegisterUser = async user => {
    try {
      const res = await UserService.register(user);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
}

export const LoginUser = async user => {
    try {
      console.log(user);
      const res = await UserService.login(user);
      console.log(res);
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  }