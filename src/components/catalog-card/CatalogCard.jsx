const CatalogCard = (props) => {
    return (  
        <div className="shadow-gray-900 rounded-md">
            <a href={props.link}>
                <img src={props.img} alt="movie" className="rounded-md h-80 hover:scale-105 duration-300 transition-all object-cover" />
                <div className="pb-4 flex flex-col items-start pt-1">
                    <h1 className="poppins">lorem opsum dolor sit amet</h1>
                    <p className="text-gray-500">premium</p>
                </div>
            </a>
        </div>
    );
}

export default CatalogCard;