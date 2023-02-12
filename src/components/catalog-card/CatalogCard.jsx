import {Link} from "react-router-dom"
import {memo} from 'react'

const CatalogCard = ({props}) => {
    return (  
        <div className="shadow-gray-900 rounded-md py-2">
            <Link to={props.link ? props.link : ''}>
                <img src={props.poster} alt="movie" className="rounded-md w-auto md:w-60 h-80 hover:scale-102 transition-all object-cover" />
                <div className="pb-4 flex flex-col items-start pt-1">
                    <h1 className="poppins truncate w-56">{props.title ? props.title : ''}</h1>
                    <p className="text-gray-500 truncate w-52">{props.genres ? props.genres : ''}</p>
                </div>
            </Link>
        </div>
    );
}

export default memo(CatalogCard);