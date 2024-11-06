import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CartH, HistoryHandle, WishlistH } from '../Root/Root';
import { useNavigate } from 'react-router-dom';
import sortIcon from '../../assets/sort.png';
import successIcon from '../../assets/success.png';
import xIcon from '../../assets/x.png';

const Dascart = () => {
    const [cart, setCart] = useContext(CartH);
    const [wishlist, setWishlist] = useContext(WishlistH);
    const [activeTab, setActiveTab] = useState('cart');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [purchasesHistory, setPurchasesHistory] = useContext(HistoryHandle);

    useEffect(() => {
        document.title = "Dashboard | Gadget Heaven";
    }, []);

    const totalCost = cart.reduce((sum, product) => sum + product.price, 0);
    const sortCartDescending = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };
    const handlePurchase = () => {
        const purchaseDate = new Date();
        const newPurchase = {
            items: [...cart],
            total: totalCost,
            date: purchaseDate.toString()
        };
        setPurchasesHistory([...purchasesHistory, newPurchase]);
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setCart([]);
        navigate('/');
    };
    const handleDeleteCart = (index) => {
        const newCart = cart.filter((_, ind) => ind !== index);
        setCart(newCart);
    };
    const handleDeleteWishlist = (index) => {
        const newWishlist = wishlist.filter((_, ind) => ind !== index);
        setWishlist(newWishlist);
    }

    return (
        <div className={`relative ${showModal ? 'overflow-hidden' : ''}`}>
            {showModal && (
                <div className="fixed inset-0 bg-black opacity-70 z-10"></div>
            )}
            <div className="hero bg-[#9538E2] mt-5 py-5">
                <div className="hero-content flex-col text-center">
                    <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">Dashboard</h1>
                    <p className="max-w-md lg:max-w-2xl mx-auto text-gray-200 mb-4">The Dashboard page of a website can provide a clean, intuitive interface where the Cart and Wishlist buttons play important roles in the user’s shopping journey.</p>
                    <div>
                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`btn w-32 lg:w-40 text-base rounded-3xl mr-5 ${activeTab === 'cart' ? 'bg-white text-[#9538E2] font-extrabold' : 'bg-[#9538E2] text-white font-normal'}`}
                        >
                            Cart
                        </button>
                        <button
                            onClick={() => setActiveTab('wishlist')}
                            className={`btn w-32 lg:w-40 text-base rounded-3xl ${activeTab === 'wishlist' ? 'bg-white text-[#9538E2] font-extrabold' : 'bg-[#9538E2] text-white font-normal'}`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 py-10 px-5 md:px-10 lg:px-10'>
                <div className="lg:container mx-auto lg:px-2">
                    <Tabs selectedIndex={activeTab === 'cart' ? 0 : 1} onSelect={(index) => setActiveTab(index === 0 ? 'cart' : 'wishlist')}>
                        <TabPanel>
                            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between mb-8'>
                                <div>
                                    <h2 className="text-2xl font-bold mb-3 lg:mb-0">Cart</h2>
                                </div>
                                <div className='flex flex-col md:flex-row lg:flex-row items-center gap-4 md:gap-5 lg:gap-5'>
                                    <h2 className='font-bold'>
                                        Total cost: {cart.length === 0 || showModal ? 0 : totalCost.toFixed(2)}
                                    </h2>
                                    <div className='flex md:flex-row lg:flex-row items-center gap-5'>
                                        <button
                                            onClick={sortCartDescending}
                                            className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
                                        >
                                            Sort by Price <img className='hidden lg:block' src={sortIcon} alt="sortIcon" />
                                        </button>
                                        <button
                                            onClick={handlePurchase}
                                            className="btn lg:text-base border-none rounded-3xl text-base text-white px-5"
                                            style={{ background: 'linear-gradient(to right, #9933ff, #cc33ff)' }}
                                            disabled={cart.length === 0 || totalCost === 0 || showModal}
                                        >
                                            Purchase
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {cart.length > 0 ? (
                                cart.map((product, index) => (
                                    <div key={`${product.product_id}-${index}`} className="flex justify-between items-center rounded-2xl p-5 mb-5 relative bg-white">
                                        <div className="flex items-center gap-5">
                                            <img className="w-24 h-24" src={product.product_image} alt={product.product_title} />
                                            <div className='space-y-2'>
                                                <h1 className="font-bold lg:text-xl">{product.product_title}</h1>
                                                <p className="w-full text-sm lg:text-base text-gray-500 line-clamp-2">{product.description}</p>
                                                <p className='font-semibold'>Price: $ {product.price}</p>
                                            </div>
                                        </div>
                                        <button className="absolute top-0.5 lg:top-2 right-2 md:right-5 lg:right-10 p-2" onClick={() => handleDeleteCart(index)}>
                                            <img className='w-6 md:w-8 lg:w-full' src={xIcon} alt="" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No products in cart.</p>
                            )}
                        </TabPanel>

                        <TabPanel>
                            <h2 className="text-2xl font-bold mb-8 lg:mb-5">Wishlist</h2>
                            {wishlist.length > 0 ? (
                                wishlist.map((product, index) => (
                                    <div key={product.product_id} className="flex justify-between items-center rounded-2xl p-5 mb-5 relative bg-white">
                                        <div className="flex items-center gap-5">
                                            <img className="w-32 h-36" src={product.product_image} alt={product.product_title} />
                                            <div className='space-y-2'>
                                                <h1 className="font-bold md:text-lg lg:text-xl">{product.product_title}</h1>
                                                <p className="text-xs md:text-sm lg:text-base text-gray-500 line-clamp-2">{product.description}</p>
                                                <p className='text-sm md:text-base lg:text-base font-semibold'>Price: $ {product.price}</p>
                                                <button className="px-4 py-1.5 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                        <button onClick={() => handleDeleteWishlist(index)} className="absolute top-0.5 lg:top-2 right-2 md:right-5 lg:right-10 p-2">
                                            <img className='w-8 lg:w-full' src={xIcon} alt="" />
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p>No products in wishlist.</p>
                            )}
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

            {showModal && (
                <dialog open className="modal">
                    <form method="dialog" className="modal-box px-5 py-10 flex flex-col justify-center items-center space-y-5">
                        <img className="w-20" src={successIcon} alt="Success Icon" />
                        <h1 className='text-2xl md:text-3xl lg:text-3xl font-bold'>Payment Successful</h1>
                        <div className='border-b-2 w-10/12 mx-auto my-10'></div>
                        <div className='text-center space-y-2'>
                            <p className="text-lg">Thanks for purchasing.</p>
                            <p>Total: {totalCost.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={handleCloseModal}
                            className="btn w-10/12 mx-auto rounded-3xl bg-gray-200 btn-md hover:bg-[#9538E2] hover:text-white transition-colors ease-in duration-100 text-lg"
                        >
                            Close
                        </button>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default Dascart;
