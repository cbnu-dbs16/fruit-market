import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { RegisterUser } from '../../action/users';
import btnStyles from "../../styles/Btnstyle";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
      margin: '100px auto',
      textAlign: 'center',
      maxWidth: '30rem',
  },
  h1: {
      fontSize: '28px',
  },
  hr: {
    height: '3px',
    border: '0px',
    backgroundColor: '#000',
    margin: '2em 0'
  },
  p: {
    float: 'left'
  }
});

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    cus_id: '',
    cus_password: '',
    username: '',
    PhoneNumber: '',
    Email: '',
    city: '',
    gu: '',
    dong: '',
    jibun: ''
  })

  const [isOpenPost, setIsOpenPost] = useState(false);
  const [isInputPost, setIsInputPost] = useState(false);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
    setIsInputPost(false);
  };

  const onCompletePost = (data) => {
    console.log(data);
    const jibunaddr = data.jibunAddress.match(/[0-9|-]/g);
    const jibunaddr2 = jibunaddr ? jibunaddr.join('') : "";
    console.log(jibunaddr2);
    setUser({...user,
      city: data.sido,
      gu: data.sigungu,
      dong: data.bname,
      jibun: jibunaddr2});
    setIsOpenPost(false);
    setIsInputPost(true);
  };

  const postCodeStyle = {
    width: '100%',
    margin: '2em auto',
    textAlign: 'center'
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(user);
    RegisterUser(user)
      .then(data => {
        console.log(data)
      })
      .catch(e => {
        console.log(e)
      })
  };

  const classes = useStyles();
  const btnstyle = btnStyles();

  return (
    <div className={classes.root} id="modal">
      <form onSubmit={handleRegister}>
      <h1 className={classes.h1}>????????????</h1>
      <hr className={classes.hr} />
      <p className={classes.p}>?????????</p>
      <FormControl sx={{ m: '20px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, cus_id: e.target.value})}} placeholder="???????????? ??????????????????." />
      </FormControl><br/>
      <p className={classes.p}>????????????</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, cus_password: e.target.value})}} placeholder="??????????????? ??????????????????." />
      </FormControl>
      <p className={classes.p}>???????????? ??????</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="??????????????? ??? ??? ??? ??????????????????." />
      </FormControl>
      <p className={classes.p}>??????</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, username: e.target.value})}} placeholder="????????? ??????????????????." />
      </FormControl>
      <p className={classes.p}>????????????</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, PhoneNumber: e.target.value})}} placeholder="'-'???????????? ????????? ??????" />
      </FormControl>
      <p className={classes.p}>?????????</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, Email: e.target.value})}} placeholder="???????????? ??????????????????." />
      </FormControl>
      <p className={classes.p}>??????</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
      {isInputPost ? (
          <OutlinedInput defaultValue={user.city + " " + user.gu + " " + user.dong + " " + user.jibun} style={{width: '100%'}}/>): null}
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={onChangeOpenPost}>????????????</Button>
      </FormControl>
      <div>
        {isOpenPost ? (<DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />): null}
      </div>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <Button type="submit" variant="contained" className={btnstyle.btn } onClick={()=>navigate('/login', { replace: true })}>????????????</Button>
      </FormControl>
      </form>
    </div>
  );
}

export default Register;