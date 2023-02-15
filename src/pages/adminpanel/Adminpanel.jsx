import logo from "../../assets/logo.png"
import { useState, useEffect, useRef, memo } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const Adminpanel = () => {

    const { movies } = useSelector( state => state )
    
    const [ tab, setTabs ] = useState(true)


    window.onclick = (e) => {
        if (e.target.classList.contains("modal")) {
            setIsOpen(false)
        }
    }

    return (
        <div className="mx-auto absolute top-0 right-0 z-50 w-full h-full pt-0.5 flex items-start justify-start h-screen max-h-screen">
            <aside className="px-6 h-full w-3/12 flex flex-col items-center py-6 bg-gray-800">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-40 cursor-pointer hover:-rotate-2 transition-all" />
                </Link>
                <div className="mt-6 flex flex-col items-start gap-2 w-full">
                    <p onClick={() => setTabs(prev => !prev)} className={ `${ tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-bars-progress"></i> CATEGORYES</p>
                    <p onClick={() => setTabs(prev => !prev)} className={ `${ !tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-film"></i> MOVIES</p>
                    
                    <Link to="./add/film" className={ `bg-gray-600 mt-4 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> Add film</Link>
                    <Link to="./add/multfilm" className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> Add multfilm</Link>
                    <Link to="./add/anime" className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> Add anime</Link>
                    <Link to="./add/serial" className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> Add serial</Link>

                </div>
            </aside>
            <main className="px-4 py-6 h-full w-full bg-[#151A20] max-h-screen overflow-y-auto">
                <div className="py-4 flex items-center justify-between">
                    <p className="text-3xl font-semibold">{tab ? "Category" : "Movie"}</p>
                </div>
                <table className="flex flex-col items-start">
                    <thead className="w-full">
                        <tr className="flex justify-between items-center w-full gap-3 bg-gray-700 px-6 py-2">
                            <th className="w-4/12 text-start">Name</th>
                            <th className="w-4/12 text-start">Genres</th>
                            <th className="w-4/12 text-end">Tools</th>
                        </tr>
                    </thead>
                    <tbody className="w-full flex flex-col max-h-full overflow-y-auto">
                        {   tab ?
                            movies.map((i) => 
                                <tr className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                    <td className="text-sm w-4/12 truncate">{i.title}</td>
                                    <td className="text-sm w-4/12 truncate">{i.genres}</td>
                                    <div className="flex items-center w-4/12 justify-end gap-4 w-4/12">
                                        <div className="flex items-center justify-center gap-1 bg-yellow-500 px-2 py-1 rounded-md">EDIT
                                            <i className="bg-yellow-600 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                        </div>
                                        <i className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                    </div>
                                </tr>
                            )
                            :
                            <tr className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                <td className="text-sm w-4/12 truncate">Category</td>
                                <td className="text-sm w-4/12 truncate">Category</td>
                                <div className="flex items-center w-4/12 justify-end gap-4 w-4/12">
                                    <div className="flex items-center justify-center gap-1 bg-yellow-500 px-2 py-1 rounded-md">EDIT
                                        <i className="bg-yellow-600 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                    </div>
                                    <i className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                </div>
                            </tr>
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Adminpanel