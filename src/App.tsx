import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./router/Routes";
import SearchBar from "./components/SearchBar/SearchBar";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <Routers />
            <Footer />
        </>
    );
};

export default App;
