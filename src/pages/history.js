import React from "react";
import Masthead from "../components/Masthead";
import History from "../paritals/History";

const Header = () => (
  <header>
    <Masthead>
      <h2>History of Tamiya Ryu</h2>
    </Masthead>
  </header>
);

export default () => (
  <div>
    <Header />
    <History />
  </div>
);
