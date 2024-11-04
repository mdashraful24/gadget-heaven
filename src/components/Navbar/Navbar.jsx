import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CartH, WishlistH } from "../Root/Root";

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [cart, setCart]  = useContext(CartH);
    const [wishlist, setWishlist] = useContext(WishlistH);

    console.log(wishlist)
    const links = (
        <>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
            <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>
            <li><a>History</a></li>
        </>
    );

    return (
        <div>
            <div className={`navbar ${isHomePage ? 'bg-[#9538E2] text-white' : 'bg-white text-black'} md:rounded-t-2xl lg:rounded-t-2xl pt-5 lg:pt-5 lg:px-10`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${isHomePage ? 'text-white' : ''}`}>
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
                            className="menu menu-sm dropdown-content lg:bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className={`btn btn-ghost text-lg lg:text-xl ${isHomePage ? 'text-white' : 'text-black'}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 ${isHomePage ? 'text-white' : 'text-black'}`}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className={`btn btn-ghost btn-circle ${isHomePage ? 'bg-white text-black' : 'bg-white'} border border-gray-300`}>
                        <div className="indicator">
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
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="badge-sm indicator-item left-1">{cart.length}</span>
                        </div>
                    </div>
                    <button className={`btn btn-ghost btn-circle ${isHomePage ? 'bg-white text-black' : 'bg-white'} border border-gray-300 ml-3`}>
                        <div className="indicator">
                            <i className="fa-regular fa-heart text-base"></i>
                            <span className="badge-xs indicator-item">{wishlist.length}</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
