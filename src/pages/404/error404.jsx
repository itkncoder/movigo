import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="h-96 flex flex-col items-center justify-center mt-32">
            <h1 className="text-2xl font-semibold">Bunday sahifa / film mavjud emas :(</h1>
            <Link className="mt-4 font-semibold px-5 py-2 rounded-lg bg-gray-800 ring-2 ring-gray-700 active:bg-gray-600 transition-all hover:bg-gray-700" to="/">Bosh sahifaga qaytish</Link>
        </div>
    )
}

export default Error