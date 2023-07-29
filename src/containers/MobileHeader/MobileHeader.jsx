import './MobileHeader.scss';
import {Link} from "react-router-dom";

const MobileHeader = ({burger}) => {
    return (
        <>
            <div className={`shadow ${burger ? 'active' : ''}`}/>
            <div className={`mobile-header ${burger ? 'active' : ''}`}>
                <ul className="mobile-header-linker">
                    <li className="mobile-header-linker-item">
                        <Link to='/'>
                            home
                        </Link>
                    </li>
                    <li className="mobile-header-linker-item">
                        <Link to='/about'>
                            about
                        </Link>
                    </li>
                    <li className="mobile-header-linker-item">
                        <Link to='/contact' className="contact">
                            contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MobileHeader
