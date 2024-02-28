import React, { useState } from "react";
import classes from './Register.module.css';
import RegisterUser from '@/lib/RegisterUser.js'
export default function Register({onFormSwitch}){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        RegisterUser();
    }

    return (
        <div className={classes.authformcontainer}>
            <h2>Register</h2>
        <form className={classes.registerform} onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className={classes.linkbtn} onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}