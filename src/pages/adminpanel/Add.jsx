import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";

const Add = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const { name } = useParams()

    const [ tab, setTabs ] = useState(name)
    const [ movieOrCategory, setMovieOrCategory ] = useState(false)

    const { category } = useSelector(state => state)


    const onSubmitCategory = async (data) => {
        const obj = {
            name: data.name
        }

        await axios.post("https://movigo.onrender.com/api/category/", obj).then(() => navigate(0))
    };

    return (
        
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <aside className="px-6 h-full w-60 flex flex-col items-center py-6 bg-gray-800">
                <div className="flex flex-col items-start gap-2 w-full">

                    <Link className="my-6 rounded-lg bg-yellow-500 px-8 hover:bg-yellow-600 py-2" to="/admin/adminpanelmovigo">Ortga</Link>

                    <p onClick={() => setMovieOrCategory(true)} className={ `${ movieOrCategory ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> CATEGORY</p>
                    <p onClick={() => setMovieOrCategory(false)} className={ `${ !movieOrCategory ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> MOVIES</p>
                    
                    <div className="flex flex-col w-full items-start">
                    {category.map((i) => 
                        <button key={i._id} onClick={e => {
                            if (movieOrCategory) {
                                setMovieOrCategory(false)
                                setTabs(e.target.innerText)
                            }
                            setTabs(e.target.innerText)
                        }} className={ `bg-gray-600 mt-2 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i> {i.name}</button>
                    )}
                    </div>
                </div>
            </aside>

            <div className="w-10/12">
                <div className="max-w-screen-xl mx-auto mt-8 px-10">
                    <h1 className="text-4xl font-semibold uppercase">YANGI {movieOrCategory ? "" : tab} {movieOrCategory ? "CATEGORY" : "FILMS"}{!movieOrCategory ? "GA" : ""}</h1>
                </div>
                <div className="flex flex-col items-center py-5 max-w-screen-xl mx-auto gap-2">
                    {!movieOrCategory ? <form className="flex justify-center mt-10 items-start bg-gray-800 px-8 py-6 rounded-xl w-fit items-start gap-8">

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

                    </form>
                    :
                    <form onSubmit={handleSubmit(onSubmitCategory)} className="grid grid-row-4 w-4/12 gap-6 bg-gray-800 py-14 rounded-2xl px-10">
                            
                        <div className="w-full">
                            <h1 className="text-xl">Name</h1>
                            <input {...register("name")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="name" id="name" />
                        </div>
                                            
                        <div className="flex justify-end items-center">
                            <input className="bg-yellow-500 hover:bg-yellow-600 mr-2 px-10 cursor-pointer py-2 rounded-lg" type="submit" value="Submit" />
                        </div>

                    </form>
                    }
                </div>
            </div>
        </div>
    )
}

export default Add