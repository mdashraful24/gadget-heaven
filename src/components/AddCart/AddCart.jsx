const AddCart = ({ product }) => {
    const { product_image, product_title, price, description } = product;
    return (
        <div className="flex justify-between items-center border rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-5">
                <div>
                    <img className="w-20 h-20 object-cover" src={product_image} alt={product_title} />
                </div>
                <div>
                    <h1 className="font-bold text-xl">{product_title}</h1>
                    <p className="text-lg">Price: ${price}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
                </div>
            </div>
            <button onClick={() => handleRemoveFromCart(product)} className="p-2">
                <i className="fa-regular fa-trash-can text-[#F14749] text-lg"></i>
            </button>
        </div>
    );
};

export default AddCart;