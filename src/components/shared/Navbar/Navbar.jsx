import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const user = false;
    const isAdmin = true
    const navLinks = <>
        <li><NavLink to="/" style={({ isActive }) => { return isActive ? { backgroundColor: '#FFFFFF', color: "black" } : {}; }}>Home</NavLink></li>
        <li><NavLink to="/cashout" style={({ isActive }) => { return isActive ? { backgroundColor: '#F7931D' } : {}; }}>Send Money</NavLink></li>
    </>



    const handleLogOut = () => {
        // logOut()
        //     .then(result => {
        //         toast.success("log out successful")
        //         console.log(result.user)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         toast.error(error.message)
        //     })
    }

    return (
        <div className="bg-tealColor">
            <div className=" bg-tealColor  sticky top-0 z-40">
                <div className="drawer z-50 container mx-auto text-white">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar */}
                        <div className="w-full navbar">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 text-xl md:text-3xl font-bold"><Link to="/">MoveCash</Link></div>
                            <div className="flex-none font-bold hidden lg:block">
                                <ul className="menu text-xl menu-horizontal">
                                    {navLinks}
                                </ul>
                            </div>

                            {
                                user ? <div className="dropdown dropdown-end " >
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip">
                                        <div className="w-10 border-2 border-white rounded-full ">
                                            <img alt="Tailwind CSS Navbar component" src={user.image || "https://i.ibb.co/ZX6HMzF/pp.jpg"} />
                                        </div>

                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[10] p-2 shadow menu menu-sm text-white font-bold dropdown-content bg-[#6F42C1] w-36">
                                        <li><button className=" border" disabled>Balance: {user?.displayName}</button></li>

                                        <li className="hover:bg-gray-500"><Link to={isAdmin ? '/dashboard/organizer-profile' : '/dashboard/analytics'}>Dashboard</Link></li>
                                        <li className="hover:bg-gray-500 text-red-500"><button onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                                    :
                                    <Link to="/login"><button className="btn btn-outline border hover:bg-[#F7931D] border-[#F5F5DC] text-white text-xl font-medium md:font-bold">Login</button></Link>
                            }
                        </div>

                    </div>
                    {/* for responsive device */}
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu font-bold text-2xl w-64 min-h-full bg-[#6F42C1]">
                            {navLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;