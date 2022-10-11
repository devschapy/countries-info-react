import React from "react";
import { useLocation } from "react-router-dom";

const CountryHome = () => {
    const location = useLocation();

    return (
        <div className="bg-gray-300 py-4">
            <div className="container">
                <h1 className="text-4xl font-bold text-center underline py-2">
                    World Countries Informations
                </h1>

                <h1 className="text-4xl">{location.state.name}</h1>

                <p>{location.state.capital}</p>
            <p>{location.state.population}</p>
            <p>{location.state.area}</p>
            <p>{location.state.region}</p>
            <p>{location.state.subregion}</p>
            <img src={location.state.flags} alt="Country PNG" />
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
        </div>
    );
};

export default CountryHome;
