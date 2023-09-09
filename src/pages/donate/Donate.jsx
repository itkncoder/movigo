import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

const Donate = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const [copied, setCopied] = useState(false)

    const onCopy = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    return (
        <div className="my-28 min-h-96 flex justify-center items-start px-2 w-full">
            <Helmet>
                <title>♡ Movigo ♡ - Loyihani qo'llab-quvvatlang :)</title>
            </Helmet>
            <div className="flex flex-col items-center mt-20 w-full">

                <p className="md:text-2xl text-sm font-semibold text-gray-200 max-w-2xl py-3 text-center w-full">Siz loyihani qollab quvvatlashingiz mumkin :)))</p>

                <div className="flex flex-col w-120 items-center" >
                    <h1 className="w-96 font-semibold text-lg md:text-3xl text-gray-100 py-2.5 md:py-5 md:px-8 bg-gray-800 rounded-2xl mt-4 mb-2 sm:w-fit"><span className="relative w-96 ml-1 md:ml-3 sm:w-fit">8600 1404 6558 4895 <span onClick={() => {
                        onCopy()
                        navigator.clipboard.writeText("8600140465584895")
                    }} className="absolute -right-5 -bottom-2 text-xs cursor-pointer">{!copied ? "copy" : "copied"}</span> </span></h1>

                    <a target="_blank" href="https://payme.uz/@lieonsa" className="hover:bg-gray-700 w-120 font-semibold text-lg md:text-3xl text-gray-100 py-3 md:py-5 px-2.5 md:px-12 bg-gray-800 rounded-2xl my-2 sm:w-fit">Payme: <span className="w-120 ml-1 md:ml-3 sm:w-fit">Movigo Uz</span></a>
                </div>
            </div>
        </div>
    )
}

export default Donate