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


// import { useEffect } from "react";
// import {
//     ResponsiveContainer,
//     ComposedChart,
//     Line,
//     Area,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
// } from 'recharts';

// const Statistics = () => {
//     useEffect(() => {
//         document.title = "Statistics | Gadget Heaven";
//     }, []);

//     const data = [
//         { name: 'Page A', uv: 590, pv: 800, amt: 1400 },
//         { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
//         { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
//         { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
//         { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
//         { name: 'Page F', uv: 1400, pv: 680, amt: 1700 },
//     ];

//     return (
//         <div>
//             <div className="hero bg-[#9538E2] h-auto pt-5 mt-5 pb-10">
//                 <div className="hero-content text-center flex flex-col items-center">
//                     <div className="max-w-2xl">
//                         <h1 className="text-5xl font-bold text-white lg:leading-tight">Statistics</h1>
//                         <p className="py-6 text-gray-100">
//                             Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Chart Section */}
//             <div className="w-11/12 mx-auto mt-20">
//                 <ResponsiveContainer width="100%" height={400}>
//                     <ComposedChart
//                         data={data}
//                         margin={{
//                             top: 20,
//                             right: 20,
//                             bottom: 20,
//                             left: 20,
//                         }}
//                     >
//                         <CartesianGrid stroke="#f5f5f5" />
//                         <XAxis dataKey="name" scale="band" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Area type="monotone" dataKey="amt" fill="#9958E8" stroke="" />
//                         <Bar dataKey="pv" barSize={20} fill="#9538E2" />
//                         {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
//                     </ComposedChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// };

// export default Statistics;
