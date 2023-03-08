import logo from "../../assets/logo.png"
import { useState, useEffect, useRef, memo } from "react"
import { Link, useNavigate  } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

import { moviesFetching, moviesFetched, moviesFetchingError, categoryFetching, categoryFetched, categoryFetchingError, fetchAll} from "../../redux/actions"

import {API_BASE} from "../../utils/config"

const Adminpanel = () => {
    const navigate = useNavigate();

    const {all} = useSelector(state => state)

    const { category } = useSelector( state => state )
    
    const [ tab, setTabs ] = useState(true)

    const dispatch = useDispatch()

    window.onclick = (e) => {
        if (e.target.classList.contains("modal")) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        axios.get(`${API_BASE}/api/films/all`).then(res => dispatch(fetchAll(res.data.data)))
    }, [])

    const deleteing = (what, id) => {
        axios.delete(`${API_BASE}/api/${what}/${id}`).then(() => {
            dispatch(categoryFetching())
            
            axios.get(`${API_BASE}/api/category/`).then(res => {
            dispatch(categoryFetched(res.data.data))
            }).catch(() => dispatch(categoryFetchingError()))
            .then(() => {
            
            dispatch(moviesFetching())

            axios.get(`${API_BASE}/api/films/`).then(res => {
                dispatch(moviesFetched(res.data.data))
            }).catch(() => dispatch(moviesFetchingError()))
            })
        })
    }

    return (
        <div className="mx-auto absolute top-0 right-0 z-50 w-full h-full flex items-start justify-start h-screen max-h-screen">
            <aside className="px-6 h-full w-72 flex flex-col items-center py-6 bg-gray-800">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-40 cursor-pointer hover:-rotate-2 transition-all" />
                </Link>
                <div className="mt-6 flex flex-col items-start gap-2 w-full">
                    <p onClick={() => setTabs(true)} className={ `${ tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> CATEGORYES</p>
                    <p onClick={() => setTabs(false)} className={ `${ !tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> MOVIES</p>
                    
                    <div className="mt-2 w-full flex flex-col gap-2">
                        <Link to={`./add/category`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Add category</Link>
                        <Link to={`./add/films`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Add movie</Link>

                        <Link to={`./slider`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Add slider</Link>
                    </div>

                </div>
            </aside>
            <main className="px-4 py-6 h-full w-full bg-[#151A20] max-h-screen overflow-y-auto">
                <div className="py-4 flex items-center justify-between">
                    <p className="text-3xl font-semibold">{tab ? "Category" : "Movie"}</p>
                </div>
                <table className="flex flex-col items-start">
                    <thead className="w-full">
                        <tr className="flex justify-between items-center w-full gap-3 bg-gray-700 px-6 py-2">
                            <th className="w-3/12 text-start">Name</th>
                            {!tab ? <th className="w-2/12 text-start">Genres</th> : ""}
                            {!tab ? <th className="w-2/12 text-start">Category</th> : ""}
                            {!tab ? <th className="w-1/12 text-start">Views</th> : ""}
                            {!tab ? <th className="w-1/12 text-start">Likes</th> : ""}
                            <th className="w-2/12 text-end">Tools</th>
                        </tr>
                    </thead>
                    <tbody className="w-full flex flex-col max-h-full overflow-y-auto">
                        {   !tab ?
                            all.map((i) => 
                                <tr key={i._id} className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                    <td className="text-sm w-3/12 truncate">{i.title}</td>
                                    <td className="text-sm w-2/12 truncate">{i.genres}</td>
                                    <td className="text-sm w-2/12 truncate">{i.category?.name}</td>
                                    <td className="text-sm w-1/12 truncate">{i.viewCount}</td>
                                    <td className="text-sm w-1/12 truncate">{i.likes}</td>
                                    <div className="flex items-center w-2/12 justify-end gap-4 w-4/12">
                                        <Link to={`./add/films?id=${i._id}`} className="cursor-pointer flex items-center justify-center gap-1 bg-yellow-500 px-2 py-0.5 text-sm rounded-md">EDIT
                                            <i className="bg-yellow-600 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                        </Link>
                                        <i onClick={() => deleteing("films", i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                    </div>
                                </tr>
                            )
                            :
                            category.map(i => <tr key={i._id} className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                <td className="text-sm w-4/12 truncate">{i.name}</td>
                                <div className="flex items-center w-4/12 justify-end gap-4 w-4/12">
                                    <i onClick={() => deleteing("category", i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                </div>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Adminpanel