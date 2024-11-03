import banner from '../../assets/banner.jpg'

const Floating = () => {
    return (
        <div className='border p-4 rounded-xl relative bottom-56 w-9/12 mx-auto'>
            <div className="hero rounded-xl py-96" style={{ backgroundImage: `url(${banner})` }}>
            </div>
        </div>
    );
};

export default Floating;