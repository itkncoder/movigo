import Footer from "../../components/footer"
import HomeTop from "../../components/home-top"
import HomeCatalogs from "../../components/home-catalogs"
import "./Home.scss"

const Home = () => {

    return (  
        <div>
            <div className="flex flex-col justify-between">
                <HomeTop/>
                <main>
                    <HomeCatalogs/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}
 
export default Home;