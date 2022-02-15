import logo from '../assets/logo.png';
import { NavLink, useHistory } from "react-router-dom"

function NavBar({ setUser }) {
    let history = useHistory();
    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then(setUser(''))
        .then(history.push('/'))
    }
    
    return (
        <div>
            <NavLink
                to="/" 
                exact
                > 
            <img src={logo} alt="logo"/>
            </NavLink>
            <nav>
                <p>Welcome, John Smith.</p>
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
                        Login
                        </NavLink></li>
                    <li><NavLink
                            to="/signup" 
                            exact
                            activeStyle={{
                            textDecoration: "underline",
                            }}> 
                        Signup
                        </NavLink></li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;