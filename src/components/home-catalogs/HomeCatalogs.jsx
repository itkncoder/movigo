import AdsHome from "../AdsHome"
import {Link} from "react-router-dom"
import MovieSwiper from "../movie-swiper/MovieSwiper"
import Grid from "./grid/Grid"

const HomeCatalogs = () => {

    const data = [
        {
            name: "FILMS"
        },
        {
            name: "POPULAR"
        },
        {
            name: "CARTOONS"
        },
        {
            name: "ANIME"
        },
    ]

    return (  
        <div className="max-w-[1170px] mx-auto mt-24">
            
            {data.map((item, index) => 
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