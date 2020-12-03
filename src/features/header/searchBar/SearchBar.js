import React from 'react';
import {useState} from 'react';

export const SearchBar = () => {
    const [search, setSearch] = useState();

    return (
        <input className=""
            id="Search"
            value={search}
        />
    );
};