import logo from "../../assets/logo.png"
import { useState, useEffect, useRef, memo } from "react"

const Modal = memo(({children}) => {
    return (
        <div className="modal-div fixed flex justify-center items-center w-full h-full">
            <div className="modal relative ring-2 ring-gray-600 rounded-lg px-10 py-14 bg-gray-800">
                {children}
                <i onClick={() => setIsOpen(false)} className="fa-solid fa-xmark absolute top-3 cursor-pointer right-4"></i>
            </div>
        </div>
    )
})

const Adminpanel = () => {

    
    const [ tab, setTabs ] = useState(true)

    const [isOpen, setIsOpen] = useState(false)

    window.onclick = (e) => {
        if (e.target.classList.contains("modal")) {
        } else {
            setIsOpen(false)
        }
    }

    return (
        <div className="mx-auto pt-0.5 flex items-start justify-start h-screen max-h-screen">
            {isOpen && 
                <Modal>
                    <form className="modal flex flex-col items-start gap-2">
                        <h1 className="modal text-3xl text-center w-full font-semibold">{tab ? "Category" : "Movie"}</h1>
                        <div className="mt-3 modal flex flex-col items-center gap-1.5">
                            <input className="modal text-gray-800 px-5 rounded-md py-2" type="text" placeholder="Name..." />
                            <input className="modal text-gray-800 px-5 rounded-md py-2" type="text" placeholder="Name..." />
                            <input className="modal text-gray-800 px-5 rounded-md py-2" type="text" placeholder="Name..." />
                            <input className="modal text-gray-800 px-5 rounded-md py-2" type="text" placeholder="Name..." />
                        </div>
                        <div className="modal mt-2 flex justify-end items-center w-full">
                            <input className="modal px-5 py-2 bg-gray-700 hover:bg-gray-600 cursor-pointer rounded-md" type="submit" value="Jo'natish" />
                        </div>
                    </form>
                </Modal>
            }
            <aside className="px-6 h-full w-2/12 flex flex-col items-center py-6 bg-gray-800">
                <img src={logo} alt="logo" className="w-46 cursor-pointer hover:-rotate-2 transition-all" />    
                <div className="mt-6 flex flex-col items-start gap-2 w-full">
                    <p onClick={() => setTabs(prev => !prev)} className={ `${ tab ? "bg-gray-700 ring-2" : "bg-gray-600" } font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-lg py-2`}>CATEGORYES</p>
                    <p onClick={() => setTabs(prev => !prev)} className={ `${ !tab ? "bg-gray-700 ring-2" : "bg-gray-600" } font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-lg py-2`}>MOVIES</p>
                </div>
            </aside>
            <main className="px-4 py-6 h-full w-full bg-[#151A20] max-h-screen overflow-y-auto">
                <div className="py-4 flex items-center justify-between">
                    <p className="text-3xl font-semibold">{tab ? "Category" : "Movie"}</p>
                    <p onClick={() => setIsOpen(prev => !prev)} className="modal px-5 text-lg py-2 rounded-md bg-gray-700 cursor-pointer hover:bg-gray-800">Add {tab ? "category" : "movie"}</p>
                </div>
                <table className="flex flex-col items-start">
                    <thead className="w-full">
                        <tr className="flex justify-between items-center w-full gap-3 px-6 py-3 bg-gray-700 rounded-lg">
                            <th className="">Name</th>
                            <th className="">Id</th>
                            <th className="">Name</th>
                            <th className="">Name</th>
                            <th className="">Name</th>
                        </tr>
                    </thead>
                    <tbody className="w-full mt-2.5 flex flex-col gap-1 max-h-full overflow-y-auto">
                        <tr className="flex justify-between items-center w-full gap-3 bg-gray-800 px-6 rounded-lg py-2 hover:bg-gray-700">
                            <td className="">Name</td>
                            <td className="">Id</td>
                            <td className="">Name</td>
                            <td className="">Name</td>
                            <td className="">Name</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Adminpanel