import { useRef, useState } from "react";

export default function Login() {
  const [emailIsValid, setEmailIsValid] = useState(false);
  
  const email = useRef();
  const password = useRef();
  
  const onSubmit = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if(!emailValue.includes('@')){
      setEmailIsValid(true);
      return;
    }

    setEmailIsValid(false);

  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            id="email"
            type="email"
            name="email"
          />
          <div className="control-error">{emailIsValid && <p>Please email address</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
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
