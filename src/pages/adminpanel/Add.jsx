import axios from "axios"
import { useParams } from "react-router-dom"

const Add = () => {

    const { name } = useParams()

    return (
        <div className="absolute w-full h-full bg-gray-900 z-50 top-0 right-0">
            <form className="flex justify-between items-center h-full gap-2 max-w-screen-lg mx-auto">
                <div className="flex flex-col items-start justify-center gap-2">
                    <h1>Information about movie</h1>
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Desc..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Genres..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                    <input required className="text-gray-800 px-6 py-2 rounded-lg" type="text" placeholder="Name..." />
                </div>
                <div className="flex flex-col items-start">
                    <h1 className="">Video file</h1>
                    <input required className="outline-0 border-0 bg-gray-700 rounded-md" type="file" name="" id="" />

                    <h1 className="mt-4">Poster</h1>
                    <input required className="outline-0 border-0 bg-gray-700 rounded-md" type="file" name="" id="" />
                </div>
                <div>
                    <input className="bg-yellow-500 cursor-pointer text-white px-10 rounded-lg hover:bg-yellow-600 py-2" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Add