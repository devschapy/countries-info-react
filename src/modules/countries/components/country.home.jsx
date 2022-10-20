import React from "react";
import { useLocation } from "react-router-dom";

const CountryHome = () => {
    const location = useLocation();

    const obj = location.state.altSpellings;
    const nationality = Object.entries(obj);
    const nationalityVal = nationality[2][1]
    const nationalityPepol = nationality[1][1]



    return (
        <div className="bg-gray-300 py-4">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-4xl font-bold underline py-2">
                        {location.state.name} (<span>{location.state.cntyCode}</span>)
                    </h1>
                    <h2 className="text-2xl font-semibold leading-10">{nationalityPepol}</h2>
                    <span className="text-xl italic leading-10">{nationalityVal}</span>
                </div>
                <img src={location.state.flags} alt="Country PNG" />

                <div className="space-y-1 bg-slate-200 px-3 py-4 rounded">
                    <div className="flex bg-slate-300 px-3 rounded">
                        <div className="w-4/12 py-2">
                            <p className="text-xl font-bold">Capital</p>
                            <p>and largest city</p>
                        </div>
                        <p className="w-8/12 pl-3 py-2">{location.state.capital}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Population</h3>
                        <p className="w-8/12 pl-3 py-2">{location.state.population}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Area</h3>
                        <p className="w-8/12 pl-3 py-2">{location.state.area}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Region</h3>
                        <p className="w-8/12 pl-3 py-2">{location.state.region}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Subregion</h3>
                        <p className="w-8/12 pl-3 py-2">{location.state.subregion}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <div className="w-4/12 py-2">
                            <p className="text-xl font-bold">Official language</p>
                            <p>and national language</p>
                        </div>
                        <div className="w-8/12 pl-3 py-2">
                            <details className="inline-block px-3 py-2 rounded">
                                <summary>More Currencies</summary>
                                <div className="bg-gray-400 py-2 px-3 rounded">
                                    {location.state.langKeys.map((val, index) => (
                                        <p className="inline-block px-2 py-1 rounded bg-slate-300"
                                            key={index}>
                                            <span>{val}</span>
                                        </p>
                                    ))}
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="w-4/12 py-2 text-xl font-bold">Currencies Name @ Symbol</h3>
                        <div className="w-8/12 pl-3 py-2">
                            <details className="inline-block px-3 py-2 rounded">
                                <summary>More Currencies</summary>
                                <div className="bg-gray-400 py-2 px-3 rounded">
                                    {location.state.curncKeys.map((val, index) => (
                                        <div className="flex gap-3 py-2 px-2 rounded bg-slate-300" key={index}>
                                            <p>{val.name}</p>
                                            <p className="bg-green-500 px-3 rounded-md">{val.symbol}</p>
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
