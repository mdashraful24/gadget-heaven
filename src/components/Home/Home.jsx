import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Floating from "../Floating/Floating";
import Products from "../Products/Products";

const Home = () => {

    useEffect(() => {
        document.title = "Home | Gadget Heaven";
    }, []);

    return (
        <div className="bg-gray-50 pb-20">
            <Banner></Banner>
            <Floating></Floating>
            <Products></Products>
        </div>
    );
};

export default Home;