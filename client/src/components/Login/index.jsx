import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@mui/styles';
import StyledLogin from './style';
import btnStyles from "../../styles/Btnstyle";
import { useCookies } from 'react-cookie'
import { LoginUser } from '../../action/users';

const useStyles = makeStyles({
    root: {
        margin: '100px auto',
        textAlign: 'center',
        maxWidth: '30rem'
    },
    h1: {
        fontSize: '28px',
    },
  });

const Login = () => {
  const btnstyle = btnStyles();

  const [values, setValues] = React.useState({
    userid: '',
    userpwd: '',
    showPassword: false,
  });
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])
  const [cookieExpires] = useState({
    now: new Date(),
    after5h: new Date(),
  })

  const handleChange = (prop) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();

  const handleLogin = e => {
    e.preventDefault();
    console.log(values);
    const user = { 'id' : values.userid, 'password' : values.userpwd }
    cookieExpires.after5h.setHours(cookieExpires.now.getHours() + 5)
    LoginUser(user)
    .then(data => {
      console.log(data);
      if(data.length !== 0)
        setCookie('userid', values.userid, { path: '/', expires: cookieExpires.after5h })
        console.log(cookies);
    })
    .catch(error => {
      console.log(error);
      alert('아이디 또는 비밀번호를 다시 확인해주세요.')
    })
  }

  return (
    <div className={classes.root}>
        <h1 className={classes.h1}>
            로그인
        </h1>
        <form onSubmit={handleLogin}>
        <FormControl sx={{ m: '20px 0px', width: '100%' }} variant="standard">
        <TextField
          id="standard-textarea"
          className={classes.input}
          label="아이디"
          multiline
          variant="standard"
          onChange={handleChange('userid')}
        />
        </FormControl><br/>
        <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">비밀번호</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.userpwd}
              onChange={handleChange('userpwd')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
        </FormControl>
        <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
            <Button type="submit" variant="contained" className={btnstyle.btn}onClick={handleLogin}>로그인</Button>
        </FormControl>
        </form>
        <StyledLogin>
            <div className="accountservice">
                <a href="" className="service_register">회원가입</a>
                <div className="login_search">
                    <a href="" id="search_id">아이디 찾기</a> |
                    <a href="" id="search_pwd"> 비밀번호 찾기</a>
                </div>
            </div>
        </StyledLogin>
    </div>
  )
}

export default Login
