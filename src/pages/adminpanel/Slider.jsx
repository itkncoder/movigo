import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form";
import {API_BASE} from "../../utils/config"

const Add = () => {
    const { register, handleSubmit } = useForm();

    const [inputs, setInputs] = useState({
        img: "",
        title: "",
        genre: "",
        filmType: "",
        url: "",
    })

    const [ viewOrPost, setViewOrPost ] = useState(true)

    const { sliders } = useSelector(state => state)
    
    const onSubmitSlider = async (data) => {
        const obj = {
            img: inputs.img,
            title: inputs.title,
            url: inputs.url,
            filmType: inputs.filmType,
            genre: inputs.genre,
        }

        await axios.post(`${API_BASE}/api/slider/addSlider`, obj).then(() => window.location.href = "/admin/adminpanelmovigo/slider")
    };

    const deleteSlider = async (id) => {
        console.log(`${API_BASE}/api/slider/${id}`);
        await axios.delete(`${API_BASE}/api/slider/${id}`).then(() => {
            window.location.href = "/admin/adminpanelmovigo/slider"
        })
    }

    return (
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <aside className="px-6 h-full w-60 flex flex-col items-center py-6 bg-gray-800">
                <div className="flex flex-col items-start gap-2 w-full">

                    <Link className="my-6 rounded-lg bg-yellow-500 px-8 hover:bg-yellow-600 py-2" to="/admin/adminpanelmovigo">Ortga</Link>

                    <p onClick={() => setViewOrPost(true)} className={ `${ viewOrPost ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> VIEW</p>
                    <p onClick={() => setViewOrPost(false)} className={ `${ !viewOrPost ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> ADD</p>
                </div>
            </aside>

            <div className="w-full py-4">
                <div className="flex flex-col items-center gap-2">
                    {!viewOrPost ? <form onSubmit={handleSubmit(onSubmitSlider)} className="flex w-6/12 justify-center my-2 items-start bg-gray-800 px-4 py-5 rounded-xl w-fit items-start gap-2">

                        <div className="grid grid-row-8 w-full w-full gap-5 rounded-2xl px-12">

                            <h1 className="text-3xl">ADD SLIDER</h1>

                            <div className="w-full">
                                <h1 className="text-xl">Image</h1>
                                <input onInput={e => setInputs({...inputs, img: e.target.value})} value={inputs.img} {...register("img")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Image URL..." name="img" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Title</h1>
                                <input onInput={e => setInputs({...inputs, title: e.target.value})} value={inputs.title}  {...register("title")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Name..." name="title" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">URL</h1>
                                <input onInput={e => setInputs({...inputs, url: e.target.value})} value={inputs.url}  {...register("url")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Url..." name="url" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">FilmType</h1>
                                <input onInput={e => setInputs({...inputs, filmType: e.target.value})} value={inputs.filmType} {...register("filmType")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="FilmType..." name="filmType" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Genre</h1>
                                <input onInput={e => setInputs({...inputs, genre: e.target.value})} value={inputs.genre} {...register("genre")} required className="outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Genre..." name="genre" id="" />
                            </div>

                            <div className="flex justify-end items-center mt-5">
                                <input className="bg-yellow-500 hover:bg-yellow-600 mr-2 px-10 cursor-pointer py-2.5 rounded-lg" type="submit" value="Submit" />
                            </div>

                        </div>

                    </form>
                    :
                    <table className="flex flex-col items-start w-full px-4">
                        <thead className="w-full">
                            <tr className="flex justify-between items-center w-full gap-8 bg-gray-700 px-6 py-2">
                                <th className="w-3/12 text-start">Name</th>
                                <th className="w-2/12 text-start">Genre</th>
                                <th className="w-3/12 text-start">URL</th>
                                <th className="w-2/12 text-start">FilmType</th>
                                <th className="w-1/12 text-start flex items-center justify-end">Tools</th>
                            </tr>
                        </thead>
                        <tbody className="w-full flex flex-col max-h-full overflow-y-auto">
                            {
                                sliders.map((i) => 
                                    <tr key={i._id} className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                        <td className="text-sm w-3/12 truncate">{i.title}</td>
                                        <td className="text-sm w-2/12 truncate">{i.genre}</td>
                                        <td className="text-sm w-3/12 truncate">{i.url}</td>
                                        <td className="text-sm w-2/12 truncate">{i.filmType}</td>
                                        <div className="flex items-center w-1/12 justify-end gap-4">
                                            <i onClick={() => deleteSlider(i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                        </div>  
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default Add