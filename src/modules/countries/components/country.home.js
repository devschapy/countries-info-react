import React from "react";
import { useLocation } from "react-router-dom";

const CountryHome = () => {
    const location = useLocation();

    return (
        <div className="bg-gray-300 py-4">
            <div className="container">
                <h1 className="text-4xl font-bold text-center underline py-2">
                    {location.state.name}
                </h1>
                <img src={location.state.flags} alt="Country PNG" />

                <div className="flex space-x-3 space-y-4">
                    <div className="w-2/12">
                        <h3>Capital</h3>
                        <h3>Population</h3>
                        <h3>Area</h3>
                        <h3>Region</h3>
                        <h3>Subregion</h3>
                        <h3>Languages</h3>
                        <h3>Currencies Name @ Symbol</h3>
                    </div>
                    <div className="w-10/12">
                        <p>{location.state.capital}</p>
                        <p>{location.state.population}</p>
                        <p>{location.state.area}</p>
                        <p>{location.state.region}</p>
                        <p>{location.state.subregion}</p>
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
                {/* 
                <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </div>
    );
};

export default CountryHome;
