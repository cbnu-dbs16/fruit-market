import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { RegisterUser } from '../../action/users';

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
  registerbtn: {
    background: 'linear-gradient(45deg, #A814E7 30%, #288CD2 92%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '18px',
    height: 55,
    padding: '0 30px',
  },
  p: {
    float: 'left'
  }
});

const Register = () => {
  const [user, setUser] = useState({
    userid: '',
    userpwd: '',
    username: '',
    userphonenum: '',
    useremail: '',
    useraddr: {
      city: '',
      gu: '',
      dong: '',
      jibun: ''
    }
  })

  const [isOpenPost, setIsOpenPost] = useState(false);
  const [isInputPost, setIsInputPost] = useState(false);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
    setIsInputPost(false);
  };

  const onCompletePost = (data) => {
    console.log(data);
    const jibunaddr = data.jibunAddress.match(/[0-9|-]/g).join('');
    console.log(jibunaddr);
    setUser({...user, useraddr: {
      city: data.sido,
      gu: data.sigungu,
      dong: data.bname,
      jibun: jibunaddr}});
    setIsOpenPost(false);
    setIsInputPost(true);
  };

  const postCodeStyle = {
    width: '100%',
    margin: '2em auto',
    textAlign: 'center',
  };

  const handleRegister = e => {
    e.preventDefault();
    console.log(user);
    RegisterUser(user)
      .then(e => {
            console.log(e)
      })
      .catch(e => {
            console.log(e)
      })
  };

  const classes = useStyles();

  return (
    <div className={classes.root} id="modal">
      <form onSubmit={handleRegister}>
      <h1 className={classes.h1}>회원가입</h1>
      <hr className={classes.hr} />
      <p className={classes.p}>아이디</p>
      <FormControl sx={{ m: '20px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, userid: e.target.value})}} placeholder="아이디를 입력해주세요." />
      </FormControl><br/>
      <p className={classes.p}>비밀번호</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, userpwd: e.target.value})}} placeholder="비밀번호를 입력해주세요." />
      </FormControl>
      <p className={classes.p}>비밀번호 확인</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="비밀번호를 한 번 더 입력해주세요." />
      </FormControl>
      <p className={classes.p}>이름</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, username: e.target.value})}} placeholder="이름을 입력해주세요." />
      </FormControl>
      <p className={classes.p}>전화번호</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, userphonenum: e.target.value})}} placeholder="'-'제외하고 숫자만 입력" />
      </FormControl>
      <p className={classes.p}>이메일</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput onChange={(e)=>{setUser({...user, useremail: e.target.value})}} placeholder="이메일을 입력해주세요." />
      </FormControl>
      <p className={classes.p}>주소</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
      {isInputPost ? (
          <OutlinedInput defaultValue={user.useraddr.city+" "+user.useraddr.gu+" "+user.useraddr.dong+" "+user.useraddr.jibun} style={{width: '100%'}}/>): null}
        {/* <OutlinedInput onChange={(e)=>{
            setUser({...user, useraddr: {extra: e.target.value}})}} placeholder="상세주소" style={{width: '100%'}}/> */}
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={onChangeOpenPost}>주소검색</Button>
      </FormControl>
      <div>
        {isOpenPost ? (<DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />): null}
      </div>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <Button type="submit" variant="contained" className={classes.registerbtn}>회원가입</Button>
      </FormControl>
      </form>
    </div>
  );
}

export default Register;