import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import "./searchBar.scss";

const SearchBar: React.FC = () => {
    return (
        <section className="searchBar main_container_box">
            <div className="wrapper">
                <div className="searchBlock">
                    <Input className="search" placeholder="Search" />
                    <Button className="searchButton" type="primary">
                        <SearchOutlined />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;
