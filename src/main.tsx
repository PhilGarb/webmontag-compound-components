import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Layout } from "./Layout";
import { Route, Routes } from "react-router";
import { HTMLAccordionSlide } from "./sections/HTMLAccordion";
import { Outline } from "./sections/Outline";
import { BrowserRouter } from "react-router-dom";
import { FirstReactAccordionSlide } from "./sections/FirstReactAccordion";
import { Reflection } from "./sections/Reflection";
import { CompoundAccordionSlide } from "./sections/CompoundAccordion";
import { Result } from "./sections/Result";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Outline />} />
          <Route path="html-accordion" element={<HTMLAccordionSlide />} />
          <Route
            path="erstes-react-accordion"
            element={<FirstReactAccordionSlide />}
          />
          <Route path="reflektion" element={<Reflection />} />
          <Route
            path="compound-react-accordion"
            element={<CompoundAccordionSlide />}
          />
          <Route path="ergebnis" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
