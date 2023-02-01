import Logo from "../logo"

const Footer = () => {
    return (  
        <footer className="flex items-center justify-between">
            <div className="wrapper-footer flex items-center w-full justify-between">
                <Logo/>
                <p className="text-gray-400 text-sm">© 2022, Tvimo, может содержать информацию, не предназначенную для несовершеннолетних</p>
                <div className="flex jusitify-center items-center gap-4">
                    <a className="footer-contact" href="./">Quation</a>
                    <a className="footer-contact" href="./">Lisence</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;