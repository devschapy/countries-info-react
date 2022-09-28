import React from "react";

const Table = ({ countrys }) => {
    const tableHead = [
        { label: "Flag" },
        { label: "Name & Country Code" },
        { label: "Capital" },
        { label: "Currencies Name & Symble" },
        { label: "languages" },
        { label: "population" },
        { label: "Area" },
        { label: "Region" },
    ];

    return (
        <div className="table-auto">
            <div className="flex justify-between my-4">
                {tableHead.map((label, index) => (
                    <h1 className="text-xl font-bold" key={index}>
                        {label.label}
                    </h1>
                ))}
            </div>

            <div>
                {countrys.map((country, index) => (
                    <div
                        className="flex justify-between bg-gray-200 mb-10"
                        key={index}
                    >
                        <img className="w-24" src={country.flags.png} alt="" />
                        <div>
                            <p>{country.name.common}</p>
                            <p className="text-main">{country.cca2}</p>
                        </div>
                        <p>{country.capital}</p>
                        <div>
                            {/* <span>{country.currencies.BDT}</span> */}
                            {/* <span className="text-main">{country.currencies.BDT.symbol}</span> */}
                        </div>
                        {/* <p>{country.languages.ben}</p> */}
                        <p>{country.population}</p>
                        <p>{country.area}</p>
                        <div>
                            <p>{country.region}</p>
                            <p className="text-main bloc">
                                {country.subregion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
