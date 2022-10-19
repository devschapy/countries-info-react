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

                <div className="space-y-3">
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Capital</h3>
                        <p className="w-8/12 bg-gray-200 py-2">{location.state.capital}</p>
                    </div>
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Population</h3>
                        <p className="w-8/12 bg-gray-200 py-2">{location.state.population}</p>
                    </div>
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Area</h3>
                        <p className="w-8/12 bg-gray-200 py-2">{location.state.area}</p>
                    </div>
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Region</h3>
                        <p className="w-8/12 bg-gray-200 py-2">{location.state.region}</p>
                    </div>
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Subregion</h3>
                        <p className="w-8/12 bg-gray-200 py-2">{location.state.subregion}</p>
                    </div>
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Languages</h3>
                        <div className="w-8/12 bg-gray-200 py-2">
                            {/* Dropdown Language  */}
                            <div className="group inline-block relative">
                                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                    <span className="mr-1">Country Languages</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <div className="group-hover:flex absolute hidden text-gray-700 pt-1">
                                    {location.state.langKeys.map((val, index) => (
                                        <p className="bg-gray-200 hover:bg-gray-300 py-2 px-4"
                                            key={index}>
                                            <span>{val}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Currencies Name @ Symbol</h3>
                        <div className="w-8/12 bg-gray-200 py-2">
                            <details className="bg-gray-300 inline-block px-3 py-2 rounded">
                                <summary>More Currencies</summary>
                                <div className="bg-gray-500">
                                    {location.state.curncKeys.map((val, index) => (
                                        <div className="flex" key={index}>
                                            <p>{val.name}</p>
                                            <p>{val.symbol}</p>
                                        </div>
                                    ))}
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
                {/* 
                <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </div>
    );
};

export default CountryHome;
