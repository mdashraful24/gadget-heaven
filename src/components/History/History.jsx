import { useContext, useEffect } from "react";
import { HistoryHandle } from "../Root/Root";

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

            <div className="lg:container mx-auto mt-10 px-8 lg:px-2">
                <h1 className="text-3xl font-bold text-black mb-7">Purchase History</h1>
                {purchasesHistory.length > 0 ? (
                    purchasesHistory.map((purchase, index) => (
                        <div key={index} className="my-10 mx-auto">
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Purchase {index + 1}</h2>
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
                                            <i class="fa-solid fa-check text-xl text-[#23BE0A] pr-6"></i>
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