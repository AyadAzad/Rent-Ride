"use client"

import {Manufacturer} from "@/components/index";
import {useState} from "react";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () =>{}
    return (
        <form className="SearchBar">
            {handleSearch}
            <div className="searchbar__item">
                <Manufacturer
                manufacturer={manufacturer}
                setManufacturer={handleSearch}
                />
            </div>
        </form>
    )
}
export default SearchBar