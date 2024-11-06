import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const { product_id, product_title, product_image, price} = product;

    return (
        <div>
            <div className="card text-lg bg-white shadow-sm">
                <div className="p-5">
                    <img
                        className="rounded-xl mx-auto -mb-7 h-96"
                        src={product_image}
                        alt="product_image"
                    />
                </div>
                <div className="card-body px-6 pb-6">
                    <h2 className="card-title text-xl">
                        {product_title}
                    </h2>
                    <p className="text-lg">Price: {price}$</p>
                    <div className="card-actions items-center justify-between">
                        <Link to={`/products/${product_id}`}>
                            <button className="btn btn-md text-base text-[#9538E2] bg-white rounded-3xl border-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-none">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;