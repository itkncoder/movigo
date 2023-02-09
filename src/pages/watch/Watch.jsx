import AdsHome from "../../components/AdsHome"
import CatalogCard from "../../components/catalog-card"
import video from "../../assets/videos/video.mp4"
import ReactPlayer from 'react-player';

const Watch = () => {

    return (
        <>
            <div className="px-2 py-2 wrapper-category xl:px-0">
                <div className="mb-4 md:mb-12">
                    <h1 className="poppins my-3 text-2xl">Odaylar nima diydi....</h1>
                </div>
                <div className="h-screen">
                    <ReactPlayer
                        url={video}
                        width="100%"
                        height="auto"
                        controls
                    />
                </div>
            </div>
        </>
    )
}

export default Watch