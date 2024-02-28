import React, { useState } from "react";
import classes from "./Login.module.css"
import GetPartners from "@/lib/getPartners";
export default function Login({onFormSwitch}) 
{
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();
        GetPartners();
    }
    return (
        <div className={classes.authformcontainer}>
            <h2>Login</h2>
            <form className={classes.loginform} onSubmit={handleSubmit}>
                <label htmlFor="email">Username</label>
                <input value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="username" 
                id="username" 
                name="username" />

                <label htmlFor="password">Password</label>
                
                <input value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" />
                
                <button type="submit">
                    Log In
                </button>
            </form>
            <button className={classes.linkbtn} onClick={() => onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
