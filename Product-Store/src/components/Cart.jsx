import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "../redux/cartSlice";

function Cart() {
    const dispatch = useDispatch();

    const { items, totalQuantity, totalAmount } = useSelector(
        (state) => state.cart
    );

    return (
        <div className="card shadow-sm">

            <div className="card-header d-flex justify-content-between align-items-center">
                <h2 className="h5 mb-0">Cart</h2>
                <span className="badge text-bg-primary rounded-pill">{totalQuantity}</span>
            </div>

            {items.length === 0 ? (
                <div className="card-body text-body-secondary text-center py-4">
                    Your cart is empty.
                </div>
            ) : (
                <>
                    <ul className="list-group list-group-flush">
                        {items.map((item) => (
                            <li className="list-group-item" key={item.id}>

                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-body-secondary">
                                            ₹ {item.price.toLocaleString("en-IN")} each
                                        </small>
                                    </div>
                                    <span className="fw-semibold">
                                        ₹ {item.totalPrice.toLocaleString("en-IN")}
                                    </span>
                                </div>

                                <div className="d-flex align-items-center gap-2 mt-2">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-sm"
                                        aria-label={`Remove one ${item.name}`}
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        −
                                    </button>

                                    <span className="px-1">{item.quantity}</span>

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-sm"
                                        aria-label={`Add one ${item.name}`}
                                        onClick={() => dispatch(addToCart(item))}
                                    >
                                        +
                                    </button>
                                </div>

                            </li>
                        ))}
                    </ul>

                    <div className="card-footer">
                        <div className="d-flex justify-content-between fs-5 fw-bold mb-3">
                            <span>Total</span>
                            <span>₹ {totalAmount.toLocaleString("en-IN")}</span>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-danger w-100"
                            onClick={() => dispatch(clearCart())}
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}

        </div>
    );
}

export default Cart;