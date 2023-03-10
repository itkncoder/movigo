import SliderItem from "../slider-item/SliderItem"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import {useMemo, memo} from "react"

import {useSelector} from "react-redux"

const HomeTop = () => {

    const {sliders} = useSelector(state => state)

    return (  
        <div className="home-top px-2 max-h-200 min-h-[600px]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <div className="flex relative items-center justify-center max-h-200">
                    {sliders.map((item, index) => 
                        <SwiperSlide key={index} className="max-h-200">
                            <SliderItem props={item} />
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </div>
    );
}
 
export default memo(HomeTop);