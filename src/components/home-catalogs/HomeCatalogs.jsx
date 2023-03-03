import AdsHome from "../AdsHome"
import MovieSwiper from "../movie-swiper/MovieSwiper"
import { moviesByCategory } from "../../redux/actions"
import axios from "axios"
import {API_BASE} from "../../utils/config"
import { useSelector } from "react-redux"

import {useEffect, useState} from "react"

const HomeCatalogs = () => {
    const {category, byCategory} = useSelector(store => store)

    return (  
        <div className="max-w-[1170px] mx-auto mt-24">
            
            {category.map((item, index) => 
                <MovieSwiper key={index} name={item.name} movies={byCategory[index + 1]} />
            )}

            <div className="my-8">
                <AdsHome/>
            </div>
        </div>
    );
}
 
export default HomeCatalogs;