import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      <input type="submit" value="회원가입"/>
    </form>
  );
}

export default Register;