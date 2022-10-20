import React from "react";
import { Link } from "react-router-dom";
import { ObjKeys } from "./ObjKeysFun";

const Table = ({ countrys }) => {
    return (
        <>
            <div className="countryHeaderDiv">
                <p className="country-info">Flag Photo</p>
                <p className="country-info">Country Name</p>
                <p className="country-info">Capital Name</p>
                <p className="country-info hidden md:block">
                    Currencies Name
                </p>
                <p className="country-info hidden lg:block">Languages</p>
                <p className="country-info hidden lg:block">Population</p>
                <p className="country-info hidden lg:block">Areas</p>
                <p className="country-info hidden md:block">Region</p>
                <p className="country-info">Detailes</p>
            </div>

            <div>
                {countrys.map((country, index) => {
                        console.log(country);
                        const { cca2 } = country;
                        let currencies = country.currencies;
                        let languages = [];
                        let langKeys = [];
                        let curncKeys = [];

                        if (
                            country["languages"] !== undefined &&
                            country.languages !== null
                        ) {
                            languages = country.languages;
                        }

                        langKeys = ObjKeys(languages);
                        curncKeys = ObjKeys(currencies);

                        const langElements = langKeys.map((val, index) => (
                            <p key={index}>{val}</p>
                        ));

                        //-----------==>
                        let countryDetails = {
                            name: country.name.common,
                            capital: country.capital,
                            cntyCode: country.cca2,
                            flags: country.flags.png,
                            curncKeys,
                            langKeys,
                            maps: country.maps,
                            population: country.population,
                            area: country.area,
                            region: country.region,
                            subregion: country.subregion,
                            altSpellings: country.altSpellings,

                        };

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
                                    <p className="text-main">{cca2}</p>
                                </div>
                                <p>{country.capital}</p>
                                <div className="hidden md:block">
                                    {curncKeys.map((item, idx) => (
                                        <div key={idx}>
                                            <p key={idx + 1}>{item.name}</p>
                                            <p
                                                key={idx + 121}
                                                className="text-main"
                                            >
                                                {item.symbol}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="hidden lg:block">
                                    {langElements}
                                </div>
                                <p className="hidden lg:block">
                                    {country.population}
                                </p>
                                <p className="hidden lg:block">
                                    {country.area}
                                </p>
                                <div className="hidden md:block">
                                    <p>{country.region}</p>
                                    <p className="text-main bloc">
                                        {country.subregion}
                                    </p>
                                </div>
                                <div className="w-full h-full flex justify-center items-center">
                                    <Link
                                        className="bg-gray-300 px-6 h-10 leading-10 font-bold rounded-md hover:bg-main shadow-md"
                                        to={cca2}
                                        state={countryDetails}
                                    >
                                        More...
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Table;
