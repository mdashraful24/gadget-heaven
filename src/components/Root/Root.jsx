import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { createContext, useState } from "react";

export const CartH = createContext(null);
export const WishlistH = createContext(null);
export const HistoryHandle = createContext();

const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [purchasesHistory, setPurchasesHistory] = useState([]);

    return (
        <div className="md:pt-5 lg:pt-5 pb-10">
            <CartH.Provider value={[cart, setCart]}>
                <WishlistH.Provider value={[wishlist, setWishlist]}>
                    <HistoryHandle.Provider value={[purchasesHistory, setPurchasesHistory]}>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </HistoryHandle.Provider>
                </WishlistH.Provider>
            </CartH.Provider>
        </div>
    );
};

export default Root;

// className = "lg:w-11/12 mx-auto md:pt-5 lg:pt-5 pb-10 md:px-3"