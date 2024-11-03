const Product = ({ product }) => {

    const { product_id, product_title, product_image, category, price, description, specification, availability, rating } = product;

    return (
        <div className=''>
            <div className="card border text-lg">
                <div className="p-5">
                    <img
                        className="rounded-xl mx-auto -mb-7"
                        src={product_image}
                        alt="product_image"
                    />
                </div>
                <div className="card-body">
                    <h2 className="card-title text-xl">
                        {product_title}
                    </h2>
                    <p className="text-lg">Price: {price}$</p>
                    <div className="card-actions items-center justify-between">
                        <button className="btn btn-md text-base text-[#9538E2] bg-white rounded-3xl border-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-none">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;