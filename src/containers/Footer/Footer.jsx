import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-left">
                    <p className="address">
                        Katta Kani Street,<br/>
                        Chilanzar District,<br/>
                        Tashkent, <br/>
                        Uzbekistan,100117
                    </p>
                    <p className="phone">
                        Call us: +9989 (71) 216-13-64
                    </p>
                </div>
                <div className="footer-right">
                    <a href="tel:998712161364" className="phone">
                        +998 (71) 216-13-64
                    </a>
                    <a href="mailto:info@202-school.uz" className="email">
                        info@202-school.uz
                    </a>
                    <p>
                        Copyright 2023. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
