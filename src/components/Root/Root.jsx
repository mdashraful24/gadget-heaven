import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useState } from "react";

export const CartH = createContext(null);
export const WishlistH = createContext(null);

const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    return (
        <div className="lg:w-11/12 mx-auto pt-5 pb-10 md:px-3">
            <CartH.Provider value={[cart, setCart]}>
                <WishlistH.Provider value={[wishlist, setWishlist]}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </WishlistH.Provider>
            </CartH.Provider>
        </div>
    );
};

export default Root;