import React, { useState } from "react";
import { Link, Route, Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const btnstyle = btnStyles();

  const [values, setValues] = React.useState({
    cus_id: '',
    cus_password: '',
    showPassword: false,
  });
  // const [cookies, setCookie, removeCookie] = useCookies(['userid'])

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
    const user = { 'cus_id' : '1234', 'cus_password' : '1234' }
    // cookieExpires.after1h.setHours(cookieExpires.now.getHours() + 1)
    LoginUser(user)
    .then(data => {
      console.log(data);
      // if(data.length !== 0)
        // setCookie('userid', values.cus_id);
        // console.log("cookie",cookies);
    })
    .catch(error => {
      console.log(error);
      // removeCookie('userid');
      alert('????????? ?????? ??????????????? ?????? ??????????????????.');
    })
  }

  return (
    <div className={classes.root}>
        <div>
        <h1 className={classes.h1}>
            ?????????
        </h1>
        <form onSubmit={handleLogin}>
        <FormControl sx={{ m: '20px 0px', width: '100%' }} variant="standard">
        <TextField
          id="standard-textarea"
          className={classes.input}
          label="?????????"
          multiline
          variant="standard"
          onChange={handleChange('userid')}
        />
        </FormControl><br/>
        <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">????????????</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.cus_password}
              onChange={handleChange('cus_password')}
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
            <Button type="submit" variant="contained" className={btnstyle.btn} onClick={()=>navigate('/product', { replace: true })}>?????????</Button>
        </FormControl>
        </form>
        <StyledLogin>
            <div className="accountservice">
                <Link to="/register" className="service_register">????????????</Link>
                <div className="login_search">
                    <a href="" id="search_id">????????? ??????</a> |
                    <a href="" id="search_pwd"> ???????????? ??????</a>
                </div>
            </div>
        </StyledLogin>
        </div>
    </div>
  )
}

export default Login
