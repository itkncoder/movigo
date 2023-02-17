import { useEffect } from "react"

const Donate = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className="mt-28 h-96 flex justify-center items-start">
            <div className="flex flex-col items-center mt-20">
                <p className="text-2xl font-semibold text-gray-200 max-w-xl py-3 text-center">Pastdagi Plastik kartalar orqali loyihani qollab quvvatlashingiz mumkin :)</p>
                <h1 className="font-semibold text-3xl text-gray-100 py-5 px-12 bg-gray-800 rounded-2xl my-2">Uzcard: <span className="ml-3">8600 2008 2007 5728</span></h1>
                <h1 className="font-semibold text-3xl text-gray-100 py-5 px-12 bg-gray-800 rounded-2xl my-2">Humo: <span className="ml-3">8600 2008 2007 5728</span></h1>
            </div>
        </div>
    )
}

export default Donate