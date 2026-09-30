import { useMemo } from "react"

const filterProducts = (products, condition) => {
    
    return products.filter(condition)
}

const useProductFilter = (
    products,
    search,
    category
) => {
    
    const filteredProducts = useMemo( () => {

        let result = products;

        if(search){
            
            result = filterProducts(
                result,
                product =>
                    product.name
                            .toLowerCase().includes(search.toLowerCase())
            );
        }

        if(category !== "All"){

            result = filterProducts(
                result,
                product =>
                    product.category === category
            );
        
        }

        return result;


    }, [products, search, category]);

    return filteredProducts;



}

export default useProductFilter;