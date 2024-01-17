import { useState } from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";

export default function StateLogin() {
  const {
    value : emailValue,
    isNotValid : emailIsNotValid,
    inputChange : onEmailChange,
    inputBlur : onEmailBlur
  } = useInput('',(email)=>email && !email.includes("@"));

  const {
    value : passwordValue,
    isNotValid : passwordIsNotValid,
    inputChange : onPasswordChange,
    inputBlur : onPasswordBlur
  } = useInput('',(password)=>password && password.trim().length < 6);
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if(!emailIsNotValid || !passwordIsNotValid){
      return;
    }

  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailIsNotValid && 'Please enter a valid email address'}
          type="email"
          name="email"
          value={emailValue}
          onBlur={onEmailBlur}
          onChange={onEmailChange}
        />

        <Input
          label="Password"
          id="password"
          error={passwordIsNotValid && 'Please enter a valid password'}
          type="password"          
          name="password"
          value={passwordValue}
          onBlur={onPasswordBlur}
          onChange={onPasswordChange}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
