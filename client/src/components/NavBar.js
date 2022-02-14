import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <NavLink
                to="/" 
                exact
                > 
            <img src={logo} />
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
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;