import logo from '../assets/logo.png';
import { NavLink, useHistory } from "react-router-dom"

function NavBar({ user, setUser }) {
    let history = useHistory();
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(setUser(''))
        .then(history.push('/'))
    }

    if (user) {
        return (
            <div id="header">
                <div id="logo-container">
                    <NavLink
                        to="/" 
                        exact
                        > 
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
            <nav>
                <ul>
                    <li id="welcome-greeting">Welcome, {user.first_name} {user.last_name}.</li>
                    <li><NavLink
                            to="/" 
                            exact
                            > 
                        Home
                        </NavLink></li>
                    <li><NavLink
                            to="/generate-a-workout" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        Generate
                        </NavLink></li>
                    <li><button className="auth-button" onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
        </div>
        )
    }
    
    return (
        <div id="header">
            <div id="logo-container">
                    <NavLink
                        to="/" 
                        exact
                        > 
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
            <nav>
                <ul>
                    <li><NavLink
                            to="/" 
                            exact
                            > 
                        Home
                        </NavLink></li>
                    <li><NavLink
                            to="/generate-a-workout" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        Generate
                        </NavLink></li>
                    <li><NavLink
                            to="/login" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        <button className="auth-button">Login</button>
                        </NavLink></li>
                    <li><NavLink
                            to="/signup" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        <button className="auth-button">Signup</button>
                        </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;