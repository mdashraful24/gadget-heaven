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
        <div className="w-11/12 mx-auto -mt-28">
            <h2 className="text-4xl font-bold text-center mb-10">Explore Cutting-Edge Gadgets</h2>
            <div className="lg:flex gap-8">
                <div className="p-5 rounded-xl lg:border w-80 lg:h-[295px] mx-auto mb-5 shadow-md">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
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
                            TWS
                        </button>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <Product key={product.product_id} product={product}></Product>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;

