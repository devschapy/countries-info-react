import React from "react";
import Language from "./Language";

const Table = ({ countrys }) => {
    return (
        <div>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 text-center bg-gray-300 rounded-lg">
                <p className="country-info">Flag Photo</p>
                <p className="country-info">Country Name & Code</p>
                <p className="country-info">Capital Name</p>
                <p className="country-info hidden md:block">
                    Currencies Name & Symble
                </p>
                <p className="country-info hidden lg:block">Languages</p>
                <p className="country-info hidden lg:block">Population</p>
                <p className="country-info hidden lg:block">Areas</p>
                <p className="country-info hidden md:block">Region</p>
                <p className="country-info">Detailes</p>
            </div>

            <div>
                {countrys.map((country, index) => {
                    for (const key in country.currencies) {
                        console.log(`${key}: ${country.currencies[key].name}`);
                        console.log(`${key}: ${country.currencies[key].symbol}`);

                    }

                   

                    let languages = [];
                    if (
                        country["languages"] !== undefined &&
                        country.languages !== null
                    ) {
                        languages = country.languages;
                    }
                    return (
                        <div
                            className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 text-center bg-gray-200 mb-10 rounded-md"
                            key={index}
                        >
                            <img
                                className="h-full"
                                src={country.flags.png}
                                alt=""
                            />
                            <div>
                                <p>{country.name.common}</p>
                                <p className="text-main">{country.cca2}</p>
                            </div>
                            <p>{country.capital}</p>
                            <div className="hidden md:block">
                                {/* {
                                    currencies.map((item, idx) =>(
                                        console.log(item)
                                    ))
                                } */}
                                <h1>tk</h1>
                                {/* <span>{country.currencies.BDT}</span> */}
                                {/* <span className="text-main">{country.currencies.BDT.symbol}</span> */}
                            </div>
                            <div className="hidden lg:block">
                                <Language langObj={languages} />
                            </div>
                            <p className="hidden lg:block">
                                {country.population}
                            </p>
                            <p className="hidden lg:block">{country.area}</p>
                            <div className="hidden md:block">
                                <p>{country.region}</p>
                                <p className="text-main bloc">
                                    {country.subregion}
                                </p>
                            </div>
                            <div className="w-full h-full flex justify-center items-center">
                                <button className="bg-gray-300 px-6 h-10 font-bold rounded-md hover:bg-main shadow-md">
                                    More...
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Table;
