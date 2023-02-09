import HomeTop from "../../components/home-top"
import HomeCatalogs from "../../components/home-catalogs"
import AdsHome from "../../components/AdsHome"

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
        </div>
    );
}
 
export default Home;