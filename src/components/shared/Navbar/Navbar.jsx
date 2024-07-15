import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const user = false;
    const navLinks = <>
        <li><NavLink  to="/"  style={({ isActive }) => { return isActive ? { backgroundColor: '#FFFFFF', color:"black" } : {}; }}>Home</NavLink></li>
        <li><NavLink to="/cashout"  style={({ isActive }) => { return isActive ? { backgroundColor: '#F7931D' } : {}; }}>Send Money</NavLink></li>
    </>
    return (
        <div className="bg-tealColor">
            <div className="navbar text-white container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">MoveCash</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <p>Logout</p> : <Link to="/login" className="btn btn-md font-semibold text-xl">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;