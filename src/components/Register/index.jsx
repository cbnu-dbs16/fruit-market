import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>아이디</p>
      <input type="text" {...register("userid")} />
      <p>비밀번호</p>
      <input type="password" {...register("userpwd")} />
      <p>이름</p>
      <input type="text" {...register("username")} />
      <br/>
      <input type="submit" value="회원가입"/>
    </form>
  );
}

export default Register;