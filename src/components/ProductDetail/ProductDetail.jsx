// import { useLoaderData, useParams } from "react-router-dom";
// import ProDetailBan from "../ProDetailBan/ProDetailBan";
// import { useContext } from "react";
// import { CartH, WishlistH } from "../Root/Root";

// const ProductDetail = () => {
//     const { product_id } = useParams();
//     const data = useLoaderData();
//     const id = parseInt(product_id);

//     const [cart, setCart] = useContext(CartH);
//     const [wishlist, setWishlist] = useContext(WishlistH);

//     const product = data.find((item) => item.product_id === id);
//     if (!product) {
//         return <p>Product not found.</p>;
//     }

//     const { product_image, product_title, price, description, specification, availability, rating, rating_star } = product;

//     return (
//         <div>
//             <ProDetailBan />
//             <div className="border rounded-3xl relative bottom-36 w-10/12 lg:w-6/12 mx-auto bg-white ">
//                 <div className="p-3">
//                     <div className="flex flex-col lg:flex-row items-center gap-10 justify-center p-3">
//                         <div className="rounded-2xl">
//                             <img className="w-96 h-[450px]" src={product_image} alt={product_title} />
//                         </div>
//                         <div className="lg:w-1/2 space-y-3">
//                             <h2 className="text-3xl font-bold">{product_title}</h2>
//                             <p className="text-lg font-semibold">Price: ${price}</p>
//                             <p className="bg-lime-50 rounded-2xl w-24 text-center py-0.5 border border-[#23BE0A] text-[#23BE0A]">{availability ? "In Stock" : "Stock Out"}</p>
//                             <p>{description}</p>
//                             <h3 className="font-bold">Specifications:</h3>
//                             <ol className="list-decimal pl-5 text-gray-500">
//                                 {specification.map((spec, index) => (
//                                     <li key={index}>{spec}</li>
//                                 ))}
//                             </ol>
//                             <div className="flex items-center gap-2">
//                                 <p className="font-bold">Rating: </p>
//                                 <span className="text-yellow-400 text-2xl">{rating_star}</span>
//                                 <span className="bg-gray-200 px-2 py-0.5 text-sm rounded-3xl">{rating}</span>
//                             </div>
//                             <div className="flex gap-4 mt-4">
//                                 <button onClick={() => setCart([...cart, product])} className="px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
//                                     <span>Add to Cart</span>
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-5 w-5"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor">
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="2"
//                                             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                                     </svg>
//                                 </button>
//                                 <button onClick={() => setWishlist([...wishlist, product])} className="px-3 py-2 border border-gray-300 rounded-full">
//                                     <i class="fa-regular fa-heart text-base"></i>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;


import { useLoaderData, useParams } from "react-router-dom";
import ProDetailBan from "../ProDetailBan/ProDetailBan";
import { useContext } from "react";
import { CartH, WishlistH } from "../Root/Root";
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);

    const [cart, setCart] = useContext(CartH);
    const [wishlist, setWishlist] = useContext(WishlistH);

    const product = data.find((item) => item.product_id === id);
    if (!product) {
        return <p>Product not found.</p>;
    }

    const { product_image, product_title, price, description, specification, availability, rating, rating_star } = product;

    const handleAddToCart = () => {
        if (cart.some((item) => item.product_id === product.product_id)) {
            toast.warn("Product is already in the cart!", {
                position: "top-center"
            });
        } else {
            setCart([...cart, product]);
            toast.success("Success Notification !", {
                position: "top-center"
            });
        }
    };

    const handleAddToWishlist = () => {
        if (wishlist.some((item) => item.product_id === product.product_id)) {
            toast.warn("Product is already in the wishlist!", {
                position: "top-center"
            });
        } else {
            setWishlist([...wishlist, product]);
            toast.success("Success Notification !", {
                position: "top-center"
            });
        }
    };

    return (
        <div>
            <ProDetailBan />
            <div className="border rounded-3xl relative bottom-36 w-10/12 lg:w-6/12 mx-auto bg-white ">
                <div className="p-3">
                    <div className="flex flex-col lg:flex-row items-center gap-10 justify-center p-3">
                        <div className="rounded-2xl">
                            <img className="w-96 h-[450px]" src={product_image} alt={product_title} />
                        </div>
                        <div className="lg:w-1/2 space-y-3">
                            <h2 className="text-3xl font-bold">{product_title}</h2>
                            <p className="text-lg font-semibold">Price: ${price}</p>
                            <p className="bg-lime-50 rounded-2xl w-24 text-center py-0.5 border border-[#23BE0A] text-[#23BE0A]">{availability ? "In Stock" : "Stock Out"}</p>
                            <p>{description}</p>
                            <h3 className="font-bold">Specifications:</h3>
                            <ol className="list-decimal pl-5 text-gray-500">
                                {specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))}
                            </ol>
                            <div className="flex items-center gap-2">
                                <p className="font-bold">Rating: </p>
                                <span className="text-yellow-400 text-2xl">{rating_star}</span>
                                <span className="bg-gray-200 px-2 py-0.5 text-sm rounded-3xl">{rating}</span>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button onClick={handleAddToCart} className="px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
                                    <span>Add to Cart</span>
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
                                </button>
                                <button onClick={handleAddToWishlist} className="px-3 py-2 border border-gray-300 rounded-full">
                                    <i className="fa-regular fa-heart text-base"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
