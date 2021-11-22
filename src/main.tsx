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
import { Anforderungen1 } from "./sections/Anforderungen1";
import { Anforderungen2 } from "./sections/Anforderungen2";
import { Anforderungen3 } from "./sections/Anforderungen3";

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
          <Route path="anforderungen_1" element={<Anforderungen1 />} />
          <Route path="anforderungen_2" element={<Anforderungen2 />} />
          <Route path="anforderungen_3" element={<Anforderungen3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
