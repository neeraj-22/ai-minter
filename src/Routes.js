import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import FormPage from "./pages/form.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path="/" exact element={<Homepage />} />
        {/* <Route path="/form" exact element={<FormPage/>} /> */}
        {/* <Route path="/:category" exact element={<CategoryPage />} /> */}
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;