import HomeTop from "../../components/home-top/HomeTop"
import HomeCatalogs from "../../components/home-catalogs/HomeCatalogs"
import AdsHome from "../../components/AdsHome"

import Helmet from "react-helmet"

const Home = () => {
    
    window.scroll(0, 0);

    return (  
        <div>

            <Helmet>
                <title>Movigo - Movigo - online kinolar, tarjima qilingan holda va HD sifatda ko'ring</title>
                <meta name="title" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda"/>
                <meta name="description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar"/>
                <meta name="keywords" content="movigo, online, kino, movi go, muvigo, muvi, kinoteatr, online kino, filmlar, multfilmlar, anime, yangi kinolar, yangi seriallar, seriallar"/>
                <meta name="robots" content="index, follow"/>
                <meta name="description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Uzbek"/>
                <meta name="author" content="Movigo"/>
                <meta property="og:title" content="Movigo" />
                <meta property="og:site_name" content="Movigo"/>
                <meta property="og:description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar" />
            </Helmet>

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