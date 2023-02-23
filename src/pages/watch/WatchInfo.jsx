import { Link } from "react-router-dom"
import { memo } from "react"

const WatchInfo = ({watchingMovieItem}) => {
    return (
        <div className="flex items-start justify-start gap-8 mt-8 flex-col md:flex-row">
            <div className="shadow-gray-900 rounded-md py-2 w-full md:w-fit flex flex-col justify-center items-center">
                <img src={watchingMovieItem?.poster} alt="movie" className="flex items-center w-72 md:items-start rounded-md h-96 object-cover" />
            </div>
            <div className="flex flex-col gap-5">
                <table>
                    <tbody className="flex justify-start flex-col mt-8 gap-2">
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Yil:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300"><p>{watchingMovieItem?.year}</p></td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Davlat:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300"><Link to={`/filter/country?id=${watchingMovieItem?.country}`}>{watchingMovieItem?.country}</Link></td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Janr:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300"><Link to={`/filter/genre?id=${watchingMovieItem?.genres}`}>{watchingMovieItem?.genres}</Link></td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Vaqt:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">{watchingMovieItem?.duration} daqiqa</td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Til:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">{watchingMovieItem?.language}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p className="text-gray-300 text-sm max-w-2xl">{watchingMovieItem?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default memo(WatchInfo)