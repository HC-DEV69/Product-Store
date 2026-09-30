import { useState } from "react"

import ProductCard from "./ProductCard"

import useProductFilter from "../hooks/useProductFilter"


const products = [

    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },

    {
        id: 2,
        name: "HeadPhones",
        price: 5000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "T-Shirt",
        price: 800,
        category: "Clothing"
    },
    {
        id: 4,
        name: "Shoes",
        price: 2200,
        category: "Clothing"
    }
    ,
    {
        id: 5,
        name: "Mobile",
        price: 15000,
        category: "Electronics"
    }
];



function ProductList() {
    
    const [ search, setSearch] = useState("");
    const [ category , setCategory] = useState("All");

    const filteredProducts = useProductFilter(
        products,
        search,
        category
    );


        return (
        <div>
            <h2 className="h4 mb-3">Products</h2>

            {/* Filters */}
            <div className="row g-2 mb-4">
                <div className="col-sm-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-sm-4">
                    <select
                        className="form-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option className="" value="All">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                    </select>
                </div>
            </div>

            {/* Responsive grid: 1 column on phones, 2 on tablets, 3 on wide screens */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3">
                {filteredProducts.map((product) => (
                    // key goes on the outermost element returned from map
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            {/* Empty state when the filter matches nothing */}
            {filteredProducts.length === 0 && (
                <div className="alert alert-secondary mt-3">No products found.</div>
            )}
        </div>
    );

}

export default ProductList