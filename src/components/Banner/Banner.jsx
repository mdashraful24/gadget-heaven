import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigateDashboard = useNavigate();
    const goDashboard = () => {
        navigateDashboard('dashboard');
    }

    return (
        <div className="hero bg-[#9538E2] h-auto rounded-b-2xl pt-5 pb-64">
            <div className="lg:hero-content p-0  text-center">
                <div className="px-2">
                    <h1 className="text-5xl font-bold text-white max-w-md lg:max-w-5xl lg:leading-tight">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 max-w-md lg:max-w-2xl mx-auto text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button onClick={goDashboard} className="btn w-32 rounded-3xl text-[#9538E2] hover:bg-[#9538E2] hover:text-white">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;