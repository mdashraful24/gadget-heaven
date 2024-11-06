import { useEffect } from "react";

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven";
    }, []);

    return (
        <div className="hero bg-[#9538E2] h-auto pt-5 mt-5">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">Statistics</h1>
                    <p className="py-6 max-w-md lg:max-w-3xl mx-auto text-gray-100">Statistics in a gadget shop can refer to various data points and metrics that provide insights into the shop's performance, sales trends, inventory, and customer behavior.</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
