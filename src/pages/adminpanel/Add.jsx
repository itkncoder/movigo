import axios from "axios"
import { useParams } from "react-router-dom"

const Add = () => {

    const { name } = useParams()

    return (
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0">
            <div className="max-w-screen-lg mx-auto relative">
                <h1 className="text-4xl font-semibold absolute top-14 left-0 uppercase">{name}</h1>
            </div>
            <form className="flex justify-between items-center h-full max-w-screen-lg mx-auto gap-2 divide-x-2 divide-gray-600">
                <div className="flex flex-col items-start justify-center gap-2 bg-gray-800 py-14 rounded-2xl px-10">
                    <h1 className="uppercase text-lg">INFORMATION ABOUT {name}</h1>
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Desc..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Genres..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                </div>
                <div className="flex flex-col items-start bg-gray-800 py-14 rounded-2xl px-10">
                    <h1 className="text-xl">VIDEO</h1>
                    <input required className="outline-0 border-0 bg-gray-700 rounded-md" type="file" name="" id="" />

                    <h1 className="mt-4 text-xl">POSTER</h1>
                    <input required className="outline-0 border-0 bg-gray-700 rounded-md" type="file" name="" id="" />
                </div>
                <div className="bg-gray-800 py-14 rounded-2xl px-10">
                    <h1 className="mt-4 text-xl">SUBMIT</h1>
                    <input className="bg-yellow-500 mt-1 cursor-pointer text-white px-10 rounded-lg hover:bg-yellow-600 py-2" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Add