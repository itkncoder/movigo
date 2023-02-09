import AdsHome from "../../components/AdsHome"
import CatalogCard from "../../components/catalog-card"
import video from "../../assets/videos/video.mp4"
import ReactPlayer from 'react-player';
import img from "../../assets/images/card-img.png"

const Watch = () => {

    window.scroll(0, 0)

    return (
        <>
            <div className="px-2 max-widther mx-auto mt-32 xl:px-0">
                <div>
                    <ReactPlayer
                        url={video}
                        width="100%"
                        height="auto"
                        controls
                    />
                </div>
                <div className="mb-2 md:mb-4 mt-6">
                    <h1 className="poppins my-3 text-3xl font-semibold">Happy birthday without me</h1>
                </div>
                <div className="flex items-start justify-start gap-8 mt-8 flex-col md:flex-row">
                    <CatalogCard props={{
                        img: img    
                    }} />
                    <table className="flex justify-start flex-col mt-8 gap-2">
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Год:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">2019</td>    
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Страна:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">Франция</td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Жанр:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">Драма</td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Стоимость:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">Подписка</td>
                        </tr>
                        <tr>
                            <td className="w-28 text-gray-400 font-semibold text-lg">Возраст:</td>
                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">16+</td>
                        </tr>
                    </table>
                </div>
                <div className="mt-10">
                    <AdsHome/>
                </div>
            </div>
        </>
    )
}

export default Watch