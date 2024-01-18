import { useState } from "react";

const SimpleForm = () =>{
    const [email,setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const onSubmit = (e) =>{
        e.preventDefault();
        const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
        
        if(!email || !pattern.test(email)){
            setEmailValid(false);
            return;
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                <label htmlFor="email">Name</label>
                <input 
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <div className="control-error">{!emailValid && <p>error</p>}</div>
                </div>
            </div>

            <p className="form-actions">
                <button className="button">Login</button>
            </p>
        </form>
    )
};

export default SimpleForm;