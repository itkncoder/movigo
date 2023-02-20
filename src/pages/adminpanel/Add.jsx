import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";

const Add = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const { name } = useParams()

    const [ movieOrCategory, setMovieOrCategory ] = useState(name === "films" ? false : true)

    const { category } = useSelector(state => state)


    const onSubmitCategory = async (data) => {
        const obj = {
            name: data.name
        }

        await axios.post("https://movigo.onrender.com/api/category/", obj).then(() => navigate(0))
    };
    
    const onSubmitMovie = async (data) => {
        const obj = {
            poster: data.poster,
            title: data.title,
            genres: data.genres,
            description: data.description,
            duration: data.duration,
            trailer: data.trailer,
            year: data.year,
            video: data.video
        }

        console.log(obj);

        await axios.post("https://movigo.onrender.com/api/films/", obj).then(() => navigate(0))
    };

    return (
        
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <aside className="px-6 h-full w-60 flex flex-col items-center py-6 bg-gray-800">
                <div className="flex flex-col items-start gap-2 w-full">

                    <Link className="my-6 rounded-lg bg-yellow-500 px-8 hover:bg-yellow-600 py-2" to="/admin/adminpanelmovigo">Ortga</Link>

                    <p onClick={() => setMovieOrCategory(true)} className={ `${ movieOrCategory ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> CATEGORY</p>
                    <p onClick={() => setMovieOrCategory(false)} className={ `${ !movieOrCategory ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> MOVIES</p>
                </div>
            </aside>

            <div className="w-10/12">
                <div className="max-w-screen-xl mx-auto mt-8 px-10">
                    <h1 className="text-4xl font-semibold uppercase">{movieOrCategory ? "Category" : "Movie"}</h1>
                </div>
                <div className="flex flex-col items-center py-5 max-w-screen-xl mx-auto gap-2">
                    {!movieOrCategory ? <form onSubmit={handleSubmit(onSubmitMovie)} className="flex justify-center mt-10 items-start bg-gray-800 px-8 py-6 rounded-xl w-fit items-start gap-8">

                        <div className="grid grid-row-4 w-3/12 gap-6 py-14 rounded-2xl px-5">
                            <div className="w-full">
                                <h1 className="text-xl">Image</h1>
                                <input {...register("poster")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Image URL..." name="poster" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Title</h1>
                                <input {...register("title")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="title" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Genres</h1>
                                <select {...register("genres")} required className="w-full bg-gray-700 px-3 py-1.5 rounded-lg" name="genres" id="">
                                    {category.map((i) => 
                                        <option value={i.name}>{i.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>


                        <div className="grid grid-row-4 w-3/12 gap-6 py-14 rounded-2xl px-5">
                            
                            <div className="w-full">
                                <h1 className="text-xl">Description</h1>
                                <input {...register("description")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Description..." name="description" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Duration</h1>
                                <input {...register("duration")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Duration..." name="duration" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Trailer</h1>
                                <input {...register("trailer")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Trailer URL..." name="trailer" id="" />
                            </div>
                        </div>


                        <div className="grid grid-row-4 w-3/12 gap-6 py-14 rounded-2xl px-5">
                            
                            <div className="w-full">
                                <h1 className="text-xl">Year</h1>
                                <input {...register("year")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Year..." name="year" id="" />
                            </div>
                            
                            <div>
                                <h1 className="text-xl">Video</h1>
                                <input {...register("video")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" placeholder="Video URL" type="text" name="video" id="" />
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