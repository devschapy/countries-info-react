import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table.component";
import SearchInput from "./SearchInput";

const FetchData = () => {
    const [countrys, setCountrys] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newFilterCountryItem = countrys.filter((val) => {
            if (searchTerm === "") {
                return val;
            } else if (
                val.name.common.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return val;
            }
        });
        setCountrys(newFilterCountryItem);
    };

    const fetchCountryList = async () => {
        try {
            const url = `https://restcountries.com/v3.1/all`;
            const { data } = await axios.get(url);
            setCountrys(data);
        } catch (error) {
            console.log(error);
        }
    };
    if (searchTerm === "") {
        fetchCountryList();
    }

    useEffect(() => {
        fetchCountryList();
    }, []);

    return (
        <>
            <SearchInput 
                searchTerm={searchTerm}
                onChangeHandler={onChangeHandler}
                submitHandler={submitHandler}
            />
            <Table
                countrys={countrys}
            />
        </>
    );
};

export default FetchData;
