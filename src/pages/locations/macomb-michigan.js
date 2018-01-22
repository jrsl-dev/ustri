import React from "react";
import Masthead from "../../components/Masthead";
import Macomb from "../../paritals/Macomb";

const Header = () => (
  <header>
    <Masthead>
      <h2>Southeast Michigan Branch Dojo</h2>
    </Masthead>
  </header>
);

export default () => (
  <div>
    <Header />
    <Macomb />
  </div>
);
