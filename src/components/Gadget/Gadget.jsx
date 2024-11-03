import Banner from "../Banner/Banner";
import Floating from "../Floating/Floating";
import Navbar from "../Navbar/Navbar";

const Gadget = () => {
    return (
        <div className="lg:w-11/12 mx-auto pt-4">
            <Navbar></Navbar>
            <Banner></Banner>
            <Floating></Floating>
            <section className='absolute'></section>
        </div>
    );
};

export default Gadget;