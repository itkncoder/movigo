import img from "../../../assets/images/card-img.png"

const Grid = () => {
    return (
        <>
            <h1 className="text-3xl font-semibold mt-5 mb-10 w-fit hover:underline"><a href="./">NEWS</a></h1>
            <div className="h-120">
                <div className="grid grid-rows lg:grid-cols-2 gap-3">
                    <div className="h-120 relative">
                        <img className="w-full h-120 object-cover rounded-2xl" src={img} alt="" />
                        <p className="text-3xl absolute bottom-14 left-4 font-semibold">Hello world</p>
                        <a className="absolute bottom-0 right-0 py-2.5 px-8 bg-yellow-500 hover:bg-yellow-600 transition-all rounded-tr-lg rounded-bl-lg text-lg font-semibold" href="./">Смотреть</a>
                    </div>
                    <div className="grid grid-rows-2 h-auto gap-3 md:gap-0 md:h-120">
                        <div className="grid grid-rows-2 md:grid-cols-2 gap-3">
                            <div className="relative h-60">
                                <img className="w-full h-60 object-cover rounded-2xl" src={img} alt="" />
                                <p className="text-3xl absolute bottom-14 left-4 font-semibold">Hello world</p>
                                <a className="absolute bottom-0 right-0 py-2.5 px-8 bg-yellow-500 hover:bg-yellow-600 transition-all rounded-tr-lg rounded-bl-lg text-lg font-semibold" href="./">Смотреть</a>
                            </div>
                            <div className="relative h-60">
                                <img className="w-full h-60 object-cover rounded-2xl" src={img} alt="" />
                                <p className="text-3xl absolute bottom-14 left-4 font-semibold">Hello world</p>
                                <a className="absolute bottom-0 right-0 py-2.5 px-8 bg-yellow-500 hover:bg-yellow-600 transition-all rounded-tr-lg rounded-bl-lg text-lg font-semibold" href="./">Смотреть</a>
                            </div>
                        </div>
                        <div className="relative h-62">
                            <img className="w-full h-62 object-cover rounded-2xl" src={img} alt="" />
                            <p className="text-3xl absolute bottom-10 left-4 font-semibold">Hello wordsld</p>
                            <a className="absolute bottom-0 right-0 py-2.5 px-8 bg-yellow-500 hover:bg-yellow-600 transition-all rounded-tr-lg rounded-bl-lg text-lg font-semibold" href="./">Смотреть</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid