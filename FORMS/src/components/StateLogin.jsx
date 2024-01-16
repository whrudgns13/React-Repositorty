import { useState } from "react";

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
  
  const onInputBlur = (identifier) => {
    setFormEdit(prevValues => ({...prevValues,[identifier] : true}));
    setFormEdit(prevValues => ({...prevValues,[identifier] : false}));
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onInputChange = (identifier, value) => {
    setFormValue((prevValues) => ({ ...prevValues, [identifier]: value }));
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValue.email}
            onBlur={(e)=>onInputBlur("email")}
            onChange={(e) => onInputChange("email", e.target.value)}
          />
          <div className="control-error">{emailIsValid && <p>Please email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formValue.password}
            onBlur={(e)=>onInputBlur("password")}
            onChange={(e) => onInputChange("password", e.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
