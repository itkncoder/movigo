import HomeTop from "../../components/home-top/HomeTop"
import HomeCatalogs from "../../components/home-catalogs/HomeCatalogs"
import AdsHome from "../../components/AdsHome"

import Helmet from "react-helmet"

const Home = () => {
    
    window.scroll(0, 0);

    return (  
        <div>           
            <div className="flex flex-col justify-between">
                <HomeTop/>
                <main>
                    <div className="max-w-screen-lg mx-auto">
                        <AdsHome/>
                    </div>
                    <HomeCatalogs/>
                </main>
            </div>
            <div className="mt-200 md:mt-10"></div>
        </div>
    );
}
 
export default Home;