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
                <h2 className="md:text-2xl sm:hidden text-md text-center font-semibold">{nationalityPepol}</h2>
                <h3 className="md:text-xl sm:hidden text-center text-md italic">{nationalityVal}</h3>
                <div className="flex justify-between border-b py-4 border-gray-400">
                    <div className="md:w-4/12">
                        <img className="w-20" src={location.state.flags} alt="Country PNG" />
                    </div>

                    <div className="text-center md:w-4/12">
                        <h1 className="lg:text-2xl text-lg font-bold underline">
                            {location.state.name} (<span>{location.state.cntyCode}</span>)
                        </h1>
                        <h2 className="lg:text-xl hidden sm:block text-md font-semibold">{nationalityPepol}</h2>
                        <span className="lg:text-lg hidden sm:block text-sm italic">{nationalityVal}</span>
                    </div>

                    <div className="md:w-4/12 relative">
                        <img className="w-20 md:absolute right-0" src={location.state.coatOfArms} alt="" />
                    </div>
                </div>

                <div className="space-y-1 bg-slate-200 px-3 py-4 mt-5 rounded">
                    <div className="flex bg-slate-300 px-3 rounded">
                        <div className="md:w-4/12 w-6/12 py-2">
                            <p className="text-xl font-bold">Capital</p>
                            <p>and largest city</p>
                        </div>
                        <p className="w-6/12 md:w-8/12 pl-3 py-2">{location.state.capital}</p>
                    </div>

                    <div className="flex bg-slate-300 px-3 rounded">
                        <div className="md:w-4/12 w-6/12 py-2">
                            <p className="text-xl font-bold">Car Driving</p>
                            <p>Side & Signs</p>
                        </div>
                        <div className="w-6/12 md:w-8/12 pl-3 py-2">



                            <details className="inline-block px-3 py-2 rounded relative">
                                <summary>Driving Side</summary>
                                <div className="bg-gray-400 py-2 px-3 rounded absolute">
                                    <p>{location.state.car.side}</p>
                                </div>
                            </details>
                            <details className="inline-block px-3 py-2 rounded relative">
                                <summary>Car Signs</summary>
                                <div className="bg-gray-400 py-2 px-3 rounded absolute">
                                    {location.state.car.signs.map((itm, idx) => (
                                        <div key={idx}>
                                            <p>{itm}</p>
                                        </div>
                                    ))}
                                </div>
                            </details>





                        </div>
                    </div>

                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="md:w-4/12 w-6/12 py-2 text-xl font-bold">Population</h3>
                        <p className="w-6/12 md:w-8/12 pl-3 py-2">{location.state.population}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="md:w-4/12 w-6/12 py-2 text-xl font-bold">Area</h3>
                        <p className="w-6/12 md:w-8/12 pl-3 py-2">{location.state.area}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="md:w-4/12 w-6/12 py-2 text-xl font-bold">Region</h3>
                        <p className="w-6/12 md:w-8/12 pl-3 py-2">{location.state.region}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <h3 className="md:w-4/12 w-6/12 py-2 text-xl font-bold">Subregion</h3>
                        <p className="w-6/12 md:w-8/12 pl-3 py-2">{location.state.subregion}</p>
                    </div>
                    <div className="flex bg-slate-300 px-3 rounded">
                        <div className="md:w-4/12 w-6/12 py-2">
                            <p className="text-xl font-bold">Official language</p>
                            <p>and national language</p>
                        </div>
                        <div className="w-6/12 md:w-8/12 pl-3 py-2">
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
                        <h3 className="md:w-4/12 w-6/12 py-2 text-xl font-bold">Currencies Name @ Symbol</h3>
                        <div className="w-6/12 md:w-8/12 pl-3 py-2">
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
