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
        <div className="wrapper-category">
            
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