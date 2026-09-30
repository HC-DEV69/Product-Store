import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
    return (
        // data-bs-theme="dark" turns on Bootstrap's dark palette for everything inside
        <div data-bs-theme="dark" className="bg-body text-body min-vh-100">

            <nav className="navbar border-bottom mb-4">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">🛍️ Simple Product Store</span>
                </div>
            </nav>

            <div className="container pb-5">
                <div className="row g-4">

                    {/* Products: full width on mobile, 8/12 on large screens */}
                    <div className="col-lg-8">
                        <ProductList />
                    </div>

                    {/* Cart: sticks to the top while scrolling on large screens */}
                    <div className="col-lg-4">
                        <div className="sticky-lg-top" style={{ top: "1rem" }}>
                            <Cart />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default App;