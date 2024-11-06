import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setAllProducts] = useState([]);
    const [allProductsCopy, setAllProductsCopy] = useState([]);
    const [activeCategoryBtn, setActiveCategoryBtn] = useState("All Products");

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => b.price - a.price);
                setAllProductsCopy(sortedData);
                setAllProducts(sortedData);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setActiveCategoryBtn(category);

        if (category === "All Products") {
            setAllProducts(allProductsCopy);
        } else {
            const filteredProducts = allProductsCopy
                .filter(product => product.category === category)
                .sort((a, b) => b.price - a.price);
            setAllProducts(filteredProducts);
        }
    };

    return (
        <div className="w-11/12 lg:container mx-auto -mt-24 md:-mt-40 lg:-mt-34 lg:px-10">
            <h2 className="text-4xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h2>
            <div className="lg:flex gap-8">
                <div className="rounded-xl lg:border md:w-full lg:w-60 lg:h-[430px] mx-auto bg-white mb-10 shadow-md p-5">
                    <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-4 gap-5">
                        <button
                            onClick={() => handleCategoryClick("All Products")}
                            className={`btn rounded-3xl ${activeCategoryBtn === "All Products" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            All Product
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Smartphone")}
                            className={`btn rounded-3xl ${activeCategoryBtn === "Smartphone" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Phones
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Laptop")}
                            className={`btn rounded-3xl ${activeCategoryBtn === "Laptop" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Laptops
                        </button>
                        <button
                            onClick={() => handleCategoryClick("TWS")}
                            className={`btn rounded-3xl ${activeCategoryBtn === "TWS" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Smart Watches
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Chargers")}
                            className={`btn rounded-3xl ${activeCategoryBtn === "Chargers" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Chargers
                        </button>
                        <button
                            onClick={() => handleCategoryClick("Power banks")}
                            className={`btn rounded-3xl ${activeCategoryBtn === "Power banks" ? "bg-[#9538E2] text-white" : ""}`}
                        >
                            Power banks
                        </button>
                    </div>
                </div>
                <div className={`lg:container ${products.length === 0 ? '' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
                    {products.length === 0 ? (
                        <div className="flex justify-center items-center w-full h-full">
                            <p className="text-xl md:text-2xl lg:text-3xl font-bold">No products available</p>
                        </div>
                    ) : (
                        products.map(product => (
                            <Product key={product.product_id} product={product} />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
};

export default Products;
