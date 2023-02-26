import { useEffect } from "react"

const Donate = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className="my-28 min-h-96 flex justify-center items-start px-2 w-full">
            <div className="flex flex-col items-center mt-20 w-full">
                <p className="md:text-2xl text-sm font-semibold text-gray-200 max-w-xl py-3 text-center w-full">Pastdagi Plastik kartalar orqali loyihani qollab quvvatlashingiz mumkin :)</p>
                <h1 className="font-semibold text-lg md:text-3xl text-gray-100 py-3 md:py-5 px-3 md:px-12 bg-gray-800 rounded-2xl my-2 w-full sm:w-fit">Uzcard: <span className="w-full ml-1 md:ml-3 sm:w-fit">8600 2008 2007 5728</span></h1>
                <h1 className="font-semibold text-lg md:text-3xl text-gray-100 py-3 md:py-5 px-3 md:px-12 bg-gray-800 rounded-2xl my-2 w-full sm:w-fit">Humo: <span className="w-full ml-1 md:ml-3 sm:w-fit">8600 2008 2007 5728</span></h1>
            </div>
        </div>
    )
}

export default Donate