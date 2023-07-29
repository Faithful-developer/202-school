import './ContactPage.scss'
import {useState} from "react";
import Header from "../../containers/Header";
import MobileHeader from "../../containers/MobileHeader";
import Footer from "../../containers/Footer";

const ContactPage = () => {
    const [burger, setBurger] = useState(false);
    if (burger === true) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = ''
    }
    return (
        <>
            <div className="intro-contact">
                <Header burger={burger} setBurger={setBurger}/>
                <MobileHeader burger={burger}/>
                <div className="container">
                    <h1 className='title'>Contact</h1>
                    <div className="contact-details">
                        <a href="tel:998712161364" className="phone">
                            Phone: +998 (71) 216-13-64
                        </a>
                        <a href="mailto:info@202-school.uz" className="email">
                            Email: info@202-school.uz
                        </a>
                    </div>
                    <div className="location">
                        <iframe
                            title='locaton'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.105507639107!2d69.18043397677788!3d41.263038603697886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae894682faea7d%3A0x724c6a57a54c3610!2s202-maktab!5e0!3m2!1sen!2s!4v1690630290518!5m2!1sen!2s"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage;
