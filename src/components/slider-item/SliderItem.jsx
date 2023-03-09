import {memo} from "react"
import {Link} from "react-router-dom"

const SliderTitle = ({props}) => {
    return (  
        <section className="wrapper-carousel cursor-grab slider-img-div relative flex justify-between items-start max-h-200">
            <img className="slider-img border border-[#151A20] max-h-200" src={props.img} alt="movie" height="780" />
            <div className="mt-20 sm:ml-5 ml-2 flex w-full justify-between items-end">
                <div className="mt-24 flex flex-col items-start gap-2">
                    <div className="flex flex-col gap-1.5 lg:gap-0">
                        <h1 className="bebas home-top-type text-5xl"><i className="fa-solid fa-fire-flame-curved"></i> {props.filmType}</h1>
                        <h1 className="text-6xl bebas md:text-6xl md:max-w-lg">{props.title}</h1>
                        {/* <p className="home-top-version text-3xl max-w-lg">
                            <i className="fa-solid fa-film"></i> {props.version}
                        </p>
                        <h1 className="home-top-desc max-w-xs md:max-w-lg">{props.desc}</h1> */}
                    </div>

                    <div className="flex justify-start items-center home-top-other hidden sm:flex">
                        <p className="text-yellow-400 text-3xl bebas"><span className="bebas">Janr: </span>{props.genre}</p>
                    </div>

                    <div className="mt-4 hover:-translate-y-0.5 w-fit cursor-pointer transition-all duration-300">
                        <Link className="rounded-lg md:rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 md:py-2.5 md:px-12" to={`/watch/${props.url}`}>Ko'rish</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default memo(SliderTitle);