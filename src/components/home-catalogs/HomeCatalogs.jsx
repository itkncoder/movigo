import AdsHome from "../AdsHome"
import MovieSwiper from "../movie-swiper/MovieSwiper"
import Grid from "./grid/Grid"

import { useSelector } from "react-redux"

const HomeCatalogs = () => {

    const category = useSelector(store => store.category)

    return (  
        <div className="max-w-[1170px] mx-auto mt-24">
            
            {category.map((item, index) => 
                <MovieSwiper key={index} name={item.name} />
            )}

            <Grid/>

            <div className="mt-20">
                <AdsHome/>
            </div>
        </div>
    );
}
 
export default HomeCatalogs;