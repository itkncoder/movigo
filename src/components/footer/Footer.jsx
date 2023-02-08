import Logo from "../logo"

const Footer = () => {
    return (  
        <footer className="mt-96 md:mt-10 flex items-center justify-between px-4">
            <div className="wrapper-footer flex items-center w-full justify-between">
                <Logo/>
                <p className="text-gray-400 text-sm hidden lg:block">©️ 2023, <a href="./">muvi.uz</a>, Barcha huquqlar himoyalangan</p>
                <div className="flex jusitify-center items-center gap-4">
                    <a className="footer-contact" href="./">Quation</a>
                    <a className="footer-contact" href="./">Lisence</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;