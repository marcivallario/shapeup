import { useHistory } from "react-router-dom";
import { useState } from 'react';

function Signup({ setUser }) {
    let history = useHistory();
    const [ formData, setFormData ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(setUser)
                history.push("/")
            }
        })
        setFormData({
            email: '',
            password: ''
        })

    }

    return (
        <div id="signup">
            <h2>Sign Up</h2>
            <form id="signup-form" onSubmit={handleSubmit}>
                <input name="first_name" placeholder="First Name" onChange={handleChange}></input>
                <input name="last_name" placeholder="Last Name" onChange={handleChange}></input>
                <input name="email" placeholder="Email" onChange={handleChange}></input>
                <input name="password" type="password" placeholder="Password" onChange={handleChange}></input>
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    )
}

export default Signup;