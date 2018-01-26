import React from "react";
import Masthead from "../../components/Masthead/Content";
import EastLansing from "../../paritals/EastLansing";

const Header = () => (
  <Masthead>
    <h2>Michigan Honbu Dojo</h2>
  </Masthead>
);

export default () => (
  <div>
    <Header />
    <EastLansing />
  </div>
);
