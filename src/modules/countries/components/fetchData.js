import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table.component";

const FetchData = () => {
    const [countrys, setCountrys] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [submiting, setSubmiting] = useState("");

    const onChangeHandler = (e) => {
        setSearchTerm(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmiting(searchTerm);
    };

    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${searchTerm}`;

        axios
            .get(url)
            .then((res) => setCountrys(res.data))
            .catch((error) => console.log(error));
    }, [submiting]);


    return (
        <Table
            countrys={countrys}
            searchTerm={searchTerm}
            onChangeHandler={onChangeHandler}
            submitHandler={submitHandler}
        />
    );
};

export default FetchData;
