import React from "react";
import { ObjKeysFun } from "./ObjKeysFun";
import { Icon } from "@iconify/react";

const Table = ({ countrys, searchTerm, onChangeHandler, submitHandler }) => {
    console.log(searchTerm);
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
                            value={searchTerm}
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
                {countrys.map((country, index) => {
                    let curncKeys = [];
                    let currencies = country.currencies;
                    curncKeys = ObjKeysFun(currencies);
                    // for (let key in currencies) {
                    //     curncKeys.push(currencies[key]);
                    // }

                    let languages = [];
                    if (
                        country["languages"] !== undefined &&
                        country.languages !== null
                    ) {
                        languages = country.languages;
                    }
                    let langKeys = [];
                    langKeys = ObjKeysFun(languages);

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
                                {curncKeys.map((item, idx) => (
                                    <div key={idx + 1}>
                                        <p key={idx}>{item.name}</p>
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
                                {langKeys.map((val, index) => (
                                    <p key={index}>{val}</p>
                                ))}
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
        </>
    );
};

export default Table;
