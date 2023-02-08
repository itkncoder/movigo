import userphoto from "../../assets/images/user.png"
import "./UserMini.scss"

const UserMini = () => {
    return (  
        <div className="flex justify-center items-center gap-2 mr-12 lg:mr-0">
            <img className="user-photo hidden sm:flex" src={userphoto} alt="user profile photo" />
            <div className="flex flex-col items-start">
                <h3 className="user-name">Kinoman #294</h3>
            </div>
        </div>
    );
}
 
export default UserMini;