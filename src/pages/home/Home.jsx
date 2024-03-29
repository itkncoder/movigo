import HomeTop from "../../components/home-top/HomeTop"
import HomeCatalogs from "../../components/home-catalogs/HomeCatalogs"
import AdsHome from "../../components/AdsHome"

import { Helmet } from "react-helmet"

import { useEffect } from "react"

const Home = () => {
    
    useEffect(() => {
        window.scroll(0, 0);
    }, [])

    return (  
        <div>

            <Helmet>
                <title>Movigo - online kinolar, tarjima qilingan holda va HD sifatda ko'ring</title>
                <meta name="title" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda"/>
                <meta name="description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar"/>
                <meta name="keywords" content="movigo, online, kino, movi go, muvigo, muvi, kinoteatr, online kino, filmlar, multfilmlar, anime, yangi kinolar, yangi seriallar, seriallar"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Uzbek"/>
                <meta name="author" content="Movigo"/>

                <meta property="og:title" content="Movigo" />
                <meta property="og:site_name" content="Movigo"/>
                <meta property="og:description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar" />
                <meta property="og:image" content="../../assets/logo.png" />
            </Helmet>

            <div className="flex flex-col justify-between">
                <HomeTop/>
                <main>
                    <div className="max-w-[1170px] mx-auto mt-2">
                        <AdsHome/>
                    </div>
                    <HomeCatalogs/>
                </main>
            </div>
        </div>
    );
}
 
export default Home;