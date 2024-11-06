import banner from '../../assets/banner.jpg'

const Floating = () => {
    return (
        <div className='lg:container mx-auto p-3 md:px-5 lg:p-0'>
            <div className='relative bottom-32 md:bottom-56 lg:bottom-56 md:w-11/12 lg:w-9/12 mx-auto hero-overlay bg-white bg-opacity-20 border-2 border-white rounded-[28px] p-5'>
                <div className='lg:h-[600px]'>
                    <img className='h-full w-full rounded-3xl' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Floating;