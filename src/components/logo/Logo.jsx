import logo from "../../assets/logo.png"
import "./Logo.scss"

const Logo = () => {
    return (  
        <div>
            <a className="flex justify-center items-center" href="./">
                <img className="logo" src={logo} alt="logo" />
                <h1 className="logo-title">Muvi</h1>
            </a>
        </div>
    );
}
 
export default Logo;