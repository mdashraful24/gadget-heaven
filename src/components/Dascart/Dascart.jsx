// import { useContext, useState } from 'react';
// import { Tab, Tabs, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { CartH, WishlistH } from '../Root/Root';
// import { useNavigate } from 'react-router-dom';
// import sortIcon from '../../assets/sort.png';
// import successIcon from '../../assets/success.png';

// const Dascart = () => {
//     const [cart, setCart] = useContext(CartH);
//     const [wishlist, setWishlist] = useContext(WishlistH);
//     const [activeTab, setActiveTab] = useState('cart');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [purchaseTotal, setPurchaseTotal] = useState(0);
//     const navigate = useNavigate();

//     const totalCost = cart.reduce((sum, product) => sum + product.price, 0);

//     const sortByPrice = () => {
//         const sortedCart = [...cart].sort((a, b) => a.price - b.price);
//         setCart(sortedCart);
//     };

//     const handlePurchase = () => {
//         setPurchaseTotal(totalCost);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setCart([]);
//         navigate('/');
//     };

//     return (
//         <div className={`relative ${isModalOpen ? 'lg:overflow-hidden' : ''}`}>
//             {isModalOpen && (
//                 <div className="fixed inset-0 bg-black opacity-70 z-10"></div>
//             )}
//             <div className="hero bg-[#9538E2] mt-5 py-5">
//                 <div className="hero-content flex-col text-center">
//                     <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">Dashboard</h1>
//                     <p className="max-w-md lg:max-w-2xl mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level.</p>
//                     <div>
//                         <button
//                             onClick={() => setActiveTab('cart')}
//                             className={`btn w-32 rounded-3xl mr-5 ${activeTab === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
//                         >
//                             Cart
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('wishlist')}
//                             className={`btn w-32 rounded-3xl ${activeTab === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
//                         >
//                             Wishlist
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-10 px-2">
//                 <Tabs selectedIndex={activeTab === 'cart' ? 0 : 1} onSelect={(index) => setActiveTab(index === 0 ? 'cart' : 'wishlist')}>
//                     <TabPanel>
//                         <div className='flex items-center justify-between mb-5'>
//                             <div>
//                                 <h2 className="text-2xl">Cart</h2>
//                             </div>
//                             <div className='flex items-center gap-5'>
//                                 <h2>Total cost: {isModalOpen ? '0' : totalCost}</h2>
//                                 <button
//                                     onClick={sortByPrice}
//                                     className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
//                                 >
//                                     Sort by Price <img src={sortIcon} alt="sort icon" />
//                                 </button>
//                                 <button
//                                     onClick={handlePurchase}
//                                     disabled={totalCost === 0}
//                                     className={`btn border-none rounded-3xl text-base text-white px-5 ${totalCost === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                                     style={{ background: 'linear-gradient(to right, #9933ff, #cc33ff)' }}
//                                 >
//                                     Purchase
//                                 </button>
//                             </div>
//                         </div>
//                         {cart.length > 0 ? (
//                             cart.map((product) => (
//                                 <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5">
//                                     <div className="flex items-center gap-5">
//                                         <img className="w-20 h-20 object-cover" src={product.product_image} alt={product.product_title} />
//                                         <div className='space-y-2'>
//                                             <h1 className="font-bold text-xl">{product.product_title}</h1>
//                                             <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//                                             <p className="text-lg">Price: ${product.price.toFixed(2)}</p>
//                                         </div>
//                                     </div>
//                                     <button className="p-2">
//                                         <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
//                                     </button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products in cart.</p>
//                         )}
//                     </TabPanel>

//                     <TabPanel>
//                         <h2 className="text-2xl mb-5">Wishlist</h2>
//                         {wishlist.length > 0 ? (
//                             wishlist.map((product) => (
//                                 <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5">
//                                     <div className="flex items-center gap-5">
//                                         <img className="w-32 h-36 object-cover" src={product.product_image} alt={product.product_title} />
//                                         <div className='space-y-2'>
//                                             <h1 className="font-bold text-xl">{product.product_title}</h1>
//                                             <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//                                             <p className="text-lg">Price: ${product.price}</p>
//                                             <button className="px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
//                                                 Add to Cart
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <button className="p-2">
//                                         <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
//                                     </button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products in wishlist.</p>
//                         )}
//                     </TabPanel>
//                 </Tabs>
//             </div>

//             {isModalOpen && (
// <section>
//     <dialog open className="modal">
//         <form method="dialog" className="modal-box px-5 py-10 flex flex-col justify-center items-center space-y-5">
//             <img className="w-20" src={successIcon} alt="" />
//             <h1 className='text-3xl font-bold'>Payment Successful</h1>
//             <div className='border-b-2 w-10/12 mx-auto my-10'></div>
//             <div className='text-center space-y-2'>
//                 <p className="text-lg">Thanks for purchasing.</p>
//                 <p>Total: ${parseFloat(purchaseTotal).toFixed(2)}</p>
//             </div>
//             <button
//                 onClick={closeModal}
//                 className="btn w-10/12 mx-auto rounded-3xl bg-gray-200 btn-md hover:bg-[#9538E2] hover:text-white transition-colors ease-in duration-100 text-lg"
//             >
//                 Close
//             </button>
//         </form>
//     </dialog>
// </section>
//             )}
//         </div>
//     );
// };

// export default Dascart;


// import { useContext, useState } from 'react';
// import { Tab, Tabs, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { CartH, WishlistH } from '../Root/Root';
// import sort from '../../assets/sort.png'

// const Dascart = () => {
//     const [cart, setCart] = useContext(CartH);
//     const [wishlist, setWishlist] = useContext(WishlistH);

//     const [activeTab, setActiveTab] = useState('cart');

//     return (
//         <div>
//             <div className="hero bg-[#9538E2] mt-5 py-5">
//                 <div className="hero-content flex-col text-center">
//                     <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">Dashboard</h1>
//                     <p className="max-w-md lg:max-w-2xl mx-auto text-gray-200">Explore the latest gadgets that will take your experience to the next level.</p>
//                     <div>
//                         <button
//                             onClick={() => setActiveTab('cart')}
//                             className={`btn w-32 rounded-3xl mr-5 ${activeTab === 'cart' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
//                         >
//                             Cart
//                         </button>
//                         <button
//                             onClick={() => setActiveTab('wishlist')}
//                             className={`btn w-32 rounded-3xl ${activeTab === 'wishlist' ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
//                         >
//                             Wishlist
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-10 px-2">
//                 <Tabs selectedIndex={activeTab === 'cart' ? 0 : 1} onSelect={(index) => setActiveTab(index === 0 ? 'cart' : 'wishlist')}>
//                     <TabPanel>
//                         <div className='flex items-center justify-between mb-5'>
//                             <div>
//                                 <h2 className="text-2xl">Cart</h2>
//                             </div>
//                             <div className='flex items-center gap-5'>
//                                 <h2>Total cost: 999</h2>
//                                 <button className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
//                                 >Sort by Price <img src={sort} alt="" /></button>
//                                 {/* <button className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
//                                 >Purchase</button> */}
//                                 <button
//                                     className="btn border-none rounded-3xl text-base text-white px-5"
//                                     style={{ background: 'linear-gradient(to right, #9933ff, #cc33ff)' }}>
//                                     Purchase
//                                 </button>

//                             </div>
//                         </div>
//                         {cart.length > 0 ? (
//                             cart.map((product) => (
//                                 <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5 ">
//                                     <div className="flex items-center gap-5">
//                                         <img className="w-20 h-20 object-cover" src={product.product_image} alt={product.product_title} />
//                                         <div className='space-y-2'>
//                                             <h1 className="font-bold text-xl">{product.product_title}</h1>
//                                             <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//                                             <p className="text-lg">Price: ${product.price}</p>
//                                         </div>
//                                     </div>
//                                     <button className="p-2">
//                                         <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
//                                     </button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products in cart.</p>
//                         )}
//                     </TabPanel>

//                     <TabPanel>
//                         <h2 className="text-2xl mb-5">Wishlist</h2>
//                         {wishlist.length > 0 ? (
//                             wishlist.map((product) => (
//                                 <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5">
//                                     <div className="flex items-center gap-5">
//                                         <img className="w-32 h-36 object-cover" src={product.product_image} alt={product.product_title} />
//                                         <div className='space-y-2'>
//                                             <h1 className="font-bold text-xl">{product.product_title}</h1>
//                                             <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
//                                             <p className="text-lg">Price: ${product.price}</p>
//                                             <button className="px-4 py-2 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
//                                                 Add to Cart
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <button className="p-2">
//                                         <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
//                                     </button>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No products in wishlist.</p>
//                         )}
//                     </TabPanel>
//                 </Tabs>
//             </div>
//             {/* Modal */}
//             <section>
//                 <dialog open className="modal">
//                     <form method="dialog" className="modal-box px-5 py-10 flex flex-col justify-center items-center space-y-5">
//                         <img className="w-20" src="" alt="" />
//                         <h1 className='text-3xl font-bold'>Congratulation</h1>
//                         <div className='border-b-2 w-10/12 mx-auto my-10'></div>
//                         <div className='text-center space-y-2'>
//                             <p className="text-lg">Thanks for purchasing.</p>
//                             <p>Total: </p>
//                         </div>
//                         <button
//                             className="btn w-10/12 mx-auto rounded-3xl bg-gray-200 btn-md hover:bg-[#9538E2] hover:text-white transition-colors ease-in duration-100 text-lg"
//                         >
//                             Close
//                         </button>
//                     </form>
//                 </dialog>
//             </section>
//         </div>
//     );
// };

// export default Dascart;


import { useContext, useState } from 'react';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CartH, WishlistH } from '../Root/Root';
import { useNavigate } from 'react-router-dom';
import sortIcon from '../../assets/sort.png';
import successIcon from '../../assets/success.png';

const Dascart = () => {
    const [cart, setCart] = useContext(CartH);
    const [wishlist, setWishlist] = useContext(WishlistH);
    const [activeTab, setActiveTab] = useState('cart');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const totalCost = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

    const sortCartDescending = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    const handlePurchase = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCart([]);
        navigate('/');
    };

    const handleDeleteCart = (index) => {
        const newCart = cart.filter((product, ind) => ind !== index);
        setCart(newCart);
    };


    return (
        <div className={`relative ${showModal ? 'overflow-hidden' : ''}`}>
            {showModal && (
                <div className="fixed inset-0 bg-black opacity-70 z-10"></div>
            )}
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

            <div className="lg:container mx-auto mt-10 px-2">
                <Tabs selectedIndex={activeTab === 'cart' ? 0 : 1} onSelect={(index) => setActiveTab(index === 0 ? 'cart' : 'wishlist')}>
                    <TabPanel>
                        <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between mb-5'>
                            <div>
                                <h2 className="text-2xl">Cart</h2>
                            </div>
                            <div className='flex flex-col md:flex-row lg:flex-row items-center gap-5'>
                                <h2>Total cost: ${showModal ? 0 : totalCost}</h2>
                                <button
                                    onClick={sortCartDescending}
                                    className="btn rounded-3xl border-[#9538E2] text-[#9538E2] bg-white"
                                >
                                    Sort by Price <img src={sortIcon} alt="sortIcon" />
                                </button>
                                <button
                                    onClick={handlePurchase}
                                    className="btn border-none rounded-3xl text-base text-white px-5"
                                    style={{ background: 'linear-gradient(to right, #9933ff, #cc33ff)' }}
                                    disabled={cart.length === 0 || totalCost === '0.00'}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>
                        {cart.length > 0 ? (
                            cart.map((product, index) => (
                                <div key={`${product.product_id}-${index}`} className="flex justify-between items-center border rounded-2xl p-5 mb-5 relative">
                                    <div className="flex items-center gap-5">
                                        <img className="w-20 h-20 object-cover" src={product.product_image} alt={product.product_title} />
                                        <div className='space-y-2'>
                                            <h1 className="font-bold lg:text-xl">{product.product_title}</h1>
                                            <p className="text-sm lg:text-base text-gray-500 line-clamp-2">{product.description}</p>
                                            <p>Price: ${product.price}</p>
                                        </div>
                                    </div>
                                    <button className="absolute top-2 right-2 p-2" onClick={() => handleDeleteCart(index)}>
                                        <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No products in cart.</p>
                        )}

                        {/* {cart.map((product, index) => (
                            <div key={`${product.product_id}-${index}`} className="flex justify-between items-center border rounded-2xl p-5 mb-5">
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
                        ))} */}

                    </TabPanel>

                    <TabPanel>
                        <h2 className="text-2xl mb-5">Wishlist</h2>
                        {wishlist.length > 0 ? (
                            wishlist.map((product) => (
                                <div key={product.product_id} className="flex justify-between items-center border rounded-2xl p-5 mb-5">
                                    <div className="flex items-center gap-5">
                                        <img className="w-32 h-36 object-cover" src={product.product_image} alt={product.product_title} />
                                        <div className='space-y-2'>
                                            <h1 className="font-bold md:text-lg lg:text-xl">{product.product_title}</h1>
                                            <p className="text-xs md:text-sm lg:text-base text-gray-500 line-clamp-2">{product.description}</p>
                                            <p>Price: ${product.price}</p>
                                            <button className="px-4 py-1.5 bg-[#9538E2] text-white rounded-3xl flex items-center space-x-2">
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

            {/* Modal */}
            {showModal && (
                <dialog open className="modal">
                    <form method="dialog" className="modal-box px-5 py-10 flex flex-col justify-center items-center space-y-5">
                        <img className="w-20" src={successIcon} alt="Success Icon" />
                        <h1 className='text-3xl font-bold'>Payment Successful</h1>
                        <div className='border-b-2 w-10/12 mx-auto my-10'></div>
                        <div className='text-center space-y-2'>
                            <p className="text-lg">Thanks for purchasing.</p>
                            <p>Total: ${totalCost}</p>
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
