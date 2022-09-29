import React from "react";
import { Routes, Route } from "react-router-dom";
import { WorldCountry, ErrorPage } from "../countries";

function AppComponent() {
  return (
    <Routes>
      <Route path="/countries" element={<WorldCountry />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppComponent;
