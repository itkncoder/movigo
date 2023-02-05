import userphoto from "../../assets/images/user.png"
import "./UserMini.scss"

const UserMini = () => {
    return (  
        <div className="flex justify-center items-center gap-2">
            <img className="user-photo" src={userphoto} alt="user profile photo" />
            <div className="flex flex-col items-start">
                <h3 className="user-name">Kinoman #294</h3>
            </div>
        </div>
    );
}
 
export default UserMini;