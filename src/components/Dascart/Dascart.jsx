import { useContext, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CartH, WishlistH } from '../Root/Root';
import sort from '../../assets/sort.png'

const Dascart = () => {
    const [cart, setCart] = useContext(CartH);
    const [wishlist, setWishlist] = useContext(WishlistH);
    
    const [activeTab, setActiveTab] = useState('cart');

    return (
        <div>
            <div className="hero bg-[#9538E2] mt-5 py-5">
                <div className="hero-content flex-col text-center">
                    <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">Dashboard</h1>
                    <p className="max-w-md lg:max-w-2xl mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level.</p>
                    <div>
                        <button
                            onClick={() => setActiveTab('cart')}
                            className={`btn w-32 rounded-3xl mr-5 ${activeTab === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                        >
                            Cart
                        </button>
                        <button
                            onClick={() => setActiveTab('wishlist')}
                            className={`btn w-32 rounded-3xl ${activeTab === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                        >
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-2">
                <Tabs selectedIndex={activeTab === 'cart' ? 0 : 1} onSelect={(index) => setActiveTab(index === 0 ? 'cart' : 'wishlist')}>
                    <TabPanel>
                        <div className='flex items-center justify-between mb-5'>
                            <div>
                                <h2 className="text-2xl">Cart</h2>
                            </div>
                            <div className='flex items-center gap-5'>
                                <h2>Total cost: 999</h2>
                                <button className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
                                >Sort by Price <img src={sort} alt="" /></button>
                                {/* <button className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
                                >Purchase</button> */}
                                <button
                                    className="btn border-none rounded-3xl text-base text-white px-5"
                                    style={{ background: 'linear-gradient(to right, #9933ff, #cc33ff)' }}>
                                    Purchase
                                </button>

                            </div>
                        </div>
                        {cart.length > 0 ? (
                            cart.map((product) => (
                                <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5 ">
                                    <div className="flex items-center gap-5">
                                        <img className="w-20 h-20 object-cover" src={product.product_image} alt={product.product_title} />
                                        <div className='space-y-2'>
                                            <h1 className="font-bold text-xl">{product.product_title}</h1>
                                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                            <p className="text-lg">Price: ${product.price}</p>
                                        </div>
                                    </div>
                                    <button className="p-2">
                                        <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No products in cart.</p>
                        )}
                    </TabPanel>

                    <TabPanel>
                        <h2 className="text-2xl mb-5">Wishlist</h2>
                        {wishlist.length > 0 ? (
                            wishlist.map((product) => (
                                <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5">
                                    <div className="flex items-center gap-5">
                                        <img className="w-32 h-36 object-cover" src={product.product_image} alt={product.product_title} />
                                        <div className='space-y-2'>
                                            <h1 className="font-bold text-xl">{product.product_title}</h1>
                                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                            <p className="text-lg">Price: ${product.price}</p>
                                            <button className="px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                    <button className="p-2">
                                        <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
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
    );
};

export default Dascart;
