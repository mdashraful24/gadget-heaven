// import { useEffect, useState } from "react";
// // import DashboardBan from "../DashboardBan/DashboardBan";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// // import { useLoaderData } from "react-router-dom";
// // import { getStoredCartList, getStoredWishList } from "../../utility/addToCart";
// import AddCart from "../AddCart/AddCart";

// const Dashboard = () => {
//     // const [cartList, setCartList] = useState([]);
//     // const [wishlist, setWishlist] = useState([]);

//     // const allProducts = useLoaderData();

//     // useEffect(() => {
//     //     const storedCartList = getStoredCartList();
//     //     const storedCartListInt = storedCartList.map(id => parseInt(id));
//     //     const gadgetCartList = allProducts.filter(product => storedCartListInt.includes(product.product_id))
//     //     setCartList(gadgetCartList);

//     //     const storedWishlist = getStoredWishList();
//     //     const storedWishlistInt = storedWishlist.map(id => parseInt(id));
//     //     const gadgetWishlist = allProducts.filter(product => storedWishlistInt.includes(product.product_id));
//     //     setWishlist(gadgetWishlist);

//     // }, [])

//     const [selectedDasTab, setSelectedDasTab] = useState(0);
//     const handleTabChange = (tabIndex) => {
//         setSelectedDasTab(tabIndex);
//     }

//     return (
//         <div>
//             <DashboardBan onTabChange={handleTabChange} selectedTab={selectedDasTab}></DashboardBan>
//             <Tabs selectedIndex={selectedDasTab} onSelect={(index) => setSelectedDasTab(index)}>

//                 <TabPanel>
//                     <h2 className="text-2xl mb-5">Cart</h2>
//                     <h2>
//                         {
//                             cartList.map(product => <AddCart key={product.product_id} product={product}></AddCart>)
//                         }
//                     </h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2 className="text-2xl mb-5">Wishlist</h2>
//                     <div>
//                         {
//                             wishlist.map(product => <AddCart key={product.product_id} product={product}></AddCart>)
//                         }
//                     </div>
//                 </TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default Dashboard;