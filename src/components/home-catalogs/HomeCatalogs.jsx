import AdsHome from "../AdsHome"
import MovieSwiper from "../movie-swiper/MovieSwiper"

import { useSelector } from "react-redux"

const HomeCatalogs = () => {
    const {movies, moviesLoadingStatus, category} = useSelector(store => store)

    return (  
        <div className="max-w-[1170px] mx-auto mt-24">
            
            {category.map((item, index) => 
                <MovieSwiper key={index} name={item.name} movies={movies.filter(i => item.name === i.category?.name)} />
            )}

            <div className="my-8">
                <AdsHome/>
            </div>
        </div>
    );
}
 
export default HomeCatalogs;