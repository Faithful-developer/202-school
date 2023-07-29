import './AboutPage.scss'
import Header from "../../containers/Header";
import MobileHeader from "../../containers/MobileHeader";
import StaffCard from "../../components/StaffCard";
import {useState} from "react";
import Director from '../../assets/images/director.jpeg'
import Teacher1 from '../../assets/images/teacher-1.png'
import Teacher2 from '../../assets/images/teacher-2.jpeg'
import Teacher3 from '../../assets/images/teacher-3.png'
import Teacher4 from '../../assets/images/teacher-4.png'
import Teacher5 from '../../assets/images/teacher-5.png'
import Footer from "../../containers/Footer";
import StudentCard from "../../components/StudentCard";
import Student1  from '../../assets/images/student-1.jpeg'
import Student2  from '../../assets/images/student-2.JPG'
import Student3  from '../../assets/images/student-3.jpg'
import Student4  from '../../assets/images/student-4.jpeg'

const AboutPage = () => {
    const [activeStaff, setActiveStaff] = useState(null);

    const [burger, setBurger] = useState(false);
    if (burger === true) {
        document.body.style.overflowY = 'hidden'
    } else{
        document.body.style.overflowY = ''
    }
    const handleStaffToggle = (index) => {
        setActiveStaff(index === activeStaff ? null : index);
    };
    const studentData = [
        {
            studentPhoto: Student1,
            studentName: 'Djahongir\'21',
            studentComment: 'The school\'s inclusive environment makes me feel valued and accepted'
        },
        {
            studentPhoto: Student2,
            studentName: 'Shakhnoza\'21',
            studentComment: 'I love the challenging academic programs that push me to excel.'
        },
        {
            studentPhoto: Student3,
            studentName: 'Laylo\'22',
            studentComment: 'The extracurricular activities have helped me discover my passion for sports.'
        },
        {
            studentPhoto: Student4,
            studentName: 'Shahzod\'22',
            studentComment: 'The extracurricular activities have helped me discover my passion for sports.'
        }
    ]
    const staffData = [
        {
            staffMemberPhoto: Director,
            staffMemberName: 'Barno Shodiyeva',
            staffMemberPosition: 'Director',
            staffMemberInsight: '"As the Director, my mission is to create an enriching educational environment where students can thrive academically, emotionally, and socially, while fostering a sense of community and mutual respect."'
        },
        {
            staffMemberPhoto: Teacher1,
            staffMemberName: 'Dilnoza Rakhimova',
            staffMemberPosition: 'Mathematics Teacher',
            staffMemberInsight: '"My mission is to make mathematics engaging and accessible, empowering students to build problem-solving skills and develop a deep appreciation for the beauty of numbers and patterns."'
        },
        {
            staffMemberPhoto: Teacher2,
            staffMemberName: 'Gulbahor Tursunova',
            staffMemberPosition: 'Science Teacher',
            staffMemberInsight: '"Inspiring curiosity and critical thinking in the realm of science is my mission, guiding students to explore the wonders of the natural world and encouraging them to become future scientists."'
        },
        {
            staffMemberPhoto: Teacher3,
            staffMemberName: 'Feruza Safarova',
            staffMemberPosition: 'Science Teacher',
            staffMemberInsight: '"As a science teacher, my mission is to ignite a passion for scientific inquiry, encouraging students to ask questions, conduct experiments, and understand the significance of science in our daily lives."'
        },
        {
            staffMemberPhoto: Teacher4,
            staffMemberName: 'Nilufar Abdullayeva',
            staffMemberPosition: 'History Teacher',
            staffMemberInsight: '"Unearthing the richness of the past and connecting it to the present is my mission, fostering an understanding of history that encourages empathy, tolerance, and appreciation for diverse cultures."'
        },
        {
            staffMemberPhoto: Teacher5,
            staffMemberName: 'Munisa Ibragimova',
            staffMemberPosition: 'Art Teacher',
            staffMemberInsight: '"My mission is to nurture creativity and self-expression through various art forms, helping students discover their artistic potential and use art as a powerful means of communication and self-discovery."'
        }
    ]
    return (
        <>
            <section className="intro-about">
                <Header burger={burger} setBurger={setBurger}/>
                <MobileHeader burger={burger}/>
                <div className="container">
                    <div className="content">
                        <div className="content-left">
                            <h2>About</h2>
                        </div>
                        <div className="content-right">
                            <p>
                                Welcome to our school, where learning comes alive, and dreams take flight. Our
                                holistic
                                education nurtures each student's unique potential. Our dedicated educators create
                                an
                                inclusive environment, inspiring a love for knowledge. With innovative teaching and
                                state-of-the-art facilities, we empower young minds to become confident leaders and
                                global
                                citizens. Join our thriving educational family!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="staff">
                <div className="container">
                    <h2 className="title">Meet the staff</h2>
                    <ul className="staff-list">
                        {
                            staffData.map((item, index) => (
                                <StaffCard
                                    key={index}
                                    staffMemberPhoto={item.staffMemberPhoto}
                                    staffMemberName={item.staffMemberName}
                                    staffMemberPosition={item.staffMemberPosition}
                                    staffMemberInsight={item.staffMemberInsight}
                                    isActive={index === activeStaff}
                                    onToggle={() => handleStaffToggle(index)}
                                />
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="students">
                <div className="container">
                    <h2 className='title'>
                        Our students
                    </h2>
                    <ul className="student-list">
                            {
                                studentData.map((item, index) => (
                                    <StudentCard
                                        key={index}
                                        studentPhoto={item.studentPhoto}
                                        studentName={item.studentName}
                                        studentComment={item.studentComment}
                                    />
                                ))
                            }
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default AboutPage;
