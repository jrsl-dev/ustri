import React from "react";
import Masthead from "../../components/Masthead";
import EastLansing from "../../paritals/EastLansing";

const Header = () => (
  <header>
    <Masthead>
      <h2>Michigan Honbu Dojo</h2>
    </Masthead>
  </header>
);

export default () => (
  <div>
    <Header />
    <EastLansing />
  </div>
);
