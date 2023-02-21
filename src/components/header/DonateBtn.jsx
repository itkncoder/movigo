import {memo} from "react"
import {Link} from "react-router-dom"

const DonateBtn = () => {
    return (
        <Link to="/donate" className="mr-12 md:mr-0 px-6 font-semibold py-1.5 rounded-md ring-1 ring-gray-300 hover:bg-yellow-500 transition-all hover:ring-yellow-600">Donate</Link>
    )
}

export default memo(DonateBtn)