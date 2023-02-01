import "./SliderTitle.scss"
import Btn1 from "../UI/btn1/Btn1"

const SliderTitle = ({props}) => {
    return (  
        <div className="slidertitle flex flex-col items-start gap-2">
            <div className="flex flex-col">
                <h1 className="home-top-type"><i className="fa-solid fa-fire-flame-curved"></i> {props.type}</h1>
                <h2 className="home-top-name">{props.name}</h2>
                <p className="home-top-version">
                    <i className="fa-solid fa-film"></i> {props.version}
                </p>
                <p className="home-top-desc">{props.desc}</p>
            </div>

            <div className="flex justify-start items-center home-top-other">
                <p className="home-top-other-item"><p>KP: </p>{props.kp}</p>
                <p className="home-top-other-item"><p>IMDB: </p>{props.imbd}</p>
                <p className="home-top-other-item"><p>PG: </p>{props.pg}</p>
                <p className="home-top-other-item"><p>TIME: </p>{props.time}</p>
            </div>

            <div className="mt-2 hover:-translate-y-0.5 w-fit cursor-pointer transition-all duration-300">
                <Btn1><a href="./">By premium</a></Btn1>
            </div>
        </div>
    );
}
 
export default SliderTitle;