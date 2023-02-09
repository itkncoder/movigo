import AdsHome from "../../components/AdsHome"
import video from "../../assets/videos/video.mp4"
import ReactPlayer from 'react-player';
import img from "../../assets/images/card-img.png"
import {Link} from "react-router-dom"

const Watch = () => {

    window.scroll(0, 0)

    return (
        <>
            <div className="px-2 max-widther mx-auto mt-32 xl:px-0">
                <div>
                    <div>
                        <div className="mb-2 md:mb-4 mt-6">
                            <h1 className="poppins my-3 text-3xl font-semibold">Happy birthday without me</h1>
                        </div>
                        <div className="flex items-start justify-start gap-8 mt-8 flex-col md:flex-row">
                            <div className="shadow-gray-900 rounded-md py-2">
                                <img src={img} alt="movie" className="rounded-md w-72 h-96 hover:scale-102 transition-all object-cover" />
                            </div>
                            <div className="flex flex-col gap-5">
                                <table className="flex justify-start flex-col mt-8 gap-2">
                                    <tr>
                                        <td className="w-28 text-gray-400 font-semibold text-lg">Год:</td>
                                        <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-200"><Link to="./">2019</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="w-28 text-gray-400 font-semibold text-lg">Страна:</td>
                                        <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-200"><Link to="./">Франция</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="w-28 text-gray-400 font-semibold text-lg">Жанр:</td>
                                        <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-200"><Link to="./">Драма</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="w-28 text-gray-400 font-semibold text-lg">Стоимость:</td>
                                        <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">Подписка</td>
                                    </tr>
                                    <tr>
                                        <td className="w-28 text-gray-400 font-semibold text-lg">Возраст:</td>
                                        <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">10+</td>
                                    </tr>
                                </table>
                                <div>
                                    <p className="text-gray-300 text-sm max-w-md">lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <ReactPlayer
                        url={video}
                        width="100%"
                        height="auto"
                        controls
                    />
                    <div className="py-3 flex items-center justify-start gap-6 my-2 bg-gray-800 rounded-lg px-5">
                        <div className="flex items-center justify-start gap-2">
                            <i className="fa-solid fa-eye cursor-pointer bg-[#151A20] w-10 h-10 flex justify-center items-center rounded-md text-xl cursor-pointer transition-all hover:text-gray-200 text-gray-100"></i>
                            <p className="text-gray-200">1204</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <i className="bg-[#151A20] w-10 h-10 flex justify-center items-center rounded-md text-xl fa-solid fa-thumbs-up cursor-pointer hover:text-gray-200 text-gray-100 active:text-yellow-500 tooltip relative hover:ring-2 ring-gray-700">
                                <p className="text-gray-200 absolute text-sm opacity-0 transition-all duration-300 mb-0 border-gray-700 border">282</p>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <AdsHome/>
                </div>
            </div>
        </>
    )
}

export default Watch