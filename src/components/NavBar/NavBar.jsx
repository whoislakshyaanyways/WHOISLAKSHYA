import './NavBar.css'

function NavBar({handleChange, isChecked}){
    return(
        <div className="navbar-container">
            <header>
                <div className="navbar">
                    <div className="logo"> <span className="highlight">WHOISLAKSHYAANYWAYS</span></div>
                    <nav className="Routes">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            {/* <li><a href="#projects">Projects</a></li> */}
                            <li><a href="#contactMe">Contact Me</a></li>
                        </ul>
                    </nav>
                    
                    <div className="nav-buttons">
                        <label className="switch-button">
                            <input type="checkbox" 
                                    id="check"
                                    className="toggle"
                                    onChange={handleChange}
                                    checked={isChecked} />
                            <span className="slider-button"></span>
                        </label>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default NavBar;
