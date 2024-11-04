import banner from '../../assets/banner.jpg'

const Floating = () => {
    return (
        <div className='border p-4 rounded-3xl relative bottom-56 md:w-11/12 lg:w-9/12 mx-auto hero-overlay bg-white bg-opacity-20'>
            <div className="hero rounded-3xl py-96" style={{ backgroundImage: `url(${banner})` }}>
            </div>
        </div>
    );
};

export default Floating;