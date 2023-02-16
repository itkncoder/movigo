import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"

const Add = () => {

    const { name } = useParams()

    const [ tab, setTabs ] = useState('film')
    const [ movieOrCategory, setMovieOrCategory ] = useState(true)

    return (
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <aside className="px-6 h-full w-2/12 flex flex-col items-center py-6 bg-gray-800">
                <div className="mt-6 flex flex-col items-start gap-2 w-full">
                    <p onClick={() => setMovieOrCategory(true)} className={ `${ tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-bars-progress"></i> CATEGORYES</p>
                    <p onClick={() => setMovieOrCategory(false)} className={ `${ !tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-film"></i> MOVIES</p>
                    
                    <button onClick={e => setTabs(e.target.innerText)} className={ `bg-gray-600 mt-4 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> film</button>
                    <button onClick={e => setTabs(e.target.innerText)} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> multfilm</button>
                    <button onClick={e => setTabs(e.target.innerText)} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> anime</button>
                    <button onClick={e => setTabs(e.target.innerText)} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i class="fa-solid fa-add"></i> serial</button>

                </div>
            </aside>

            <div className="w-10/12">
                <div className="max-w-screen-xl mx-auto mt-8 px-10">
                    <h1 className="text-4xl font-semibold uppercase">NEW {movieOrCategory ? "" : tab} TO {movieOrCategory ? "Category" : "Movie"}</h1>
                </div>
                <form className="flex flex-col items-center py-5 max-w-screen-xl mx-auto gap-2">
                    <div className="flex justify-center mt-10 items-start bg-gray-800 px-8 py-6 rounded-xl w-fit items-start gap-8">

                        <div className="grid grid-row-4 w-3/12 gap-6 py-14 rounded-2xl px-5">
                            <div className="w-full">
                                <h1 className="text-xl">Image</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Image URL..." name="" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Title</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Genres</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Genres..." name="" id="" />
                            </div>
                        </div>


                        <div className="grid grid-row-4 w-3/12 gap-6 py-14 rounded-2xl px-5">
                            
                            <div className="w-full">
                                <h1 className="text-xl">Description</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Description..." name="" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Duration</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Duration..." name="" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Trailer</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Trailer URL..." name="" id="" />
                            </div>
                        </div>


                        <div className="grid grid-row-4 w-3/12 gap-6 py-14 rounded-2xl px-5">
                            
                            <div className="w-full">
                                <h1 className="text-xl">Year</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Year..." name="" id="" />
                            </div>
                            
                            <div>
                                <h1 className="text-xl">Video</h1>
                                <input required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" placeholder="Video URL" type="text" name="" id="" />
                            </div>

                                            
                            <div className="flex justify-end items-center mt-5">
                                <input className="bg-yellow-500 hover:bg-yellow-600 mr-2 px-10 cursor-pointer py-2.5 rounded-lg" type="submit" value="Submit" />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add