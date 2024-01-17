import { useState } from "react";
import Input from "./Input";

export default function StateLogin() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const [formEdit, setFormEdit] = useState({
    email : false,
    password : false,
  });

  const emailIsValid = formEdit.email && !formValue.email.includes("@");
  const passwordIsValid = formEdit.password && formValue.password.trim().length < 6;
  
  const onInputBlur = (identifier) => {
    setFormEdit(prevValues => ({...prevValues,[identifier] : true}));
    
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (identifier, value) => {
    setFormValue((prevValues) => ({ ...prevValues, [identifier]: value }));
    setFormEdit(prevValues => ({...prevValues,[identifier] : false}));
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          error={emailIsValid && 'Please enter a valid email address'}
          type="email"
          name="email"
          value={formValue.email}
          onBlur={()=>onInputBlur("email")}
          onChange={(e) => onInputChange("email", e.target.value)}
        />

        <Input
          label="Password"
          id="password"
          error={passwordIsValid && 'Please enter a valid password'}
          type="password"
          name="password"
          value={formValue.password}
          onBlur={()=>onInputBlur("password")}
          onChange={(e) => onInputChange("password", e.target.value)}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
