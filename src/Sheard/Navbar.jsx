import { Link, NavLink } from "react-router-dom";
import navImg from '../assets/singleHome-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('user LogOut Successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/orderList'>Order List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-bold w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <span>
                        <img className="w-[80px]" src={navImg} alt="" />
                    </span>
                    <a className=" lg:text-4xl font-bold">Dream <span className="text-red-500">Home</span></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? <>
                    <p className="mr-4">{user.email}</p>
                    <a onClick={handleLogOut} className="btn btn-outline">Sing-Out</a>
                </> :
                    <Link to='/login'><button className="btn btn-outline">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;