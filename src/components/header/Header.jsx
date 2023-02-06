import Logo from "../logo"
import Navbar from "../navbar"
import UserMini from "../user-mini"
import "./Header.scss"

const Header = () => {
    return (  
        <header className="flex justify-between items-center px-2">
            <Logo/>
            <Navbar/>
            <UserMini/>
        </header>
    );
}
 
export default Header;