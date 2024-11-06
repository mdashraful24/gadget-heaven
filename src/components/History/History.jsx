import { useContext, useEffect } from "react";
import { HistoryHandle } from "../Root/Root";
import parches from '../../assets/parches.png';

const History = () => {
    const [purchasesHistory] = useContext(HistoryHandle);
    
    useEffect(() => {
        document.title = "History | Gadget Heaven";
    }, []);

    return (
        <div className="bg-gray-100 pb-10">
            <div className="hero bg-[#9538E2] h-auto pt-5 mt-5">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">History</h1>
                        <p className="py-6 max-w-md lg:max-w-2xl mx-auto text-gray-100">
                            This feature provides users with a comprehensive view of all their purchases, and which items were purchased at how many prices.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:container mx-auto mt-10 px-5 md:px-10 lg:px-10">
                <h1 className="text-3xl font-bold md:text-3xl lg:text-3xl text-black mb-7">Purchase History</h1>
                {purchasesHistory.length > 0 ? (
                    purchasesHistory.map((purchase, index) => (
                        <div key={index} className="my-10 mx-auto">
                            <div className="mb-3 space-y-1">
                                <h2 className="text-xl font-semibold">Purchase #{index + 1}</h2>
                                <p className="text-sm text-gray-700 font-semibold">Date: <span className="font-normal">{purchase.date}</span></p>
                            </div>
                            <div>
                                {purchase.items.map((item, ind) => (
                                    <div key={ind} className="flex justify-between items-center gap-5 mb-3 p-4 rounded-xl bg-white">
                                        <div className="flex items-center gap-5">
                                            <img src={item.product_image} alt={item.product_title} className="w-20 h-20 rounded" />
                                            <div>
                                                <h2 className="text-lg font-bold">{item.product_title}</h2>
                                                <p className="text-gray-700">Price: ${item.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <img className="w-8 md:w-10 lg:w-12" src={parches} alt="parches" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700 mt-4">No purchase history yet.</p>
                )}
            </div>
        </div>
    );
};

export default History;