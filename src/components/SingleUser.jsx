// İNCONS
import { IoMail } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

const SingleUser = ({ user }) => {
    return (
        <div className="single-user">
            <img src={user.picture.large} alt={user.name.first} />
            <div className="user-info">
                <h3>
                    {user.name.first} {user.name.last}
                </h3>
                <p className="user-email">
                    <span className="icon"><IoMail /></span>
                    {user.email}
                </p>
                <p className="user-location">
                    <span className="icon"><FaMapMarkerAlt /></span>
                    {user.location.country} | {user.location.city}
                </p>
            </div>
        </div>
    )
}
export default SingleUser