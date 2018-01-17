import React from "react";
import Masthead from "../components/Masthead";
import History from "../paritals/History";

const Header = () => (
  <header>
    <Masthead />
  </header>
);

export default () => (
  <div>
    <Header />
    <h2>History of Tamiya Ryu</h2>
    <History />
  </div>
);
