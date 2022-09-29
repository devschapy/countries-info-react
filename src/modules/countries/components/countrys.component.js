import React from "react";
import FetchData from "./fetchData";

const WorldCountry = () => {
    return (
        <section className="bg-gray-200 py-10">
            <div className="container mx-auto ">
                <div className="text-center pb-6">
                    <h1 className="text-3xl font-bold">
                        World Countries Informations
                    </h1>
                </div>
                <FetchData />
            </div>
        </section>
    );
};

export default WorldCountry;
