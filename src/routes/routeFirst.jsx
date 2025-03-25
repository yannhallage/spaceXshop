import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mens from "../pages/mens";
import Womens from "../pages/womens";
import Accessories from "../pages/accessories";
import Home from "../pages/home";
import NavbarSpacex from "../components/navbarSpace";
import Products from "../pages/products";

const FirstRoute = () => {
    return (
        <>

            <Router >
                <NavbarSpacex />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collection/mens" element={<Mens />} />
                    <Route path="/collection/womens" element={<Womens />} />
                    <Route path="/collection/accessories" element={<Accessories />} />
                    <Route path="/collection/Products" element={<Products />} />
                    <Route path="/collection/Card" element={<Accessories />} />
                </Routes>
            </Router>
        </>
    )
}

export default FirstRoute;
