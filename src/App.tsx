import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./router/Routes";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>
    );
};

export default App;
