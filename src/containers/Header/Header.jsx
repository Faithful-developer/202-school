import './Header.scss'
import {Link} from "react-router-dom";

const Header = ({burger, setBurger}) => {
    return (
        <header className="header">
            <div className="container">
                <ul className="header-linker">
                    <li className="header-linker-item logo">
                        <Link to={'/'} className="logo">
                            202-school
                        </Link>
                    </li>
                    <li className="header-linker-item">
                        <Link to="/">
                            home
                        </Link>
                    </li>
                    <li className="header-linker-item">
                        <Link to={"/about"}>
                            about
                        </Link>
                    </li>
                </ul>
                <Link to="/contact" className="contact">
                    Contact us
                </Link>
                <button
                    onClick={event => setBurger(!burger)}
                    className={`burger-button ${burger ? 'clicked' : ''}`
                    }>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
        </header>
    )
}
export default Header
