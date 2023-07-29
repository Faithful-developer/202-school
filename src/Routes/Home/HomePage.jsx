import './HomePage.scss'
import Header from "../../containers/Header";
import {Helmet} from 'react-helmet'
import Mission1 from "../../assets/images/icons/mission-1.svg"
import Mission2 from "../../assets/images/icons/mission-2.svg"
import Mission3 from "../../assets/images/icons/mission-3.svg"
import Footer from "../../containers/Footer";
import MobileHeader from "../../containers/MobileHeader";
import {useState} from "react";

const HomePage = () => {
    const [burger, setBurger] = useState(false);
    if (burger === true) {
        document.body.style.overflowY = 'hidden'
    } else{
        document.body.style.overflowY = ''
    }
    return (
        <>
            <Helmet>
                <title>
                    202-school | Home page
                </title>
            </Helmet>
            <section className="intro">
                <Header burger={burger} setBurger={setBurger}/>
                <MobileHeader burger={burger}/>
                <div className="container">
                    <div className="content">
                        <h1>
                            Welcome to <br/> 202 <span className="coral">school</span>
                        </h1>
                        <p>
                            If only I had it, I would increase the salary of the primary school teacher 10 times. I
                            myself worked at a university, so I know how difficult this work is. Our biggest mistake was
                            losing teachers in schools. We have 11 years of education in schools, but we cannot restore
                            previous teachers. Don't be offended; no one will if I don't say it. Now there are no
                            teachers like before.
                            <br/>
                            <br/>
                            <span className="coral">
                                Sh.M.Mirziyoyev President of Uzbekistan
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <section className="facts">
                <div className="container">
                    <div className="facts-left">
                        <h2>Our school missions</h2>
                    </div>
                    <div className="facts-right">
                        <ul className="mission">
                            <li className="mission-list">
                                <img src={Mission1}
                                     alt="img"
                                     className="mission-list-image"/>
                                <div className="text">
                                    <p className="mission-list-title">
                                        Empowering High School Leaders: Student Leadership Development Program
                                    </p>
                                    <p className="mission-list-content">
                                        Our goal is to provide high school students with the tools they need to become
                                        responsible and compassionate leaders in their communities by providing them
                                        with a
                                        comprehensive leadership development curriculum.

                                    </p>
                                </div>
                            </li>
                            <li className="mission-list">
                                <img src={Mission2}
                                     alt="img"
                                     className="mission-list-image"/>
                                <div className="text">
                                    <p className="mission-list-title">
                                        Enhancing Education Excellence: Quality Improvement Initiative
                                    </p>
                                    <p className="mission-list-content">
                                        Our goal is to create a learning environment that encourages students to strive
                                        for
                                        academic achievement and encourages them to learn for the rest of their lives by
                                        introducing new approaches to teaching and learning.
                                    </p>
                                </div>
                            </li>
                            <li className="mission-list">
                                <img src={Mission3}
                                     alt="img"
                                     className="mission-list-image"/>
                                <div className="text">
                                    <p className="mission-list-title">
                                        Envisioning Knowledge Advancement: Education Research and Analysis Project
                                    </p>
                                    <p className="mission-list-content">
                                        As part of our commitment to enriching the educational experience for students,
                                        we
                                        do extensive research and analysis on pedagogical methods, curriculum efficacy,
                                        and
                                        student learning outcomes to better understand where we can make a difference.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="comments">
                <div className="container">
                    <h2 className="title">
                        Delivering Parents' Insights
                    </h2>
                    <ul className="comment-list">
                        <li className="comment-list-item">
                            <div className="comment-list-item-text">
                                "Our high school embraces each student with care, encouraging academic growth and
                                self-discovery, making us confident that our child's future is in capable hands."
                            </div>
                            <p className="comment-list-item-person-name">
                                Saida Kamolova
                            </p>
                        </li>
                        <li className="comment-list-item">
                            <div className="comment-list-item-text">
                                "We are grateful for the school's commitment to academic excellence, providing a
                                stimulating environment that helps our child thrive and reach their full potential."
                            </div>
                            <p className="comment-list-item-person-name">
                                Dilfuza Juraeva
                            </p>
                        </li>
                        <li className="comment-list-item">
                            <div className="comment-list-item-text">
                                "The school's emphasis on character development and diverse opportunities has shaped our
                                child into a well-rounded individual, ready to face life's challenges with confidence."
                            </div>
                            <p className="comment-list-item-person-name">
                                Feruza Alieva
                            </p>
                        </li>

                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePage
