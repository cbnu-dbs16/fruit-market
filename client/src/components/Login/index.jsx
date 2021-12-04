import * as React from 'react';
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

const useStyles = makeStyles({
    root: {
        margin: '100px auto',
        textAlign: 'center',
        maxWidth: '30rem'
    },
    h1: {
        fontSize: '28px',
    },
    loginbtn: {
      background: 'linear-gradient(45deg, #A814E7 30%, #288CD2 92%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      fontSize: '18px',
      height: 55,
      padding: '0 30px',
    },
  });

const Login = () => {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
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

  return (
    <div className={classes.root}>
        <h1 className={classes.h1}>
            로그인
        </h1>
        <FormControl sx={{ m: '20px 0px', width: '100%' }} variant="standard">
        <TextField
          id="standard-textarea"
          className={classes.input}
          label="아이디"
          multiline
          variant="standard"
        />
        </FormControl><br/>
        <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">비밀번호</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
            <Button variant="contained" className={classes.loginbtn}>로그인</Button>
        </FormControl>
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
