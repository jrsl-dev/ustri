import React from "react";
import USTRI from "../components/USTRI";
import Home from "../paritals/Home";

const Masthead = () => (
  <header>
    <h1>
      <USTRI />
    </h1>
  </header>
);

export default () => (
  <div>
    <Masthead />
    <Home />
  </div>
);
