import React from "react";
import { useLocation } from "react-router-dom";

const CountryHome = () => {
    const location = useLocation();
    console.log(location.state.curncKeys);
    return (
        <div>
            <p>CountryHome</p>
            <p>{location.state.name}</p>
            <p>{location.state.capital}</p>
            <p>{location.state.population}</p>
            <p>{location.state.area}</p>
            <p>{location.state.region}</p>
            <p>{location.state.subregion}</p>
            <img src={location.state.flags} alt="" />
            {location.state.langKeys.map((val, index) => (
                <p key={index}>{val}</p>
            ))}
            {location.state.curncKeys.map((val, index) => (
                <div key={index}>
                    <p>{val.name}</p>
                    <p>{val.symbol}</p>
                </div>
            ))}
        </div>
    );
};

export default CountryHome;
