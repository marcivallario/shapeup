import logo from '../assets/logo.png';

function NavBar() {
    return (
        <div>
            <img src={logo} />
            <nav>
                <p>Welcome, John Smith.</p>
                <ul>
                    <li>Home</li>
                    <li>Generator</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;