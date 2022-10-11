import React from "react";
import { Link } from "react-router-dom";
import { ObjKeys } from "./ObjKeysFun";
import { Icon } from "@iconify/react";

const Table = ({ countrys, searchTerm, onChangeHandler, submitHandler }) => {
    return (
        <>
            <form onSubmit={submitHandler} className="pb-6">
                <div className="flex justify-center gap-1">
                    <div className="relative w-6/12">
                        <label htmlFor="search">
                            <Icon
                                className="searchIcon"
                                icon="bi:search-heart"
                            />
                        </label>
                        <input
                            className="inputStyle"
                            placeholder="Search for anything..."
                            type="text"
                            id="search"
                            name="search"
                            // value={searchTerm}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <button className="btn" type="submit">
                        Search
                    </button>
                </div>
            </form>

            <div className="countryHeaderDiv">
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
                {countrys
                    .filter((val) => {
                        if (searchTerm === "") {
                            return val;
                        } else if (
                            val.name.common
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        }
                        return val
                    })
                    .map((country, index) => {
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
                            population: country.population,
                            area: country.area,
                            region: country.region,
                            subregion: country.subregion,

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
