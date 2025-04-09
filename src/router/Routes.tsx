import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Help from "../pages/Help/Help";
import Account from "../pages/Account/Account";
import Catalog from "../pages/Catalog/Catalog";
import Product from "../pages/Product/Product";

const Routers = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/help" element={<Help />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    );
};

export default Routers;
