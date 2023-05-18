import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/addAToy'>Add A Toy</Link></li>
        <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 container m-auto px-0 h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case p-0 text-xl">
                    <h2>Toy Market</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex items-center">
                {
                    user && <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : 'No Username Found'}>
                        {
                            user.photoURL ? <img className="w-12 rounded-full" src={user.photoURL} /> :
                                <FaUserCircle className="text-4xl rounded-full"></FaUserCircle>
                        }
                    </div>
                }
                {
                    user ? <button onClick={handleLogout} className="btn btn-outline btn-primary ml-4">Log Out</button> : <Link to="/login">
                        <button className="btn btn-outline btn-primary ml-4">Login</button>
                    </Link>
                }
            </div>
        </div >
    );
};

export default Header;