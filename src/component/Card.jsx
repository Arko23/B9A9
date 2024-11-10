import { FcHome } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { VscSymbolField } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Card = ({ now }) => {
    const { id,estate_title, segment_name, description, price, status, area, location, facilities, image_url } = now;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-dashed border-gray-500 hover:bg-violet-200 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ">
                <figure><img src={image_url} alt={estate_title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <div className="flex">
                    <p className="flex gap-2 font-mono text-lg">{segment_name}<FcHome></FcHome></p>
                    <p className="font-mono text-lg flex gap-3 ">{area}< VscSymbolField ></VscSymbolField></p>
            
                    </div>
                    <p className="flex gap-3 font-semibold">< ImLocation></ImLocation>{location}</p>
                    <p className="border border-solid border-red-600 rounded-xl w-[40px] text-center bg-red-400 text-white font-bold">{status}</p>
                    
                    <ul className="flex gap-16 text-blue-500 font-semibold">
                        {facilities.map((facility, index) => (
                            <li key={index}>{facility}</li>
                        ))}
                    </ul>
                    <div className="card-actions flex">
                        <p className="mt-6 font-bold text-xl">{price}</p>
                        <Link to ={`/now/${id}`}>
                        <button className="btn btn-primary bg-blue-400 text-white font-bold">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
