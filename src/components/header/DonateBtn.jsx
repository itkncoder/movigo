import {memo} from "react"
import {Link} from "react-router-dom"

const DonateBtn = () => {
    return (
        <Link to="/donate" className="flex items-center gap-1 mr-12 md:mr-0 px-6 font-semibold py-1.5 rounded-md ring-2 ring-gray-300 hover:bg-yellow-500 transition-all hover:ring-yellow-500">Donate <p className="text-xl ml-1 text-red-400">♡</p></Link>
    )
}

export default memo(DonateBtn)