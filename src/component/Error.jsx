import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center">
        <h2 className="text-2xl font-bold">404</h2>
        <h2 className="text-2xl font-bold my-5">Page Not Found</h2>
        <Link to="/" className="text-2xl font-bold mt-5"><button className="btn bg-green-500 text-white">GO BACK TO HOME</button></Link>
    </div>
    );
};

export default Error;