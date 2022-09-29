import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table.component";

const FetchData = () => {
    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all ";

        axios
            .get(url)
            .then((res) => setCountrys(res.data))
            .catch((error) => console.log(error));
    }, []);

    return <Table countrys={countrys} />;
};

export default FetchData;
