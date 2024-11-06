const Footer = () => {
    return (
        <div className=" bg-white">
            <div className="text-center pt-16">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p className="mt-3">Stay connected with the latest in tech and innovation.</p>
            </div>
            <div className='border-b-2 w-10/12 mx-auto my-10'></div>
            <section className="w-7/12 mx-auto">
                <footer className="flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col md:flex-row lg:flex-row justify-between space-y-12 md:space-y-0 lg:space-y-0 container mx-auto w-11/12">
                        <nav className="space-y-3 text-center">
                            <h1 className="text-lg font-bold">Services</h1>
                            <div className="flex flex-col space-y-2 text-stone-500">
                                <p><a className="link link-hover">Product Support</a></p>
                                <p><a className="link link-hover">Order Tracking</a></p>
                                <p><a className="link link-hover">Shipping & Delivery</a></p>
                                <p><a className="link link-hover">Returns</a></p>
                            </div>
                        </nav>
                        <nav className="space-y-3 text-center">
                            <h6 className="text-lg font-bold">Company</h6>
                            <div className="flex flex-col space-y-2 text-stone-500">
                                <p><a className="link link-hover">About Us</a></p>
                                <p><a className="link link-hover">Careers</a></p>
                                <p><a className="link link-hover">Contact</a></p>
                            </div>
                        </nav>
                        <nav className="space-y-3 text-center">
                            <h6 className="text-lg font-bold">Legal</h6>
                            <div className="flex flex-col space-y-2 text-stone-500">
                                <p><a className="link link-hover">Terms of Service</a></p>
                                <p><a className="link link-hover">Privacy Policy</a></p>
                                <p><a className="link link-hover">Cookie Policy</a></p>
                            </div>
                        </nav>
                    </div>
                </footer>
            </section>
        </div>
    );
};

export default Footer;