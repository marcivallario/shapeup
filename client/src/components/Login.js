import { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";

function Login({ setUser }) {
    let history = useHistory();
    const [ loginData, setLoginData ] = useState({
        email: '',
        password: ''
    })
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())
        .then(user => {
            setUser(user)
            history.push("/")
        })
    }

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setLoginData({...loginData, [key]: value})
    }
    
    return (
        <div id="login">
            <h2>Login</h2>
            <form id="login-form" onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" onChange={handleChange}></input>
                <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                <input type="submit" value="Login"></input>
            </form>
            <div id="call-to-signup">
                <p>Not a member? <NavLink
                            to="/signup" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}>Sign up now! </NavLink></p>
            </div>
        </div>
    )
}

export default Login;