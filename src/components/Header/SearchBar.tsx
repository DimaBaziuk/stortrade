import React from "react";
import { Input, Button, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="searchBar">
            <Input className="search" placeholder="Search" />
            <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                    { value: "disabled", label: "Disabled", disabled: true },
                ]}
            />
            <Button className="searchButton" type="primary">
                <SearchOutlined />
            </Button>
        </div>
    );
};

export default SearchBar;
