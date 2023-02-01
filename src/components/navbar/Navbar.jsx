import "./Navbar.scss"

const Navbar = () => {
    return (  
        <nav>
            <ul className="flex justify-center items-center">
                <li className="navbar-item"><a href="./">home</a></li>
                <li className="navbar-item"><a href="./">films</a></li>
                <li className="navbar-item"><a href="./">multifilms</a></li>
                <li className="navbar-item"><a href="./">anime</a></li>
                <li className="navbar-item"><a href="./">news</a></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;