import { Link } from "react-router-dom";

const Product = ({ product }) => {

    const { product_id, product_title, product_image, price} = product;

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


// import { Link } from "react-router-dom";

// const Product = ({ product }) => {
//     const { product_id, product_title, product_image, price } = product;

//     return (
//         <div className="card border text-lg max-w-xs mx-auto">
//             <div className="p-5">
//                 <img
//                     className="rounded-xl mx-auto -mb-7 w-full h-64 object-cover"
//                     src={product_image}
//                     alt={product_title}
//                 />
//             </div>
//             <div className="card-body">
//                 <h2 className="card-title text-xl">
//                     {product_title}
//                 </h2>
//                 <p className="text-lg">Price: ${price}</p>
//                 <div className="card-actions items-center justify-between">
//                     <Link to={`/products/${product_id}`}>
//                         <button className="btn btn-md text-base text-[#9538E2] bg-white rounded-3xl border-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-none">
//                             View Details
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;
