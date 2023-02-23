import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import {API_BASE} from "../../utils/config"

const Add = () => {
    const { register, handleSubmit } = useForm();

    const [inputs, setInputs] = useState({
        poster: "",
        title: "",
        genres: "",
        description: "",
        duration: "",
        trailer: "",
        year: "",
        video: "",
        category: "",
        country: "",
        language: "",
        age: ""
    })

    const params = new URLSearchParams(document.location.search)

    const { name } = useParams()

    const navigate = useNavigate();

    const [ movieOrCategory, setMovieOrCategory ] = useState(name === "films" ? false : true)

    const { category, movies } = useSelector(state => state)

    const [postOrPut, setPostOrPut] = useState(true)

    const onSubmitCategory = async (data) => {
        const obj = {
            name: data.name
        }

        await axios.post(`${API_BASE}/api/category/`, obj).then(() => window.location.href = ("/admin/adminpanelmovigo/"))
    };
    
    const onSubmitMovie = async (data) => {
        const obj = {
            poster: inputs.poster,
            title: inputs.title,
            genres: inputs.genres,
            description: inputs.description,
            duration: inputs.duration,
            trailer: inputs.trailer,
            year: inputs.year,
            video: inputs.video,
            category: data.category,
            country: inputs.country,
            language: inputs.language.toUpperCase(),
            age: inputs.age
        }

        if (postOrPut) {
            await axios.post(`${API_BASE}/api/films/`, obj).then(() => window.location.href = ("/admin/adminpanelmovigo/"))
        } else {
            await axios.put(`${API_BASE}/api/films/${params.get('id')}/edit`, obj).then(() => window.location.href = ("/admin/adminpanelmovigo/"))
        }
        
    };

    useEffect(() => {
        if (params.get("id")) {
            setPostOrPut(false)
            const item = movies.filter(i => i._id === params.get('id'))
            setInputs(...item)
        }
    }, [])

    return (
        
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <aside className="px-6 h-full w-60 flex flex-col items-center py-6 bg-gray-800">
                <div className="flex flex-col items-start gap-2 w-full">

                    <Link className="my-6 rounded-lg bg-yellow-500 px-8 hover:bg-yellow-600 py-2" to="/admin/adminpanelmovigo">Ortga</Link>

                    <Link to="/admin/adminpanelmovigo/add/category" onClick={() => setMovieOrCategory(true)} className={ `${ movieOrCategory ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> CATEGORY</Link>
                    <Link to="/admin/adminpanelmovigo/add/films" onClick={() => setMovieOrCategory(false)} className={ `${ !movieOrCategory ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> MOVIES</Link>
                </div>
            </aside>

            <div className="w-10/12">
                <div className="mx-auto mt-6 px-10 flex items-center justify-start">
                    <h1 className="text-4xl font-semibold uppercase">{movieOrCategory ? "Category" : "Movie"}</h1>
                    <p className="ml-4 text-lg font-semibold">-{postOrPut ? "POST" : "PUT"}-</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    {!movieOrCategory ? <form onSubmit={handleSubmit(onSubmitMovie)} className="flex justify-center mt-4 items-start bg-gray-800 px-4 pb-5 pt-12 rounded-xl w-fit items-start gap-2">

                        <div className="grid grid-row-4 w-full gap-6 py-5 rounded-2xl px-5">
                            <div className="w-full">
                                <h1 className="text-xl">Image</h1>
                                <input onInput={e => setInputs({...inputs, poster: e.target.value})} value={inputs.poster} {...register("poster")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Image URL..." name="poster" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Title</h1>
                                <input onInput={e => setInputs({...inputs, title: e.target.value})} value={inputs.title}  {...register("title")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="title" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Category</h1>
                                <select onInput={e => setInputs({...inputs, category: e.target.value})} value={inputs.category} {...register("category")} required className="w-full bg-gray-700 px-3 py-1.5 rounded-lg" name="category" id="">
                                    {category.map((i) => 
                                        <option key={i._id} value={i._id}>{i.name}</option>
                                    )}
                                </select>
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Genres</h1>
                                <input onInput={e => setInputs({...inputs, genres: e.target.value})} value={inputs.genres} {...register("genres")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="genres" id="" />
                            </div>

                        </div>


                        <div className="grid grid-row-4 w-full gap-6 py-5 rounded-2xl px-5">
                            
                            <div className="w-full">
                                <h1 className="text-xl">Description</h1>
                                <input onInput={e => setInputs({...inputs, description: e.target.value})} value={inputs.description} {...register("description")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Description..." name="description" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Duration</h1>
                                <input onInput={e => setInputs({...inputs, duration: e.target.value})} value={inputs.duration} {...register("duration")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Duration..." name="duration" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Trailer</h1>
                                <input onInput={e => setInputs({...inputs, trailer: e.target.value})} value={inputs.trailer} {...register("trailer")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Trailer URL..." name="trailer" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Country</h1>
                                <input onInput={e => setInputs({...inputs, country: e.target.value})} value={inputs.country} {...register("country")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="country" id="" />
                            </div>

                        </div>


                        <div className="grid grid-row-4 w-full gap-6 py-5 rounded-2xl px-5">
                            
                            <div className="w-full">
                                <h1 className="text-xl">Year</h1>
                                <input onInput={e => setInputs({...inputs, year: e.target.value})} value={inputs.year} {...register("year")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Year..." name="year" id="" />
                            </div>
                            
                            <div>
                                <h1 className="text-xl">Video</h1>
                                <input onInput={e => setInputs({...inputs, video: e.target.value})} value={inputs.video} {...register("video")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" placeholder="Video URL" type="text" name="video" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Language</h1>
                                <input onInput={e => setInputs({...inputs, language: e.target.value})} value={inputs.language} {...register("language")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="language" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Age</h1>
                                <input onInput={e => setInputs({...inputs, age: e.target.value})} value={inputs.age} {...register("age")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="age" id="" />
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