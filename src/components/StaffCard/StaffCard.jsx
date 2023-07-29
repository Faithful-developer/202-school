import './StaffCard.scss'
import PlusSign from '../../assets/images/icons/plus.svg'

const StaffCard = ({staffMemberPhoto, staffMemberName, staffMemberPosition, isActive, onToggle, staffMemberInsight}) => {

    return (
        <li className={`staff-list-item ${isActive ? 'active' : ''}`}>
            <div className="info-1">
                <img src={staffMemberPhoto} alt="img" className="staff-list-item-photo"/>
                <div className="staff-list-item-info">
                    <p className="staff-list-item-info-name">
                        {staffMemberName}
                    </p>
                    <p className="staff-list-item-info-position">
                        {staffMemberPosition}
                    </p>
                </div>
            </div>
            <button className={`round ${isActive ? 'active' : ''}`} onClick={onToggle}>
                <img src={PlusSign} alt="plus"/>
            </button>
            <div className="info-2">
                <p className="staff-list-item-info-name">
                    {staffMemberName}
                </p>
                <p>
                    {staffMemberInsight}
                </p>
            </div>
        </li>
    )
}

export default StaffCard;
