import { React, useState } from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm()

//   const { isLoggedIn } = useSelector(state => state.auth)
//   const dispatch = useDispatch()

  const handleLogin = data => {
    // console.log(data.userId, data.passWord)
    // dispatch(login(data.userId, data.passWord))
    //   .then(() => {
    //     window.location.reload()
    //   })
    //   .catch(() => {
    //   })
  }

  return (
    <div className="container">
      <div className="card card-container">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-group">
            <label htmlFor="userId">아이디</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userId"
              placeholder="아이디"
              onChange={e => setValue('userId', e.target.value)}
              //   onChange={onChangeUserid}
              {...register('userId', { required: true })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="passWord">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="passWord"
              name="passWord"
              placeholder="비밀번호"
              //   onChange={onChangePassword}
              {...register('passWord', { required: true })}
            />
          </div>
          <div className="form-group">
            <button type="submit" value="Login" className="btn btn-primary btn-block">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
