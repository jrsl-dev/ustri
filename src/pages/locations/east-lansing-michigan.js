import React from "react";
import Masthead from "../../components/Masthead";
import EastLansing from "../../paritals/EastLansing";

const Header = () => (
  <header>
    <Masthead />
  </header>
);

export default () => (
  <div>
    <Header />
    <EastLansing />
  </div>
);
