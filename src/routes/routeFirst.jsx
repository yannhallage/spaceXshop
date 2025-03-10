import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mens from "../pages/mens";
import Womens from "../pages/womens";
import Accessories from "../pages/accessories";
import Home from "../pages/home";
import NavbarSpacex from "../components/navbarSpace";

const FirstRoute = () => {
    return (
        <>

            <Router >
                <NavbarSpacex />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mens" element={<Mens />} />
                    <Route path="/womens" element={<Womens />} />
                    <Route path="/accessories" element={<Accessories />} />
                </Routes>
            </Router>
        </>
    )
}

export default FirstRoute;
