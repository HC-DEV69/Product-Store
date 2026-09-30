import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">

                <span className="badge text-bg-secondary align-self-start mb-2">
                    {product.category}
                </span>

                <h5 className="card-title">{product.name}</h5>

                <p className="fs-5 fw-semibold text-success mb-3">
                    ₹ {product.price.toLocaleString("en-IN")}
                </p>

                {/* mt-auto pushes the button to the bottom so all cards line up */}
                <button
                    type="button"
                    className="btn btn-primary mt-auto"
                    onClick={handleAddToCart}
                >
                    Add To Cart
                </button>

            </div>
        </div>
    );
}

export default ProductCard;