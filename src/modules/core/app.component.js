import React from "react";
import { Routes, Route } from "react-router-dom";
import { WorldCountry, ErrorPage } from "../countries";
import CountryHome from "../countries/components/country.home";

function AppComponent() {
  return (
    <Routes>
      <Route path="/" element={<WorldCountry />} />
      <Route path="/:title" element={<CountryHome />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppComponent;
