import './StudentCard.scss'

const StudentCard = ({studentPhoto, studentName, studentComment}) => {
    return (
        <li className='student-list-item'>
            <img src={studentPhoto}
                 alt="img"
                 className='student-list-item-img'
            />
            <div className="student-list-item-content">
                <p className='student-list-item-content-name'>
                    {studentName}
                </p>
                <p className='student-list-item-content-comment'>
                    {studentComment}
                </p>
            </div>
        </li>
    )
}

export default StudentCard;
