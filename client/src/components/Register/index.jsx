import React, { useState } from "react";
import DaumPostcode from 'react-daum-postcode';
import { Checkbox } from 'antd';
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { signupValidation } from 'src/yup';

const useStyles = makeStyles({
  root: {
      margin: '100px auto',
      textAlign: 'center',
      maxWidth: '30rem',
      // zIndex: '0'
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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
  const [user, setuser] = useState({
    userid: '',
    userpwd: '',
    username: '',
    userphonenum: '',
    useremail: '',
    useraddr: ''
  })
  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소   
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [isInputPost, setIsInputPost] = useState(false);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
    setIsInputPost(false);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '')
        extraAddr += data.bname;
      if (data.buildingName !== '')
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
    setIsInputPost(true);
    console.log(data);
  };

  const postCodeStyle = {
    width: '100%',
    margin: '2em auto',
    textAlign: 'center',
  };

  const { handleSubmit, errors, control } = useForm({
    //  resolver: yupResolver(signUpValidation),
     mode: 'onBlur',
   });
  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  // });

  const classes = useStyles();

  return (
    <div className={classes.root} id="modal">
      <h1 className={classes.h1}>회원가입</h1>
      <hr className={classes.hr} />
      <p className={classes.p}>아이디</p>
      <FormControl sx={{ m: '20px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="아이디를 입력해주세요." />
      </FormControl><br/>
      <p className={classes.p}>비밀번호</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="비밀번호를 입력해주세요." />
      </FormControl>
      <p className={classes.p}>비밀번호 확인</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="비밀번호를 한 번 더 입력해주세요." />
      </FormControl>
      <p className={classes.p}>이름</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="이름을 입력해주세요." />
      </FormControl>
      <p className={classes.p}>전화번호</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="'-'제외하고 숫자만 입력" />
      </FormControl>
      <p className={classes.p}>이메일</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <OutlinedInput placeholder="이메일을 입력해주세요." />
      </FormControl>
      <p className={classes.p}>주소</p>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
      {isInputPost ? (<OutlinedInput defaultValue={addressDetail} />): null}
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={onChangeOpenPost}>주소검색</Button>
      </FormControl>
      <div>
        {isOpenPost ? (<DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost} />): null}
      </div>
      <FormControl sx={{ m: '15px 0px', width: '100%' }} variant="standard">
        <Button variant="contained" className={classes.registerbtn}>회원가입</Button>
      </FormControl>
        {/* <Controller
          name="term"
          control={control}
          defaultValue={false}
          render={({ onChange, value }) => (
            <Checkbox
              onChange={e => onChange(e.target.checked)}
              checked={value}
            >
              약관에 동의합니다.
            </Checkbox>
          )}
        /> */}
        {/* {errors.term && <FormErrorMessage errorMessage={errors.term.message} />} */}
    </div>
  );
}

export default Register;