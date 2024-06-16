import { Link } from "react-router-dom";

 
const ErrorPage = () => {
    return (
        <div className="text-center space-y-8 mt-52">
            <h2 className="text-5xl font-bold">Opppssss!!</h2>
            <h2 className="text-3xl font-bold">404 Pages</h2>
            <Link to='/'><button className="btn btn-ghost">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;