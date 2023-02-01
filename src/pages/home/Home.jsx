import Footer from "../../components/footer"
import HomeTop from "../../components/home-top"
import HomeCatalogs from "../../components/home-catalogs"
import "./Home.scss"

const Home = () => {

    return (  
        <div>
            <div className="">
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