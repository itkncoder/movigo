import "./SliderTitle.scss"
import Btn1 from "../UI/btn1/Btn1"
import {memo} from "react"

const SliderTitle = ({props}) => {
    return (  
        <section className="wrapper-carousel slider-img-div relative flex justify-between items-start max-h-200">
            <img className="slider-img border border-[#151A20] max-h-200" src={props.img} alt="movie" />
            <div className="mt-12 lg:mt-20 sm:ml-5 ml-2 flex w-full justify-between items-end">
                <div className="slidertitle flex flex-col items-start gap-2">
                    <div className="flex flex-col gap-1.5 lg:gap-0">
                        <h1 className="home-top-type text-4xl"><i className="fa-solid fa-fire-flame-curved"></i> {props.type}</h1>
                        <h2 className="home-top-name text-5xl md:text-6xl lg:text-7xl max-w-lg">{props.name}</h2>
                        <p className="home-top-version text-3xl max-w-lg">
                            <i className="fa-solid fa-film"></i> {props.version}
                        </p>
                        <p className="home-top-desc max-w-xs md:max-w-lg">{props.desc}</p>
                    </div>

                    <div className="flex justify-start items-center home-top-other hidden sm:flex">
                        <p className="home-top-other-item"><p>TIME: </p>{props.time}</p>
                    </div>

                    <div className="mt-2 hover:-translate-y-0.5 w-fit cursor-pointer transition-all duration-300">
                        <Btn1><a href="./">Watch</a></Btn1>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default memo(SliderTitle);